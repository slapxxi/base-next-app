import { zipObject } from 'lodash';

let globalEnv = {
  '+': (first: number, second: number) => first + second,
  '-': (first: number, second: number) => first - second,
  '*': (first: number, second: number) => first * second,
  '>': (first: number, second: number) => first > second,
  '>=': (first: number, second: number) => first >= second,
  '<=': (first: number, second: number) => first <= second,
  begin: (...args: any[]) => args[args.length - 1],
  min: Math.min,
  max: Math.max,
  sum: (...args: any[]) => args.reduce((prev, current) => prev + current),
  pi: Math.PI,
  find(name: string) {
    return this;
  },
};

export function parse(code: string) {
  return readFromTokens(tokenize(code));
}

export function tokenize(code: string) {
  return code.replace(/[()]/g, ' $& ').split(' ').filter(Boolean);
}

export function readFromTokens(tokens: string[]): any {
  if (tokens.length === 0) {
    throw new SyntaxError('Unexpected EOF');
  }

  let token = tokens.shift();

  switch (token) {
    case '(':
      let list = [];
      while (tokens[0] !== ')') {
        list.push(readFromTokens(tokens));
      }
      tokens.shift();
      return list;
    case ')':
      throw new SyntaxError('Unexpected ")"');
    default:
      return atom(token);
  }
}

function atom(token: string) {
  let parsed = parseFloat(token);
  return isNaN(parsed) ? token : parsed;
}

export function interpret(tree: any, env = globalEnv): any {
  if (typeof tree === 'string') {
    return env.find(tree)[tree];
  }

  if (!Array.isArray(tree)) {
    return tree;
  }

  let [operation, ...args] = tree;
  let symbol, exp;

  switch (operation) {
    case 'quote':
      return args[0];
    case 'if':
      let [test, conseq, alt] = args;
      exp = interpret(test, env) ? conseq : alt;
      return interpret(exp, env);
    case 'define':
      [symbol, exp] = args;
      env[symbol] = interpret(exp, env);
      return;
    case 'set!':
      [symbol, exp] = args;
      env.find(symbol)[symbol] = interpret(exp, env);
      return;
    case 'lambda':
      let [params, body] = args;
      return createProcedure(params, body, env);
    default:
      let proc = interpret(operation, env);
      let values = args.map((arg) => interpret(arg, env));
      return proc(...values);
  }
}

export function evaluate(code: string) {
  return interpret(readFromTokens(tokenize(code)));
}

export function createEnv(variables: any, outer = globalEnv) {
  return {
    ...variables,
    find(name: string) {
      let match = this[name];

      if (match) {
        return this;
      }

      return outer;
    },
  };
}

function createProcedure(params, body, env) {
  return (...args) => {
    return interpret(body, createEnv(zipObject(params, args), env));
  };
}
