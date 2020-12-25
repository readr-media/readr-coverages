import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@linaria/core';
import { mediaBreakpointMdUp } from 'constants/breakpoints.js';

const CSS = {
  embeddedChart: css`
    text-align: center;

    .header {
      background-color: #ffd93c;
      padding: 12px 16px;
      ${mediaBreakpointMdUp} {
        padding: 16px 24px;
      }
    }

    h1 {
      font-size: 22px;
      line-height: 1.4;
      color: #272727;
      font-weight: 700;
      ${mediaBreakpointMdUp} {
        font-size: 34px;
      }
    }

    .description {
      font-size: 16px;
      line-height: 1.5;
      color: rgba(39, 39, 39, 0.8);
      margin-top: 8px;
      ${mediaBreakpointMdUp} {
        font-size: 18px;
      }
    }

    .footer {
      background-color: #333;
      line-height: 1.5;
      padding: 16px 16px 24px 16px;
      ${mediaBreakpointMdUp} {
        padding: 24px;
      }
    }

    .caption {
      font-size: 14px;
      color: rgba(249, 249, 249, 0.8);
    }

    .source {
      margin-top: 24px;
      font-size: 12px;
      line-height: 1.5;
      color: rgba(249, 249, 249, 0.4);
    }
  `,
};

export default function EmbeddedChart(props) {
  useEffect(
    function loadScript() {
      const script = document.createElement('script');
      script.src = `https://app.everviz.com/inject/${props.chartId.replace(
        'highcharts-',
        ''
      )}/`;
      script.async = false;
      document.body.appendChild(script);
    },
    [props.chartId]
  );

  return (
    <section className={cx(props.className, CSS.embeddedChart)}>
      <div className="header">
        <h1
          dangerouslySetInnerHTML={{
            __html: props.title.replace(/\n/g, '<br />'),
          }}
        ></h1>
        {props.description && (
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: props.description?.replace(/\n/g, '<br />'),
            }}
          ></div>
        )}
      </div>

      <div id={props.chartId}></div>

      <div className="footer">
        <div
          className="caption"
          dangerouslySetInnerHTML={{
            __html: props.caption?.replace(/\n/g, '<br />'),
          }}
        ></div>
        {props.source && (
          <div
            className="source"
            dangerouslySetInnerHTML={{
              __html: props.source?.replace(/\n/g, '<br />'),
            }}
          ></div>
        )}
      </div>
    </section>
  );
}

EmbeddedChart.propTypes = {
  className: PropTypes.string,
  chartId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  caption: PropTypes.string,
  source: PropTypes.string,
};
