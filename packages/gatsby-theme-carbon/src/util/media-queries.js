import { breakpoints as CarbonBreakpoints, breakpoint } from '@carbon/elements';

/**
 * Returns an object containing various mediaqueries for Carbon breakpoints
 *
 * sm: "@media (min-width: 20rem)"
 *
 * md: "@media (min-width: 42rem)"
 *
 * lg: "@media (min-width: 66rem)"
 *
 * xlg: "@media (min-width: 82rem)"
 *
 * max: "@media (min-width: 99rem)"
 */
const mq = Object.keys(CarbonBreakpoints).reduce((obj, bp) => {
  obj[bp] = breakpoint(bp);
  return obj;
}, {});

export default mq;
