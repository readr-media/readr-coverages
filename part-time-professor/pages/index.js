import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import ReactGA from 'react-ga';
import LazyLoad from 'react-lazyload';
import { css, cx } from '@linaria/core';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import archieml from 'archieml';

import { defineCustomElements } from '@readr-media/web-components/loader';

import {
  mediaBreakpointMdUp,
  mediaBreakpointXlUp,
} from '../constants/breakpoints.js';

import useRefWithCallback from '../hooks/ref-with-callback.js';
// import useViewport from '../hooks/viewport.js';

import WorkaroundHeader from '../components/WorkaroundHeader.js';
import ScrollableIndex from '../components/ScrollableIndex.js';
import TheCover from '../components/TheCover.js';
import SalaryRange from '../components/SalaryRange.js';
import ArticleBody from '../components/ArticleBody.js';
const SchoolSearch = dynamic(() => import('../components/SchoolSearch.js'));
import TheFooter from '../components/TheFooter.js';

defineCustomElements();

const CSS = {
  home: css`
    overflow: hidden;

    .subtitle {
      font-size: 24px;
      letter-spacing: 1.2px;
      font-weight: 700;
      line-height: 1.5;
      ${mediaBreakpointMdUp} {
        font-size: 30px;
      }
    }

    readr-header {
      h1.sc-readr-header svg *,
      button.sc-share-nav svg *,
      .sns-links circle {
        fill: #fff;
      }

      .sns-links path {
        fill: #42513b;
      }
    }

    readr-latest-coverages {
      padding: 24px 8px;
      max-width: 600px;
      box-sizing: content-box;
      margin: 0 auto;
      ${mediaBreakpointMdUp} {
        padding: 48px 0;
      }
      ${mediaBreakpointXlUp} {
        padding: 60px 0;
      }

      h2.sc-readr-latest-coverages {
        background-color: #42513b;
        color: #f8fff4;
      }
    }
  `,
  main: css`
    background-color: #42513b;
    padding-top: 131px;
    ${mediaBreakpointMdUp} {
      padding-top: 164px;
    }
    ${mediaBreakpointXlUp} {
      padding-bottom: 60px;
    }
  `,
  theCover: css`
    max-width: 672px;
    margin: 0 auto;
    ${mediaBreakpointXlUp} {
      max-width: 1120px;
      margin: 0 auto 60px auto;
    }
  `,
  salaryRange: css`
    ${mediaBreakpointXlUp} {
      margin: 0 auto 60px auto;
    }
  `,
  articleBody: css`
    ${mediaBreakpointXlUp} {
      margin: 0 auto 60px auto;
    }
  `,
  donateBtn: css`
    background-color: #42513b;
    padding: 24px;
    ${mediaBreakpointMdUp} {
      padding: 60px 24px;
    }
    ${mediaBreakpointXlUp} {
    }

    readr-donate-button {
      max-width: 480px;
      margin: 0 auto;

      a.sc-readr-donate-button {
        &::before {
          background-color: #f8fff4;
        }

        div.sc-readr-donate-button {
          background-color: #ffd93c;
          color: #272727;
          border-color: #f8fff4;

          &:hover {
            background-color: #272727;
            color: #f4f5f3;
          }

          &:active {
            color: #ffd93c;
          }
        }
      }
    }
  `,

  blackboard: css`
    border: 2px solid #f8fff4;
    background-image: url(assets/blackboard.png);
    background-size: cover;
    background-repeat: repeat;
    background-position: center;
    text-align: center;
    line-height: 1.5;
    max-width: 1120px;
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
  `,
};

