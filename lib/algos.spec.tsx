import { binarySearch } from './algos';

test('numbers', () => {
  expect(0xd800).toMatchInlineSnapshot(`55296`);
  expect(0xdbff).toMatchInlineSnapshot(`56319`);

  expect(1e3).toEqual(1000);
  expect(1e-3).toEqual(0.001);

  expect(~3).toEqual(-4);
  expect(~-3).toEqual(2);
  expect(~3.3).toEqual(-4);
  expect(~-3.3).toEqual(2);
  expect(~~3.3).toEqual(3);
  expect(~~-3.3).toEqual(-3);

  expect(parseInt('10', 10)).toEqual(10);
  expect(parseInt('', 10)).toBeNaN();
});

test('strings', () => {
  let str = 'test';

  expect('S\u0307').toMatchInlineSnapshot(`"Ṡ"`);
  expect('a\u0307').toMatchInlineSnapshot(`"ȧ"`);
  expect('S\u0307\u0323').toMatchInlineSnapshot(`"Ṩ"`);
  expect('S\u0307\u0323'.normalize()).toMatchInlineSnapshot(`"Ṩ"`);

  expect(str.length).toEqual(4);
  expect(str.charAt(2)).toEqual('s');
  expect(str.charAt(100)).toEqual('');

  expect(str.codePointAt(0)).toEqual(116);

  let chars = [];
  for (let char of str) {
    chars.push(char);
  }
  expect(chars).toEqual(['t', 'e', 's', 't']);

  expect(() => {
    str[0] = 'r';
  }).toThrow(/cannot assign/gi);

  expect(str.toUpperCase()).toEqual('TEST');
  expect(str.toLowerCase()).toEqual('test');

  expect(str.indexOf('tes')).toEqual(0);
  expect(str.indexOf('t', 1)).toEqual(3);
  expect(str.indexOf('Tes')).toEqual(-1);
  expect(~str.indexOf('Tes')).toEqual(0);

  expect(str.lastIndexOf('t')).toEqual(3);

  expect(str.includes('est')).toEqual(true);
  expect(str.includes('rest')).toEqual(false);
  expect(str.includes('st', 2)).toEqual(true);

  expect(str.startsWith('tes')).toEqual(true);
  expect(str.startsWith('res')).toEqual(false);

  expect(str.endsWith('est')).toEqual(true);
  expect(str.endsWith('tse')).toEqual(false);

  expect(str.slice(1)).toEqual('est');
  expect(str.slice(1, 3)).toEqual('es');
  expect(str.slice(-2)).toEqual('st');
  expect(str.slice(-3, -1)).toEqual('es');
  expect(str.slice(-3, -4)).toEqual('');

  expect(str.substring(2)).toEqual('st');
  expect(str.substring(3, 1)).toEqual('es');
  expect(str.substring(-2)).toEqual('test');

  expect(str.substr(2)).toEqual('st');
  expect(str.substr(1, 2)).toEqual('es');
  expect(str.substr(-4, 2)).toEqual('te');

  expect(str.localeCompare('rest')).toEqual(1);

  expect(String.fromCodePoint(32)).toEqual(' ');
});

