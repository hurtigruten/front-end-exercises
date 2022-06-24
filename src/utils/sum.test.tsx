/**
 * @vitest-environment jsdom
 */

import { expect, test } from 'vitest';

import { sum } from './sum';

test('should sum up numbers', () => {
  expect(sum([1, 2, 3])).toBe(6);
});

test('should return the initial value when no value given', () => {
  expect(sum([])).toBe(0);
});
