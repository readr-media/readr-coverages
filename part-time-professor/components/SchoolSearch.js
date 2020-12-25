import { useState, useEffect, useRef } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import { css, cx } from '@linaria/core';
import {
  mediaBreakpointMdUp,
  mediaBreakpointXlUp,
} from 'constants/breakpoints.js';
import SCHOOLS from 'constants/schools-teaching-quality.json';
// @ts-ignore
import SvgSearchIcon from 'assets/search.svg';

const DEFAULT_SCHOOL_NAME = '淡江大學';

const CSS = {
  schoolSearch: css`
    padding: 24px;
    ${mediaBreakpointMdUp} {
      padding: 48px 24px;
    }
    ${mediaBreakpointXlUp} {
      padding: 60px 24px;
    }
  `,

  search: css`
    max-width: 480px;
    margin: 0 auto 48px auto;
    ${mediaBreakpointXlUp} {
      margin: 0 auto 60px auto;
    }

    .subtitle {
      margin-bottom: 20px;
    }

    input {
      width: 100%;
      height: 48px;
      box-sizing: border-box;
      background-color: transparent;
      border: none;
      padding: 0 48px 0 16px;
      font-size: 18px;
      line-height: 1.33;
      color: rgba(0, 0, 0, 0.87);
      caret-color: rgba(0, 0, 0, 0.87);
      outline: none;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }

      &:focus + button path {
        fill-opacity: 0.66;
      }
    }

    button {
      outline: none;
      user-select: none;
    }
  `,
  searchBar: css`
    position: relative;
    border-radius: 2px;
    margin-bottom: 16px;
    text-align: left;
    user-select: none;
    ${mediaBreakpointMdUp} {
      margin-bottom: 35px;
    }

    &:hover {
      box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.3);
    }

    &.autocomplete {
      height: 48px;

      > div {
        width: 100%;
        position: absolute;
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
      }

      .divider {
        height: 1px;
        background-color: #ebebeb;
        margin: 0 16px;
      }
    }

    > div {
      background-color: #fff;
      border-radius: 2px;
      margin-bottom: 16px;
      box-shadow: inset 0 0 0 1px #ebebeb;
    }
  `,
  options: css`
    color: rgba(0, 0, 0, 0.66);
    padding: 4px 0 8px 0;
    max-height: 184px;
    box-sizing: border-box;
    overflow-y: auto;

    div {
      cursor: pointer;
      padding: 0 16px;
      height: 40px;
      display: flex;
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &:hover {
        background-color: #ebebeb;
        color: rgba(0, 0, 0, 0.87);
      }

      &:active {
        background-color: #ffd93c;
      }
    }
  `,
  searchIcon: css`
    position: absolute;
    top: 0;
    right: 0;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: none;
    background-color: transparent;
  `,
  divider: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.66);
    ${mediaBreakpointMdUp} {
      margin-bottom: 35px;
    }

    span {
      width: 100%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.5);
    }

    p {
      margin: 0 18px;
    }
  `,
  randomBtn: css`
    background-color: #ffd93c;
    border: 1px solid #fff;
    border-radius: 2px;
    width: 100%;
    padding: 7px 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.8;
    letter-spacing: 2.5px;
    color: #272727;

    &:hover,
    &:active {
      background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.05)
      );
    }
  `,

  schoolName: css`
    padding: 12px 0;
    border-top: 3px solid #fff;
    border-bottom: 3px solid #fff;
    margin-bottom: 32px;
    color: #f8fff4;
    ${mediaBreakpointMdUp} {
      letter-spacing: 2.5px;
      padding: 16px 0;
    }
  `,
  stats: css`
    margin-bottom: 24px;
    ${mediaBreakpointMdUp} {
      display: flex;
      max-width: 600px;
      margin: 0 auto 32px auto;
      justify-content: space-between;
    }
    ${mediaBreakpointXlUp} {
      max-width: 696px;
      margin: 0 auto 40px auto;
    }

    > div {
      &:nth-child(1),
      &:nth-child(2) {
        .num strong {
          padding-right: 4px;
        }
      }

      + div {
        margin-top: 48px;
        ${mediaBreakpointMdUp} {
          margin-top: 0;
        }
      }
    }

    .num,
    .text {
      color: #ffd93c;
    }

    .title,
    .num {
      margin-bottom: 4px;
    }

    .title {
      color: rgba(255, 255, 255, 0.87);
    }

    .num strong {
      font-weight: 700;
      font-size: 48px;
      line-height: 70px;
    }
  `,
  note: css`
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.66);
    font-size: 15px;
    line-height: 1.6;
  `,
  fail: css`
    color: #ffd93c;
    font-weight: 700;
    ${mediaBreakpointMdUp} {
      font-size: 48px;
    }
  `,
};

const schoolNames = Object.keys(SCHOOLS);
const totalSchools = schoolNames.length;

export default function SchoolSearch(props) {
  const [inputVal, setInputVal] = useState('');
  const [canOpenOptions, setCanOpenOptions] = useState(true);
  function autoCompleteSchools() {
    if (inputVal === '') {
      return [];
    }

    if (inputVal.includes('台')) {
      return schoolNames.filter(
        (name) =>
          name.includes(inputVal) ||
          name.includes(inputVal.replace(/台/g, '臺'))
      );
    }

    if (inputVal.includes('臺')) {
      return schoolNames.filter(
        (name) =>
          name.includes(inputVal) ||
          name.includes(inputVal.replace(/臺/g, '台'))
      );
    }

    return schoolNames.filter((name) => name.includes(inputVal));
  }
  function closeOptions() {
    setCanOpenOptions(false);
  }
  function shouldOpenOptions() {
    return canOpenOptions && autoCompleteSchools().length > 0;
  }

  const [schoolName, setSchoolName] = useState(DEFAULT_SCHOOL_NAME);
  const result = SCHOOLS[schoolName];
  const doesHaveMissingVal = Object.values(result || {}).includes('NA');
  const isValidResult = result && !doesHaveMissingVal;

  const [hasChecked, setHasChecked] = useState(false);

  useEffect(
    function () {
      if (result || hasChecked) {
        setHasChecked(false);

        return;
      }

      if (schoolName.includes('台')) {
        setSchoolName(schoolName.replace(/台/g, '臺'));
        setHasChecked(true);

        return;
      }

      if (schoolName.includes('臺')) {
        setSchoolName(schoolName.replace(/臺/g, '台'));
        setHasChecked(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [schoolName]
  );

  const inputElem = useRef(null);
  useEffect(function mount() {
    window.addEventListener('click', handleClickOutside);

    return function cleanup() {
      window.removeEventListener('click', handleClickOutside);
    };

    function handleClickOutside(evt) {
      if (
        evt.target !== inputElem.current &&
        !inputElem.current.contains(evt.target)
      ) {
        closeOptions();
      }
    }
  }, []);

  const searchNum = useRef(0);
  function output(schoolName) {
    setSchoolName(schoolName);
    closeOptions();

    searchNum.current += 1;
    ReactGA.event({
      category: 'projects',
      action: 'click',
      label: '大學搜尋',
      value: searchNum.current,
    });
  }

  return (
    <article className={cx(CSS.schoolSearch, props.className)}>
      <section className={CSS.search}>
        <h2 className="subtitle">各校師生權益比一比</h2>

        <div
          ref={inputElem}
          className={cx(CSS.searchBar, shouldOpenOptions() && 'autocomplete')}
        >
          <div>
            <input
              type="text"
              inputMode="search"
              value={inputVal}
              placeholder={`我要查 ${DEFAULT_SCHOOL_NAME}`}
              onFocus={handleFocus}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button type="button" className={CSS.searchIcon} onClick={search}>
              <SvgSearchIcon />
            </button>
            <div className="divider" />

            {shouldOpenOptions() ? (
              <div className={CSS.options}>
                {autoCompleteSchools().map((school) => (
                  <div
                    key={school}
                    onClick={handleSelectOption}
                    aria-hidden="true"
                  >
                    {school}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className={CSS.divider}>
          <span />
          <p>或</p>
          <span />
        </div>

        <button
          type="button"
          className={CSS.randomBtn}
          onClick={handleClickRandom}
        >
          隨機給我一間大專院校
        </button>
      </section>

      <section>
        <h2 className={cx(CSS.schoolName, 'subtitle')}>{schoolName}</h2>

        <div>
          {isValidResult ? (
            <>
              <div className={CSS.stats}>
                <div>
                  <div className="title">生師比*</div>
                  <div className="num">
                    <strong>{result.tpr}</strong>%
                  </div>
                  <div className="text">
                    在 {totalSchools} 所大專校院裡
                    <br />
                    排名第 {result.rankOfTpr} 名
                  </div>
                </div>

                <div>
                  <div className="title">今年度刪減課程數比率**</div>
                  <div className="num">
                    <strong>{result.coursesCutting}</strong>%
                  </div>
                  <div className="text">
                    在 {totalSchools} 所大專校院裡
                    <br />
                    排名第 {result.rankOfCoursesCutting} 名
                  </div>
                </div>

                <div>
                  <div className="title">兼任教師數</div>
                  <div className="num">
                    <strong>{result.numOfPtTeachers}</strong>
                  </div>
                  <div className="text">
                    佔全校師資 {result.pctOfPtTeachers}
                  </div>
                </div>
              </div>

              <div className={CSS.note}>
                <p>
                  *日間學制學生占日間學制專任教師之比率，比例與排名愈高代表一位老師需負擔更多的學生
                </p>
                <p>**單指課堂教學課程，排除實習/輔導等課堂外課程</p>
                <p>
                  ***排名為該校在 158
                  所大專院校的表現排序，排名越前代表在此項指標的表現較好，但僅供參考
                </p>
              </div>
            </>
          ) : (
            <div className={CSS.fail}>
              {doesHaveMissingVal ? (
                <>
                  因前一學年度或今年度無資料
                  <br />
                  無法計算
                </>
              ) : (
                <>
                  無此間學校的資料
                  <br />
                  請重新輸入
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </article>
  );

  function handleFocus() {
    setCanOpenOptions(true);
  }

  function handleChange(evt) {
    setInputVal(evt.target.value.trim());
    setCanOpenOptions(true);
  }

  function handleKeyDown(evt) {
    const { nativeEvent, key, keyCode } = evt;

    if (nativeEvent.isComposing || inputVal === '') {
      return;
    }

    if (key === 'Enter' || keyCode === 13) {
      output(inputVal);
    }
  }

  function search() {
    if (inputVal === '') {
      return;
    }

    output(inputVal);
  }

  function handleSelectOption(evt) {
    const { textContent: schoolName } = evt.target;

    setInputVal(schoolName);
    output(schoolName);
  }

  function handleClickRandom() {
    const schoolName =
      schoolNames[Math.floor(Math.random() * schoolNames.length)];

    setInputVal(schoolName);
    output(schoolName);

    ReactGA.event({
      category: 'projects',
      action: 'click',
      label: '隨機大學',
    });
  }
}

SchoolSearch.propTypes = {
  className: PropTypes.string,
};
