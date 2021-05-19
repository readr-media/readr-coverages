import PropTypes from 'prop-types';
import { css, cx } from '@linaria/core';
import dynamic from 'next/dynamic';
import breakpoints, {
  mediaBreakpointMdUp,
  mediaBreakpointXlUp,
} from 'constants/breakpoints.js';
import LazyLoad from 'react-lazyload';

import Annotation from '../components/Annotation.js';
// import EmbeddedChart from '../components/EmbeddedChart.js';
const EmbeddedChart = dynamic(() => import('../components/EmbeddedChart.js'));
// import EmbeddedInfogram from '../components/EmbeddedInfogram.js';
const EmbeddedInfogram = dynamic(() =>
  import('../components/EmbeddedInfogram.js')
);

const charts = {
  chart2: {
    png: require('assets/chart2.png'),
    // webp: require('assets/chart2.webp'),
  },
  chart3: {
    png: require('assets/chart3.png'),
    // webp: require('assets/chart3.webp'),
  },
  chart4: {
    png: require('assets/chart4.png'),
    // webp: require('assets/chart4.webp'),
  },
  chart5: {
    png: require('assets/chart5.png'),
    // webp: require('assets/chart5.webp'),
  },
  chart7: {
    png: require('assets/chart7.png'),
    // webp: require('assets/chart7.webp'),
  },
  chart9: {
    png: require('assets/chart9.png'),
    // webp: require('assets/chart9.webp'),
  },
  chart10: {
    png: require('assets/chart10.png'),
    // webp: require('assets/chart10.webp'),
  },
  chart11: {
    xs: {
      png: require('assets/chart11.png'),
      // webp: require('assets/chart11.webp'),
    },
    md: {
      png: require('assets/chart11-md.png'),
      // webp: require('assets/chart11-md.webp'),
    },
  },
};

const CSS = {
  articleBody: css`
    padding: 24px;
    color: #f8fff4;
    ${mediaBreakpointMdUp} {
      padding: 48px;
    }
    ${mediaBreakpointXlUp} {
      padding: 60px;
    }

    > *:last-child {
      margin-bottom: 0;
    }

    .subtitle {
      margin: 32px auto 16px auto;
      color: #fff;
      ${mediaBreakpointMdUp} {
        max-width: 600px;
        margin: 32px auto;
      }
    }

    p {
      margin: 0 auto;
      ${mediaBreakpointMdUp} {
        max-width: 600px;
      }

      + p {
        margin-top: var(--base-paragraph-spacing);
      }
    }

    a {
      color: #f8fff4;
      border-bottom: 1px solid #ffd93c;
    }

    picture,
    .embedded-chart {
      margin: 24px -24px;
      ${mediaBreakpointMdUp} {
        margin: 32px auto;
        max-width: 640px;
      }
    }

    img {
      width: 100%;
    }
  `,
};

export default function ArticleBody(props) {
  function buildContent(content, idx) {
    switch (content.type) {
      case 'title':
        return (
          <h2
            key={idx}
            className="subtitle"
            dangerouslySetInnerHTML={{ __html: content.value }}
          ></h2>
        );

      case 'picture':
        return !content.value.includes('11') ? (
          <LazyLoad key={idx} height={640} offset={1000} throttle={200} once>
            <picture>
              {/* <source type="image/webp" srcSet={charts[content.value].webp} /> */}
              <img
                src={charts[content.value].png}
                width="640"
                height="640"
                alt=""
              />
            </picture>
          </LazyLoad>
        ) : (
          <LazyLoad key={idx} height={427} offset={1000} throttle={200} once>
            <picture>
              {/* <source
              media={`(min-width: ${breakpoints.md})`}
              type="image/webp"
              srcSet={charts[content.value].md.webp}
            /> */}
              <source
                media={`(min-width: ${breakpoints.md})`}
                type="image/png"
                srcSet={charts[content.value].md.png}
              />
              {/* <source type="image/webp" srcSet={charts[content.value].xs.webp} /> */}
              <img
                src={charts[content.value].xs.png}
                alt=""
                width="640"
                height="427"
              />
            </picture>
          </LazyLoad>
        );

      case 'annot':
        return <Annotation key={idx} content={content.value} />;

      case 'everviz': {
        const { id, title, description, caption, source } = content.value;

        return (
          <LazyLoad key={idx} offset={2000} throttle={200} once>
            <EmbeddedChart
              className="embedded-chart"
              chartId={id}
              title={title}
              description={description}
              caption={caption}
              source={source}
            />
          </LazyLoad>
        );
      }

      case 'infogram': {
        const { id, title } = content.value;

        return (
          <LazyLoad key={idx} height={640} offset={2000} throttle={200} once>
            <div className="embedded-chart">
              <EmbeddedInfogram chartId={id} title={title} />
            </div>
          </LazyLoad>
        );
      }

      case 'index':
        return (
          <div
            key={idx}
            id={`anchor${content.value}`}
            data-ga-depth={content.value}
          />
        );

      default:
        return (
          <p key={idx} dangerouslySetInnerHTML={{ __html: content.value }}></p>
        );
    }
  }

  return (
    <article className={cx(CSS.articleBody, props.className)}>
      {props.storyData.contents.map(buildContent)}
    </article>
  );
}

ArticleBody.propTypes = {
  className: PropTypes.string,
  // viewport: PropTypes.shape({
  //   height: PropTypes.number.isRequired,
  // }),
  storyData: PropTypes.shape({
    contents: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
          .isRequired,
      })
    ).isRequired,
  }).isRequired,
};
