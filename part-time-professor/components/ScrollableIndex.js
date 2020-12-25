import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { css } from '@linaria/core';
import breakpoints, {
  mediaBreakpointMdUp,
  mediaBreakpointXlUp,
} from 'constants/breakpoints.js';
import { doesWindowHaveIo } from './shared/has-io.js';

const CSS = {
  scrollableIndex: css`
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.66);
    height: 62px; /* to hide scrollbar */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    ${mediaBreakpointMdUp} {
      font-size: 18px;
      line-height: 1.5;
      letter-spacing: 0.6px;
      height: 79px;
    }

    ul {
      padding: 16px 0 16px 6px; /* 16 - 10 */
      display: flex;
      overflow-x: auto;
      ${mediaBreakpointMdUp} {
        padding: 20px 0 20px 28px; /* 44 - 16 */
      }
      ${mediaBreakpointXlUp} {
        padding: 20px 0 20px 24px; /* 44 - 20 */
      }
    }

    li {
      flex-shrink: 0;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      user-select: none;
      cursor: pointer;
      ${mediaBreakpointMdUp} {
        padding: 0 16px;
      }
      ${mediaBreakpointXlUp} {
        padding: 0 20px;
      }

      &.active {
        color: #ffd93c;
      }

      &:last-child {
        padding-right: 16px;
        ${mediaBreakpointMdUp} {
          padding-right: 44px;
        }
      }

      picture {
        width: 120px;
        margin-top: 2px;
        ${mediaBreakpointMdUp} {
          width: 150px;
          margin-top: 4px;
        }
      }

      img {
        width: 100%;
        height: auto;
      }
    }
  `,
};

export default function ScrollableIndex(props) {
  const [isScrollingTo, setIsScrollingTo] = useState(false);
  const [anchorEntries, updateAnchorEntries] = useState([]);
  const [gaEntries, updateGaEntries] = useState([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [currentGaDepth, setCurrentGaDepth] = useState(0);

  const anchorTargets = useRef([]);
  const anchorsScrolled = useRef([]);
  const gaObserver = useRef(null);
  const gaTargets = useRef([]);
  useEffect(function setupIo() {
    let anchorObserver;

    (async function iife() {
      if (!doesWindowHaveIo) {
        await import('intersection-observer');
      }

      anchorTargets.current = document.querySelectorAll('[id^="anchor"]');

      anchorObserver = new window.IntersectionObserver(updateAnchorEntries);
      anchorTargets.current.forEach(function (target) {
        anchorObserver.observe(target);
      });

      anchorsScrolled.current = Array(anchorTargets.length).fill(false);

      gaObserver.current = new window.IntersectionObserver(updateGaEntries);
      gaTargets.current = [
        ...anchorTargets.current,
        document.querySelector('readr-footer'),
      ];
      gaTargets.current.forEach(function (target) {
        gaObserver.current.observe(target);
      });
    })();

    return function cleanup() {
      anchorObserver?.disconnect();
      anchorObserver = undefined;

      cleanupGaIo();
    };
  }, []);

  useEffect(
    function () {
      if (isScrollingTo) {
        return;
      }

      anchorEntries.forEach(function (entry) {
        const idx = Number(entry.target.id.split('anchor')[1]);

        if (entry.isIntersecting) {
          setActiveIdx(idx - 1);
          scrollIndexWrapper(idx);

          anchorsScrolled.current[idx - 1] = true;
        } else {
          if (entry.boundingClientRect.top < 0) {
            return;
          }

          if (anchorsScrolled.current[idx - 1] === true) {
            setActiveIdx(idx - 2);
            scrollIndexWrapper(idx - 1);

            anchorsScrolled.current[idx - 1] = false;
          }
        }
      });
    },
    [anchorEntries]
  );

  useEffect(
    function () {
      gaEntries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const depth = Number(entry.target.dataset.gaDepth);

          if (currentGaDepth >= depth) {
            return;
          }

          ReactGA.event({
            category: 'projects',
            action: 'scroll',
            label:
              depth < gaTargets.current.length
                ? `scroll to title ${depth}`
                : 'scroll to end',
            value: depth,
          });

          setCurrentGaDepth(depth);
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gaEntries]
  );

  useEffect(
    function () {
      if (currentGaDepth >= gaTargets.current.length) {
        cleanupGaIo();
      }
    },
    [currentGaDepth]
  );

  function cleanupGaIo() {
    gaObserver.current?.disconnect();
    gaObserver.current = undefined;
  }

  const scrollIntoView = useRef(null);
  async function handleClick(idx) {
    setActiveIdx(idx);
    setIsScrollingTo(true);

    await importScrollIntoView();

    scrollIntoView.current(
      document.getElementById(`anchor${idx + 1}`),
      {
        time: 300,
        align: { top: 0.25 },
      },
      function done() {
        setIsScrollingTo(false);
      }
    );

    scrollIndexWrapper(idx + 1);
  }

  const indexWrapper = useRef(null);
  async function scrollIndexWrapper(idx) {
    await importScrollIntoView();

    scrollIntoView.current(document.getElementById(`index${idx}`), {
      time: 300,
      validTarget(target) {
        return target === indexWrapper.current;
      },
    });
  }

  async function importScrollIntoView() {
    if (scrollIntoView.current === null) {
      scrollIntoView.current = (await import('scroll-into-view')).default;
    }
  }

  return (
    <div className={CSS.scrollableIndex}>
      <ul ref={indexWrapper}>
        {props.indexes.map((index, idx) => (
          <li
            key={idx}
            onClick={() => handleClick(idx)}
            aria-hidden="true"
            id={`index${idx + 1}`}
            className={activeIdx === idx ? 'active' : undefined}
          >
            <div>{index}</div>
            <picture>
              {/* <source
                media={`(min-width: ${breakpoints.md})`}
                type="image/webp"
                srcSet={require('assets/index-line-md.webp')}
              /> */}
              <source
                media={`(min-width: ${breakpoints.md})`}
                type="image/png"
                srcSet={require('assets/index-line-md.png')}
              />
              {/* <source
                type="image/webp"
                srcSet={require('assets/index-line.webp')}
              /> */}
              <img
                src={require('assets/index-line.png')}
                width="120"
                height="4"
                alt=""
              />
            </picture>
          </li>
        ))}
      </ul>
    </div>
  );
}

ScrollableIndex.propTypes = {
  indexes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
