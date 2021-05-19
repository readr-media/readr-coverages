import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { css, cx } from '@linaria/core';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import salaryData from '../constants/salary.json';
import salaryMarks from '../constants/salary-marks.js';
import {
  mediaBreakpointMdUp,
  mediaBreakpointXlUp,
} from '../constants/breakpoints.js';

const SALARY_MIN = 15000;
const SALARY_MAX = 70000;

const CSS = {
  salaryRange: css`
    padding: 24px;
    ${mediaBreakpointMdUp} {
      padding: 48px;
    }
    ${mediaBreakpointXlUp} {
      padding: 24px 24px 60px 24px;
    }

    .subtitle {
      margin-bottom: 24px;
    }
  `,
  salary: css`
    font-weight: bold;
    font-size: 48px;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 4px;
    ${mediaBreakpointMdUp} {
      font-size: 72px;
      margin-bottom: 45px;
      line-height: 1;
    }
  `,
  markInterval: css`
    font-size: 14px;
    line-height: 1.43;
    color: rgba(255, 255, 255, 0.66);
    margin-bottom: 24px;
    ${mediaBreakpointMdUp} {
      display: none;
    }

    strong {
      color: #ffd93c;
    }
  `,

  container: css`
    max-width: 672px;
    margin: 0 auto;
    ${mediaBreakpointXlUp} {
      max-width: none;
    }
  `,
  wrapper: css`
    ${mediaBreakpointXlUp} {
      display: flex;
      align-items: flex-start;
      padding-bottom: 24px;

      section {
        box-sizing: border-box;
      }
    }
  `,
  range: css`
    ${mediaBreakpointXlUp} {
      width: 594px;
      padding: 24px 94px 0 60px;
    }
  `,
  calculator: css`
    ${mediaBreakpointXlUp} {
      width: 472px;
      padding: 24px 58px 0 82px;
    }
  `,

  slider: css`
    height: auto;
    padding: 0;
    user-select: none;
    ${mediaBreakpointMdUp} {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 36px;
    }

    .rc-slider-rail {
      position: static;
      background-image: url(assets/rail.png);
      background-size: auto 24px;
      height: 24px;
      background-color: transparent;
      cursor: pointer;
      ${mediaBreakpointMdUp} {
        background-image: url(assets/rail-md.png);
        background-size: auto 36px;
        height: 36px;
      }
      ${mediaBreakpointXlUp} {
        background-image: url(assets/rail-xl.png);
      }
    }

    .rc-slider-track {
      display: none;
    }

    .rc-slider-step {
      top: 50%;
      transform: translateY(-50%);
      height: 100%;
      cursor: pointer;
      ${mediaBreakpointMdUp} {
        height: 30px;
      }
    }

    .rc-slider-dot {
      width: 1px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.66);
      border-radius: 0;
      border: none;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 0;
    }

    .rc-slider-handle {
      top: 50%;
      transform: translate(-50%, -50%) !important;
      width: 28px;
      height: 28px;
      background-image: url(assets/handle.png);
      background-size: 28px auto;
      background-position: 0 2px;
      border: none;
      background-color: transparent;
      z-index: 9;
      margin-top: 0;
      ${mediaBreakpointMdUp} {
        background-image: url(assets/handle-md.png);
        width: 56px;
        height: 56px;
        background-size: 56px auto;
        background-position: 0 4px;
      }

      &:active {
        box-shadow: none;
      }
    }

    .rc-slider-mark {
      display: none;
      ${mediaBreakpointMdUp} {
        display: block;
        font-size: 15px;
        top: 100%;
        margin-top: 15px;
      }
    }

    .rc-slider-mark-text {
      color: rgba(255, 255, 255, 0.66);
      width: max-content;
      @supports not (width: max-content) {
        width: 10%;
        ${mediaBreakpointXlUp} {
          width: 15%;
        }
      }

      &:hover,
      &:active {
        color: rgba(255, 255, 255, 0.87);
      }
    }
  `,
  limit: css`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.66);
    ${mediaBreakpointMdUp} {
      display: none;
    }
  `,

  weeklyHours: css`
    margin-bottom: 24px;
    font-weight: 500;
    color: #ffd93c;
    ${mediaBreakpointMdUp} {
      margin-bottom: 16px;
    }

    strong {
      font-size: 48px;
      line-height: 1;
      font-weight: 700;
      ${mediaBreakpointMdUp} {
        font-size: 72px;
        padding-right: 2px;
      }
    }
  `,
  dailyHours: css`
    margin-bottom: 16px;
    color: #ffd93c;
    ${mediaBreakpointMdUp} {
      margin-bottom: 24px;
    }
  `,
  formula: css`
    font-size: 13px;
    color: rgba(248, 255, 244, 0.66);
    ${mediaBreakpointMdUp} {
      font-size: 15px;
    }

    small {
      font-size: 10px;
      ${mediaBreakpointMdUp} {
        font-size: 12px;
      }
    }
  `,

  story: css`
    ${mediaBreakpointXlUp} {
      padding-top: 48px;
      max-width: 600px;
      margin: 0 auto;
    }

    .subtitle {
      margin-bottom: 12px;
      ${mediaBreakpointMdUp} {
        margin-bottom: 8px;
      }
    }

    p {
      text-align: left;
      line-height: 1.89;
      color: rgba(255, 255, 255, 0.87);
    }
  `,
  intro: css`
    margin-bottom: 24px;
    color: #ffd93c;
    ${mediaBreakpointMdUp} {
      margin-bottom: 32px;
      line-height: 1.89;
    }
  `,

  divider: css`
    height: 2px;
    margin: 20px auto;
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    ${mediaBreakpointMdUp} {
      margin: 48px auto;
    }
  `,
  dividerRange: css`
    width: 60px;
    ${mediaBreakpointMdUp} {
      width: 192px;
      margin: 107px auto 48px auto;
    }
    ${mediaBreakpointXlUp} {
      height: 312px;
      width: 2px;
      margin: 0;
    }
  `,
  dividerCalculator: css`
    width: 80px;
    ${mediaBreakpointMdUp} {
      width: 192px;
    }
    ${mediaBreakpointXlUp} {
      width: 100%;
      margin: 0;
    }
  `,
};

