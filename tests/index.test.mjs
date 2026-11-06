import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('J2000 value', () => {
  assert.ok(Math.abs(api.greenwichSidereal(2451545) - 18.697374558) < 1e-10);
});
test('east longitude offset', () => {
  assert.ok(Math.abs(api.localSidereal(2451545, 30) - 20.697374558) < 1e-10);
});
test('west wrap', () => {
  assert.ok(api.localSidereal(2451545, -180) >= 0 && api.localSidereal(2451545, -180) < 24);
});
test('known Meeus epoch', () => {
  assert.ok(Math.abs(api.greenwichSidereal(2446895.5) - 13.17954634) < 1e-7);
});
test('invalid values', () => {
  assert.throws(() => api.localSidereal(2451545, 181));
  assert.throws(() => api.greenwichSidereal(NaN));
});
test('daily sidereal excess', () => {
  const a = api.greenwichSidereal(2451545),
    b = api.greenwichSidereal(2451546);
  assert.ok(Math.abs(((b - a + 24) % 24) - 0.0657098244) < 1e-9);
});
