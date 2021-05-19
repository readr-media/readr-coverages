import PropTypes from 'prop-types';
import { css, cx } from '@linaria/core';
import breakpoints, {
  mediaBreakpointMdUp,
  mediaBreakpointXlUp,
} from '../constants/breakpoints.js';
// import buildContent from './shared/content.js';

const CSS = {
  theCover: css`
    padding: 24px;
    ${mediaBreakpointMdUp} {
      padding: 48px 0;
    }
    ${mediaBreakpointXlUp} {
      padding: 60px 0;
      display: flex;
      align-items: center;
    }
  `,

  intro: css`
    ${mediaBreakpointXlUp} {
      border-top: 2px solid #ffd93c;
      border-bottom: 2px solid #ffd93c;
      padding: 24px 0;
    }

    p + p {
      margin-top: var(--base-paragraph-spacing);
    }
  `,

  title: css`
    max-width: 408px;
    margin: 0 auto 32px auto;
    ${mediaBreakpointMdUp} {
      margin: 0 auto 48px auto;
    }
    ${mediaBreakpointXlUp} {
      margin: 0 60px 0 0;
      width: 540px;
      max-width: none;
      flex-shrink: 0;
    }

    img {
      width: 100%;
    }
  `,
};

export default function TheCover(props) {
  return (
    <div className={cx(CSS.theCover, props.className)}>
      <h1 className={CSS.title}>
        <picture>
          <source
            media={`(min-width: ${breakpoints.xl})`}
            type="image/webp"
            srcSet={require('assets/title-xl.webp')}
          />
          <source
            media={`(min-width: ${breakpoints.xl})`}
            type="image/png"
            srcSet={require('assets/title-xl.png')}
          />

          <source type="image/webp" srcSet={require('assets/title.webp')} />
          <img
            src={require('assets/title.png')}
            width="408"
            height="360"
            alt={props.title}
          />
        </picture>
      </h1>

      <div className={CSS.intro}>
        <p
          dangerouslySetInnerHTML={{
            __html: props.storyData.preface.content.replace(/\n/g, '<br />'),
          }}
        ></p>
        {/* {props.storyData.preface.map(buildContent)} */}
      </div>
    </div>
  );
}

TheCover.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  storyData: PropTypes.shape({
    // preface: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     type: PropTypes.string.isRequired,
    //     value: PropTypes.string.isRequired,
    //   }).isRequired
    preface: PropTypes.shape({
      content: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
