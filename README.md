# @lp-labs/sidereal-time

Approximate Greenwich and local mean sidereal time.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/sidereal-time
```

## Working example

```js
import { greenwichSidereal } from '@lp-labs/sidereal-time';
if (Math.abs(greenwichSidereal(2451545) - 18.697374558) > 1e-8) throw new Error('Sidereal');
```

CommonJS: `const api = require('@lp-labs/sidereal-time')`.

## Behavior, customization and limits

greenwichSidereal(jdUt1) uses IAU1982-style polynomial in degrees, returns hours[0,24); JD within +/-3652500days of2451545 (10k Julian years). localSidereal(jdUt1,longitudeDeg) east-positive longitude[-180,180]. Input must UT1, not silently converted from UTC/TT; no nutation, polar motion or apparent sidereal corrections. O(1), precision degrades far from J2000; not precision navigation.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function greenwichSidereal(jdUt1: number): number;
export declare function localSidereal(jdUt1: number, longitudeDeg: number): number;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