const sliderMarks = {
  [salaryMarks[0].salary]: (
    <>
      基本
      <br />
      工資
    </>
  ),
  [salaryMarks[1].salary]: (
    <>
      7-11
      <br />
      正職起薪
    </>
  ),
  [salaryMarks[2].salary]: (
    <>
      薪資
      <br />
      中位數
    </>
  ),
  [salaryMarks[3].salary]: (
    <>
      專任講師
      <br />
      起薪
    </>
  ),
  [salaryMarks[4].salary]: (
    <>
      助理教授
      <br />
      起薪
    </>
  ),
};

export default function SalaryRange(props) {
  const [salary, setSalary] = useState(23000);

  function formatSalary(salary) {
    const salaryStr = String(salary);

    return `$${salaryStr.slice(0, 2)},${salaryStr.slice(2)}`;
  }

  const { weeklyWkHo, dailyWkHo, ptCredits, ptDepts, storyId } = getResult(
    salary
  );
  const story = props.storyData.stories[storyId - 1];

  const timeoutId = useRef(null);
  const startTime = useRef(new Date());
  const gaNum = useRef(0);
  function handleChange(val) {
    setSalary(val);

    clearTimeout(timeoutId.current);

    const currentTime = new Date();

    if (currentTime - startTime.current >= 2000) {
      sendGa();

      startTime.current = currentTime;
    } else {
      timeoutId.current = setTimeout(sendGa, 2000);
    }
  }

  function sendGa() {
    gaNum.current += 1;

    ReactGA.event({
      category: 'projects',
      action: 'click',
      label: '理想月薪槓桿',
      value: gaNum.current,
    });
  }

  return (
    <article className={cx(CSS.salaryRange, props.className)}>
      <div className={CSS.container}>
        <div className={CSS.wrapper}>
          <section className={CSS.range}>
            <h2 className="subtitle">選擇我的理想月薪</h2>

            <div className={CSS.salary}>{formatSalary(salary)}</div>

            <div className={CSS.markInterval}>{getMarkInterval(salary)}</div>

            <Slider
              className={CSS.slider}
              min={SALARY_MIN}
              max={SALARY_MAX}
              defaultValue={salary}
              marks={sliderMarks}
              onChange={handleChange}
              step={2}
            />

            <div className={CSS.limit}>
              <span>{formatSalary(SALARY_MIN)}</span>
              <span>{formatSalary(SALARY_MAX)}</span>
            </div>
          </section>

          <hr className={cx(CSS.divider, CSS.dividerRange)} />

          <section className={CSS.calculator}>
            <h2 className="subtitle">我每週至少需要工作</h2>
            <div className={CSS.weeklyHours}>
              <strong>{weeklyWkHo}</strong> 小時
            </div>
            <div className={CSS.dailyHours}>
              相當於每日 {dailyWkHo} 小時
              <br />在 {ptDepts} 間學校兼 {ptCredits} 學分的課
            </div>
            <div className={CSS.formula}>
              月薪=學分數×630<small>(鐘點費)</small>×18<small>(周)</small>×2
              <small>(學期)</small>÷12<small>(月)</small>
              <br />
              實際工時=學分數×2.5
            </div>
          </section>
        </div>

        <hr className={cx(CSS.divider, CSS.dividerCalculator)} />

        <section className={CSS.story}>
          <h2 className="subtitle">如果我是大學兼任教師</h2>
          <div className={CSS.intro}>{story.intros.join('，')}</div>

          <p
            dangerouslySetInnerHTML={{
              __html: story.content.replace(/\n/g, '<br />'),
            }}
          ></p>
        </section>
      </div>
    </article>
  );

  function getResult(salary) {
    for (let i = 0; i < salaryData.length; i += 1) {
      if (
        salary >= salaryData[i].salary &&
        salary < (salaryData[i + 1]?.salary ?? Infinity)
      ) {
        return salaryData[i];
      }
    }
  }

  function getMarkInterval(salary) {
    if (salary < salaryMarks[0].salary) {
      return (
        <>
          約小於<strong>{salaryMarks[0].text}</strong>
        </>
      );
    }

    if (salary > salaryMarks[salaryMarks.length - 1].salary) {
      return (
        <>
          約大於<strong>{salaryMarks[salaryMarks.length - 1].text}</strong>
        </>
      );
    }

    for (let i = 0; i < salaryMarks.length; i += 1) {
      if (salary === salaryMarks[i].salary) {
        return (
          <>
            約等於<strong>{salaryMarks[i].text}</strong>
          </>
        );
      }

      if (
        salary > salaryMarks[i].salary &&
        salary < salaryMarks[i + 1].salary
      ) {
        return (
          <>
            約在
            <strong>
              {salaryMarks[i].text}～{salaryMarks[i + 1].text}
            </strong>
            之間
          </>
        );
      }
    }
  }
}

SalaryRange.propTypes = {
  className: PropTypes.string,
  storyData: PropTypes.shape({
    stories: PropTypes.arrayOf(
      PropTypes.shape({
        intros: PropTypes.arrayOf(PropTypes.string).isRequired,
        content: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
