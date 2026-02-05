
import { test, expect } from 'bun:test';
import * as math from '../index';

test('add', () => {
  expect(math.add(5, 3)).toBe(8);
});

test('subtract', () => {
  expect(math.subtract(10, 4)).toBe(6);
});

test('multiply', () => {
  expect(math.multiply(6, 7)).toBe(42);
});

test('divide', () => {
  expect(math.divide(20, 4)).toBe(5);
});

test('divide by zero throws', () => {
  expect(() => math.divide(1, 0)).toThrow();
});

test('constants PI and E', () => {
  expect(math.PI).toBeCloseTo(3.14159);
  expect(math.E).toBeCloseTo(2.71828);
});

test('circleArea and circleCircumference', () => {
  expect(math.circleArea(2)).toBeCloseTo(math.PI * 4);
  expect(math.circleCircumference(2)).toBeCloseTo(2 * math.PI * 2);
});

test('exponentialGrowth and logarithm', () => {
  const eg = math.exponentialGrowth(100, 0.05, 2);
  expect(eg).toBeCloseTo(100 * Math.pow(math.E, 0.05 * 2));
  expect(math.logarithm(Math.E)).toBeCloseTo(1);
});

test('power, squareRoot, absoluteValue', () => {
  expect(math.power(2, 8)).toBe(256);
  expect(math.squareRoot(16)).toBe(4);
  expect(math.absoluteValue(-42)).toBe(42);
});

test('round, floor, ceil', () => {
  expect(math.round(3.14159, 2)).toBeCloseTo(3.14);
  expect(math.floor(4.9)).toBe(4);
  expect(math.ceil(4.1)).toBe(5);
});

test('server responds to route', async () => {
  const srv = Bun.serve({
    port: 0,
    fetch(req) {
      const url = new URL(req.url);
      if (url.pathname === '/test') return new Response('ok', { status: 200 });
      return new Response('not found', { status: 404 });
    }
  });

  try {
    const res = await fetch(`http://localhost:${srv.port}/test`);
    const text = await res.text();
    expect(res.status).toBe(200);
    expect(text).toBe('ok');
  } finally {
    srv.stop();
  }
});