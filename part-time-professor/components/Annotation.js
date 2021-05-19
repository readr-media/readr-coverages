import PropTypes from 'prop-types';
import { css } from '@linaria/core';
import {
  mediaBreakpointMdUp,
  mediaBreakpointXlUp,
} from 'constants/breakpoints.js';
import SvgAnnotationToggle from 'assets/annotation-toggle.svg';

const CSS = {
  annotation: css`
    svg {
      display: inline-block;
      transition: transform 0.3s;
    }

    .toggle {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 4.6px 2px 4px;
      width: 24px;
      height: 24px;
      vertical-align: middle;
      background-color: #f8fff4;
      border-radius: 50%;
    }

    .annotation {
      padding: 12px 24px;
      margin: 24px 0;
      font-size: 15px;
      line-height: 1.6;
      letter-spacing: 1px;
      color: rgba(39, 39, 39, 0.87);
      background-color: #f8fff4;
      border-radius: 1px;
      ${mediaBreakpointMdUp} {
        padding: 24px 48px;
        margin: 32px 0;
      }
      ${mediaBreakpointXlUp} {
        margin: 24px 0;
      }
    }

    &.open svg {
      transform: rotate(180deg);
      transform-origin: center;
    }
  `,
};

export default function Annotation(props) {
  return (
    <p>
      {getSplitContents(props.content).map((data, idx) => {
        if (data.pureAnnotationText !== undefined) {
          return (
            <readr-annotation
              key={idx}
              class={CSS.annotation}
              text={data.pureAnnotationText}
            >
              <span slot="toggle" className="toggle">
                <SvgAnnotationToggle />
              </span>

              {data.text}
            </readr-annotation>
          );
        } else {
          return (
            <span
              key={idx}
              dangerouslySetInnerHTML={{ __html: data.html }}
            ></span>
          );
        }
      })}
    </p>
  );

  function getSplitContents(content) {
    return content
      .split(/<!--__ANNOTATION__=|-->/gm)
      .filter(isAnnotationOrText)
      .filter((item) => item)
      .map(parseStr);

    function isAnnotationOrText(item) {
      return !item.startsWith('<!--');
    }

    function parseStr(str) {
      // str 有可能是不合法的 JSON 格式（比如 'fake str'），這時 JSON.parse 會報錯
      try {
        return {
          ...JSON.parse(str),
        };
      } catch {
        return { html: str };
      }
    }
  }
}

Annotation.propTypes = {
  content: PropTypes.string.isRequired,
};
