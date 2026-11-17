'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { factorial } = require('../factorial');

test('factorial of zero is one', () => {
  assert.equal(factorial(0), 1);
});

test('factorial of five is 120', () => {
  assert.equal(factorial(5), 120);
});

test('factorial of six is 720', () => {
  assert.equal(factorial(6), 720);
});

test('negative input is rejected', () => {
  assert.throws(() => factorial(-1), /non-negative integer/);
});
