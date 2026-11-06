function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
export function greenwichSidereal(jdUt1: number): number {
  finite(jdUt1, 2451545 - 3652500, 2451545 + 3652500);
  const d = jdUt1 - 2451545,
    t = d / 36525,
    degrees = 280.46061837 + 360.98564736629 * d + 0.000387933 * t * t - (t * t * t) / 38710000;
  return (((degrees % 360) + 360) % 360) / 15;
}
export function localSidereal(jdUt1: number, longitudeDeg: number): number {
  finite(longitudeDeg, -180, 180);
  const h = greenwichSidereal(jdUt1) + longitudeDeg / 15;
  return ((h % 24) + 24) % 24;
}
