import { DefaultTheme } from 'styled-components';

export const defaultMaxWidth = 1440;
export const railsMaxWidth = 1366;

const fontSize = 16;
const playerWidgetMobileHeightRem = 100 / fontSize;
const playerWidgetDesktopHeightRem = 72 / fontSize;
const headerHeight = 76;

const theme: DefaultTheme = {
  headerHeight,
  playerWidgetMobileHeight: playerWidgetMobileHeightRem,
  playerWidgetDesktopHeight: playerWidgetDesktopHeightRem,
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    playerWidgetExpanded: 992,
  },
  up: (breakpoint: number) =>
    `@media (min-width: calc(${breakpoint}px + 0.02px))`,
  down: (breakpoint: number) => `@media (max-width: ${breakpoint}px)`,
  between: (
    breakpointMin: number,
    breakpointMax: number,
    vertical: boolean = false,
  ) => {
    return `@media (max-${
      vertical ? 'height' : 'width'
    }: ${breakpointMax}) and (min-${
      vertical ? 'height' : 'width'
    }: calc(${breakpointMin} + 0.02px))`;
  },
};

export { theme };
