import { greenwichSidereal } from '@lp-labs/sidereal-time';
if (Math.abs(greenwichSidereal(2451545) - 18.697374558) > 1e-8) throw new Error('Sidereal');
// @ts-expect-error invalid argument must be rejected by declarations
greenwichSidereal('2451545');
