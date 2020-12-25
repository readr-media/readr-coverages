const breakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

const mediaBreakpointMdUp = `@media (min-width: ${breakpoints.md})`;
const mediaBreakpointXlUp = `@media (min-width: ${breakpoints.xl})`;

export default breakpoints;

export { mediaBreakpointMdUp, mediaBreakpointXlUp };
