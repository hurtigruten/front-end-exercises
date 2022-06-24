import { sum } from './sum';

it('should sum up numbers', () => {
  expect(sum([1, 2, 3])).toBe(6);
});

it('should return the initial value when no value given', () => {
  expect(sum([])).toBe(0);
});
