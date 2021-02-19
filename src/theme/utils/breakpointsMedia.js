import { breakpoints } from '../index';
import { css } from 'styled-components';

export function breakpointsMedia(cssByBreakpoint){
    const breakpointsName = Object.keys(cssByBreakpoint);
    return breakpointsName.map((breakpointsName) => {
        return css`
            @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
                ${cssByBreakpoint[breakpointsName]}
        }
        `
    })
}