/* Fix the problem of READr web components' styles being removed */

import PropTypes from 'prop-types';
import { css, cx } from '@linaria/core';
import { mediaBreakpointMdUp } from '../constants/breakpoints.js';

import useScrollDirection from '../hooks/scroll-direction.js';

const CSS = {
  workaroundHeader: css`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    transition: transform 0.3s;
    z-index: 999;
    background-color: #42513b;

    &.down {
      transform: translateY(-69px);
      ${mediaBreakpointMdUp} {
        transform: translateY(-85px);
      }
    }
  `,
};

export default function WorkaroundHeader(props) {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={cx(CSS.workaroundHeader, scrollDirection === 'down' && 'down')}
    >
      {props.children}
    </div>
  );
}

WorkaroundHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
