import PropTypes from 'prop-types';
import { css, cx } from '@linaria/core';
import {
  mediaBreakpointMdUp,
  mediaBreakpointXlUp,
} from '../constants/breakpoints.js';
import buildContent from './shared/content.js';

const CSS = {
  footer: css`
    background-color: #f4f5f3;
    color: rgba(39, 39, 39, 0.87);

    .subtitle {
      margin-bottom: 16px;
      text-align: center;
      ${mediaBreakpointXlUp} {
        margin-bottom: 32px;
      }
    }

    p + p {
      margin-top: var(--base-paragraph-spacing);
    }

    ul + p {
      margin-top: var(--base-paragraph-spacing);
    }

    li {
      position: relative;
      padding-left: 18.6px;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 15px; /* (34 - 4) / 2 */
        left: 7.3px; /* (18.6 - 4) / */
        background-color: rgba(39, 39, 39, 0.87);
        width: 4px;
        height: 4px;
        border-radius: 50%;
      }
    }

    a {
      border-bottom: 1px solid currentColor;
    }
  `,

  section: css`
    padding: 24px;
    box-sizing: content-box;
    ${mediaBreakpointMdUp} {
      padding: 48px;
      max-width: 672px;
      margin: 0 auto;
    }
    ${mediaBreakpointXlUp} {
      padding: 60px;
      max-width: 600px;
    }
  `,

  credit: css`
    color: rgba(39, 39, 39, 0.66);
    text-align: center;
    font-size: 15px;
    line-height: 1.5;
    ${mediaBreakpointMdUp} {
      max-width: 456px;
      margin: 0 auto;
    }
    ${mediaBreakpointXlUp} {
      max-width: none;
    }

    .wrapper {
      ${mediaBreakpointMdUp} {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      div {
        margin: 0 0 4px 0;
        ${mediaBreakpointMdUp} {
          margin: 0 12px 4px 12px;
        }
        ${mediaBreakpointXlUp} {
          margin: 0 24px 0 0;
        }

        &:last-child {
          margin: 0;
          ${mediaBreakpointMdUp} {
            margin: 0 12px 4px 12px;
          }
          ${mediaBreakpointXlUp} {
            margin: 0;
          }
        }
      }
    }

    > div:last-child {
      margin-top: 16px;
      ${mediaBreakpointMdUp} {
        margin-top: 12px;
      }
      ${mediaBreakpointXlUp} {
        margin-top: 16px;
      }
    }
  `,
};

export default function TheFooter(props) {
  const { further, aboutData, credit, publishedAt } = props.storyData;

  return (
    <div className={CSS.footer}>
      <section className={CSS.section}>
        <h2 className="subtitle">{further.title}</h2>

        {further.contents.map(buildContent)}
      </section>

      <section className={CSS.section}>
        <h2 className="subtitle">{aboutData.title}</h2>

        {aboutData.contents.map(buildContent)}
      </section>

      <section className={cx(CSS.section, CSS.credit)}>
        <div className="wrapper">
          {credit.map((author, idx) => (
            <div key={idx}>{`${author.role}：${author.names.join('、')}`}</div>
          ))}
        </div>

        <div>{publishedAt}</div>
      </section>
    </div>
  );
}

TheFooter.propTypes = {
  storyData: PropTypes.shape({
    further: PropTypes.shape({
      title: PropTypes.string.isRequired,
      contents: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          value: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
      ).isRequired,
    }).isRequired,

    aboutData: PropTypes.shape({
      title: PropTypes.string.isRequired,
      contents: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
          ]).isRequired,
        })
      ).isRequired,
    }).isRequired,

    credit: PropTypes.arrayOf(
      PropTypes.shape({
        role: PropTypes.string.isRequired,
        names: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,

    publishedAt: PropTypes.string.isRequired,
  }).isRequired,
};