export default function Home(props) {
  // const viewport = useViewport();

  function sendGaClick(label) {
    ReactGA.event({
      category: 'projects',
      action: 'click',
      label,
    });
  }

  const readrHeader = useRef(null);
  const readrDonateBtn = useRef(null);
  useEffect(function addGaListeners() {
    const header = readrHeader.current;
    const donateBtn = readrDonateBtn.current;

    header.addEventListener('shareLineLinkClick', sendLineGa);
    header.addEventListener('shareFacebookLinkClick', sendFbGa);
    donateBtn.addEventListener('clickButton', sendDonateGa);

    return function cleanup() {
      header.removeEventListener('shareLineLinkClick', sendLineGa);
      header.removeEventListener('shareFacebookLinkClick', sendFbGa);
      donateBtn.removeEventListener('clickButton', sendDonateGa);
    };

    function sendLineGa() {
      sendGaClick('line 分享');
    }
    function sendFbGa() {
      sendGaClick('fb 分享');
    }
    function sendDonateGa() {
      sendGaClick('贊助');
    }
  }, []);

  const readrLatestCoverages = useRefWithCallback(
    function onMounted(node) {
      node.addEventListener('clickCoverage', sendCoverageGa);
    },
    function onUnmounted(node) {
      node.removeEventListener('clickCoverage', sendCoverageGa);
    }
  );

  function sendCoverageGa() {
    sendGaClick('更多報導');
  }

  const SITE_TITLE = 'READr 讀+';
  // const SITE_URL = 'https://www.readr.tw'

  return (
    <>
      <Head>
        <title>{`${props.meta.title} - ${SITE_TITLE}`}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={props.meta.ogDescription} />

        <meta
          property="og:title"
          content={`${props.meta.ogTitle} - ${SITE_TITLE}`}
        />
        <meta property="og:description" content={props.meta.ogDescription} />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_PATH} />
        <meta property="og:image" content={props.meta.ogImage.urlOriginal} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:type" content="article" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/readr.tw"
        />
        <meta
          property="article:published_time"
          content={props.meta.publishTime}
        />
        <meta property="article:modified_time" content={props.meta.updatedAt} />
        {props.meta.tags.map((tag, idx) => (
          <meta property="article:tag" content={tag.name} key={`ogTag${idx}`} />
        ))}
        <meta property="fb:app_id" content="175313259598308" />
        <meta property="fb:pages" content="1855418728011324" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@READr_news" />

        <meta name="theme-color" content="#04295e" />
        <meta name="msapplication-TileColor" content="#ebf02c" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#04295e" />
      </Head>

      <div className={CSS.home}>
        <WorkaroundHeader>
          <readr-header ref={readrHeader} />

          <ScrollableIndex indexes={props.story.index} />
        </WorkaroundHeader>

        <main className={CSS.main}>
          <TheCover
            className={CSS.theCover}
            storyData={props.story.cover}
            title={props.meta.title}
          />
          <SalaryRange
            className={cx(CSS.blackboard, CSS.salaryRange)}
            storyData={props.story.salaryRange}
          />

          <ArticleBody
            className={CSS.articleBody}
            storyData={props.story.article}
          />

          <div id={`anchor${props.story.index.length}`} data-ga-depth="4" />

          <LazyLoad height={799} offset={1000} throttle={200} once>
            <SchoolSearch className={CSS.blackboard} />
          </LazyLoad>
        </main>

        <section>
          <TheFooter storyData={props.story.footer} />

          <div className={CSS.donateBtn}>
            <readr-donate-button ref={readrDonateBtn} />
          </div>

          <LazyLoad height={521} offset={1000} throttle={200} once>
            <readr-latest-coverages ref={readrLatestCoverages} />
          </LazyLoad>
        </section>

        <readr-footer data-ga-depth="5" />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_CMS_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const POST_ID = 2641;

  const { contentApiData, ...meta } = (
    await client.query({
      query: gql`
        query posts {
          Post(where: { id: ${POST_ID} }) {
            contentApiData

            title: name
            ogTitle
            ogDescription
            ogImage {
              urlOriginal
            }
            tags {
              name
            }
            publishTime
            updatedAt
          }
        }
      `,
    })
  ).data.Post;

  const story = archieml.load(
    JSON.parse(contentApiData)
      .filter((item) => item.type === 'unstyled' || item.type === 'annotation')
      .map((item) => item.content)
      // .flatMap(function (item) {
      //   if (item.type === 'unstyled') {
      //     return item.content;
      //   }

      //   const text = '{"text":"';
      //   return item.content.map((str) =>
      //     str
      //       .split(/<!--__ANNOTATION__=|-->/gm)
      //       .filter((str) => str && !str.startsWith('<!--'))
      //       .map((str) =>
      //         str.includes(text)
      //           ? str.slice(text.length, str.indexOf('","annotation"'))
      //           : str
      //       )
      //       .join('')
      //   );
      // })
      .join('\n')
  );

  // console.log(
  //   JSON.parse(contentApiData)
  //     .filter((item) => item.type === 'unstyled')
  //     .flatMap((item) => item.content)
  //     .join('\n')
  // );

  return {
    props: {
      meta,
      story,
    },
  };
}

Home.propTypes = {
  story: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    ogTitle: PropTypes.string.isRequired,
    ogDescription: PropTypes.string.isRequired,
    ogImage: PropTypes.shape({
      urlOriginal: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    publishTime: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }).isRequired,
};