test('arrays', () => {
  let arr = [];

  arr.push(1, 2, 3);
  expect(arr).toEqual([1, 2, 3]);

  arr.shift();
  expect(arr).toEqual([2, 3]);

  arr.pop();
  expect(arr).toEqual([2]);

  arr.unshift(0, 1);
  expect(arr).toEqual([0, 1, 2]);

  let removed;

  removed = arr.splice(0, 3);
  expect(arr).toEqual([]);
  expect(removed).toEqual([0, 1, 2]);

  removed = arr.splice(0, 0, 1, 2, 3);
  expect(arr).toEqual([1, 2, 3]);
  expect(removed).toEqual([]);

  removed = arr.splice(1, 2, 2, 3);
  expect(arr).toEqual([1, 2, 3]);
  expect(removed).toEqual([2, 3]);

  removed = arr.splice(-1, 1, 3, 4);
  expect(arr).toEqual([1, 2, 3, 4]);
  expect(removed).toEqual([3]);

  expect([1, 2, 3].slice(1)).toEqual([2, 3]);
  expect([1, 2, 3].slice(-2)).toEqual([2, 3]);
  expect([1, 2, 3].slice(1, 3)).toEqual([2, 3]);

  expect([0].concat([1, 2])).toEqual([0, 1, 2]);
  expect([0].concat([1], [2, 3], [4])).toEqual([0, 1, 2, 3, 4]);
  expect([0].concat([1, 2], 3, 4)).toEqual([0, 1, 2, 3, 4]);

  expect([1, 2, 3].indexOf(3)).toEqual(2);
  expect([1, 2, 3].indexOf(4)).toEqual(-1);
  expect([1, 1, 1].indexOf(1, 1)).toEqual(1);

  expect([1, 1, 1].lastIndexOf(1)).toEqual(2);
  expect([1, 1, 1].lastIndexOf(1, 0)).toEqual(0);
  expect([1, 1, 1].lastIndexOf(2)).toEqual(-1);

  expect([1, 2, 3].includes(3)).toEqual(true);
  expect([1, 2, 3].includes(4)).toEqual(false);

  let users = [{ name: 'admin' }, { name: 'denis', id: 0 }, { name: 'admin2' }];
  expect(users.find((u) => u.name === 'denis')).toEqual({
    name: 'denis',
    id: 0,
  });

  users.sort((first, second) => first.name.localeCompare(second.name));
  expect(users).toEqual([
    { name: 'admin' },
    { name: 'admin2' },
    { id: 0, name: 'denis' },
  ]);

  arr = [1, 2, 3];
  arr.reverse();
  expect(arr).toEqual([3, 2, 1]);

  expect(arr.join('')).toEqual('321');

  let darr = [1, 2, 3];
  darr.length = 0;
  expect(darr).toEqual([]);

  expect(String([1, 2, 3])).toEqual('1,2,3');

  expect([1, 2, 3] == [1, 2, 3]).toEqual(false);
  expect([1, 2, 3] === [1, 2, 3]).toEqual(false);

  expect(Array.from('test')).toEqual(['t', 'e', 's', 't']);
  expect(Array.from({ 0: 'first', 1: 'second', length: 2 })).toEqual([
    'first',
    'second',
  ]);
  expect(
    Array.from({
      [Symbol.iterator]: function* () {
        yield 'first';
        yield 'second';
      },
    })
  ).toEqual(['first', 'second']);
  expect(
    Array.from(
      {
        [Symbol.iterator]: function* () {
          yield 'first';
          yield 'second';
        },
      },
      (item) => item.toUpperCase()
    )
  ).toEqual(['FIRST', 'SECOND']);
});

test('Map', () => {
  let m = new Map();
  let key = { id: 1 };

  m.set('id', '1');
  m.set('name', 'admin');
  m.set(key, { name: 'admin' });

  expect(m.size).toEqual(3);
  expect(m.get(key)).toEqual({ name: 'admin' });
  expect(m.get({ id: 1 })).toBeUndefined();
  expect(Array.from(m)).toEqual([
    ['id', '1'],
    ['name', 'admin'],
    [{ id: 1 }, { name: 'admin' }],
  ]);

  let keys = [];
  for (let key of m.keys()) {
    keys.push(key);
  }
  expect(keys).toEqual(['id', 'name', key]);

  let values = [];
  for (let value of m.values()) {
    values.push(value);
  }
  expect(values).toEqual(['1', 'admin', { name: 'admin' }]);

  let entries = [];
  for (let value of m.entries()) {
    entries.push(value);
  }
  expect(entries).toEqual([
    ['id', '1'],
    ['name', 'admin'],
    [key, { name: 'admin' }],
  ]);

  let m2 = new Map([['key', 'value']]);
  expect([...m2.entries()]).toEqual([['key', 'value']]);
});

test('Set', () => {
  let s = new Set();
  s.add('name');
  s.add('name');
  s.add('name');
  s.add('surname');

  let [, surname] = s;
  expect(surname).toEqual('surname');

  expect(s.size).toEqual(2);
  expect([...s.values()]).toEqual(['name', 'surname']);
});

test('WeakMap', () => {
  let wm = new WeakMap();
  let key = { id: '007' };
  wm.set(key, { name: 'James' });
  expect(wm.get(key)).toEqual({ name: 'James' });
  key = null!;
});

test('WeakSet', () => {
  let ws = new WeakSet();
  let key = { id: '007' };
  ws.add(key);
  expect(ws.has(key)).toBeTruthy();
});

test('Object', () => {
  let o = { name: 'denis', age: 29 } as any;
  let hidden = Symbol('hidden');
  o[hidden] = '_cant see me_';

  expect(Object.keys(o)).toEqual(['name', 'age']);
  expect(Object.values(o)).toEqual(['denis', 29]);
  expect(Object.entries(o)).toEqual([
    ['name', 'denis'],
    ['age', 29],
  ]);
  expect(Reflect.ownKeys(o)).toEqual(['name', 'age', hidden]);
  expect(Object.getOwnPropertySymbols(o)).toEqual([hidden]);
});

