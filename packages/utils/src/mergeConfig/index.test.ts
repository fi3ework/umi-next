import mergeConfig from './index';

test('mergeConfig', () => {
  expect(mergeConfig({ a: 1 }, { b: 2 })).toEqual({
    a: 1,
    b: 2,
  });
});
