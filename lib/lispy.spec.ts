import { evaluate, interpret, readFromTokens, tokenize } from './lispy';

describe('evaluate', () => {
  it('evaluates lambda', () => {
    evaluate('(define circle-area (lambda (r) (* pi (* r r))))');
    evaluate('(define fact (lambda (n) (if (<= n 1) 1 (* n (fact (- n 1))))))');

    expect(evaluate('(circle-area 3)')).toEqual(28.274333882308138);
    expect(evaluate('(fact 4)')).toEqual(24);
  });
});

describe('tokenize', () => {
  it('splits code into tokens', () => {
    let tokens = tokenize('(begin (define r 10) (* pi (* r r)))');
    expect(tokens).toEqual([
      '(',
      'begin',
      '(',
      'define',
      'r',
      '10',
      ')',
      '(',
      '*',
      'pi',
      '(',
      '*',
      'r',
      'r',
      ')',
      ')',
      ')',
    ]);
  });
});

describe('readFromTokens', () => {
  it('reads from tokens', () => {
    let ast = readFromTokens(['(', '*', 'pi', '(', '*', '10', '10', ')', ')']);
    expect(ast).toEqual(['*', 'pi', ['*', 10, 10]]);
  });

  it('throws if passed empty list', () => {
    expect(() => readFromTokens([])).toThrow('Unexpected EOF');
  });

  it('throws if list starts with ")"', () => {
    expect(() => readFromTokens([')', '*', '10', '10', ')'])).toThrow('Unexpected ")"');
  });
});

describe('interpret', () => {
  it('interprets numbers as numbers', () => {
    let result = interpret(10);
    expect(result).toEqual(10);
  });

  it('interprets strings as env references', () => {
    let result = interpret('sum');
    expect(result).toEqual(60);
  });

  it('interprets "if" conditionals', () => {
    let result = interpret(['if', ['>', 10, 5], ['*', 10, 10], ['+', 10, 10]]);
    expect(result).toEqual(100);
  });

  it('interprets "define"', () => {
    let result = interpret(['begin', ['define', 'r', 3], ['*', 'pi', ['*', 'r', 'r']]]);
    expect(result).toEqual(3 * 3 * Math.PI);
  });
});