test('JSON', () => {
  let params = {
    id: '007',
    name: 'Bond',
    createdAt: 'Sat Mar 27 2021 09:53:21 GMT+0300 (Moscow Standard Time)',
  };
  let result = JSON.stringify(params, null, 2);

  expect(typeof result).toEqual('string');
  expect(result).toMatchInlineSnapshot(`
    "{
      \\"id\\": \\"007\\",
      \\"name\\": \\"Bond\\",
      \\"createdAt\\": \\"Sat Mar 27 2021 09:53:21 GMT+0300 (Moscow Standard Time)\\"
    }"
  `);

  expect(JSON.stringify(params, ['id'])).toMatchInlineSnapshot(
    `"{\\"id\\":\\"007\\"}"`
  );

  expect(JSON.parse(result)).toEqual({
    id: '007',
    name: 'Bond',
    createdAt: 'Sat Mar 27 2021 09:53:21 GMT+0300 (Moscow Standard Time)',
  });

  let resultWithDate = JSON.parse(result, function revive(key, value) {
    return key === 'createdAt' ? new Date(value) : value;
  });

  expect(resultWithDate).toEqual(
    expect.objectContaining({ id: '007', name: 'Bond' })
  );
  expect(resultWithDate.createdAt).toBeInstanceOf(Date);
  expect(resultWithDate.createdAt.toString()).toEqual(
    'Sat Mar 27 2021 09:53:21 GMT+0300 (Moscow Standard Time)'
  );
});

test('recursion', () => {
  function pow(x: number, n: number): number {
    return n === 1 ? x : x * pow(x, n - 1);
  }

  expect(pow(2, 3)).toEqual(8);
});

test('functions', () => {
  globalThis.a = 100;
  globalThis.b = 100;
  let f = new Function('return a + b');
  let result = f();
  expect(result).toEqual(200);
});

test('property flags', () => {
  let data = { name: 'James', id: '007' } as any;

  Object.defineProperty(data, 'age', {
    value: 38,
    enumerable: false,
    writable: false,
    configurable: false,
  });

  expect(data.age).toEqual(38);
  expect(Object.keys(data)).toContain('name');
  expect(Object.keys(data)).toContain('id');
  expect(Object.keys(data)).not.toContain('age');
  expect(() => (data.age = 38)).toThrow(/cannot assign/i);
  expect(() => delete data.age).toThrow(/cannot delete/i);

  let descriptors = Object.getOwnPropertyDescriptors(data);
  expect(descriptors.id).toHaveProperty('enumerable');
  expect(descriptors.name).toHaveProperty('enumerable');
  expect(descriptors.age).toHaveProperty('enumerable');

  let empty = {};
  Object.preventExtensions(empty);
  expect(() => (empty.age = 38)).toThrow(/cannot add property/i);
});

test('getters/setters', () => {
  let data = {
    _firstName: 'James',
    _secondName: 'Bond',
    get id() {
      return '007';
    },
    get name() {
      return `${this._secondName}, ${this._firstName} ${this._secondName}`;
    },
    set name(name: string) {
      throw new Error(`${name}? Nice try, scum!`);
    },
  };

  expect(data.name).toEqual('Bond, James Bond');
  expect(() => (data.name = 'Loser')).toThrow('Loser? Nice try, scum!');
});

test('prototypes', () => {
  let common = { hidden: false };
  let data = { name: 'James' };

  expect(Object.getPrototypeOf(data)).toEqual({});

  Object.setPrototypeOf(data, common);
  expect(Object.getPrototypeOf(data)).toEqual(common);
  expect(data.hasOwnProperty('name')).toEqual(true);
  expect(data.hasOwnProperty('hidden')).toEqual(false);
});

test('classes', () => {
  class Response {
    static author = 'me';
  }

  expect(typeof Response).toEqual('function');
  expect(Response.author).toEqual('me');
});

test('Promises', (done) => {
  let promise = new Promise((res, rej) => {
    console.log('executor');
    setTimeout(() => {
      res(true);
    }, 100);
  });
  let second = promise.then((secondResult) => {
    console.log({ secondResult });
    return new Thenable();
  });
  second.then((thenableResult) => {
    console.log({ thenableResult });
    done();
  });
  console.log({ second });
});

test('binarySearch', () => {
  let result = binarySearch([1, 2, 3]);
  expect(result).toEqual([1, 2, 3]);
});

class Thenable {
  then(res, rej) {
    console.log({ res });
    setTimeout(() => {
      res('thenable');
    }, 100);
  }
}
