<section class="app">
  <readr-header
    class="app__readr-header readr-header"
    on:readrLogoLinkClick={ () => { ga('send', 'event', 'projects', 'click', 'back to home', { nonInteraction: false }) } }
    on:shareFacebookLinkClick={ () => { ga('send', 'event', 'projects', 'click', 'share to fb', { nonInteraction: false }) } }
    on:shareLINELinkClick={ () => { ga('send', 'event', 'projects', 'click', 'share to line', { nonInteraction: false }) } }
  >
  </readr-header>
<!--  <div style="position: fixed; top: 100px; left: 100px">{currentChapter} - {currentScene}</div>-->
  <main class="app__main main">
    <SectionLanding class="main__section-landing" />
    <section class="main__section-explore section-explore">
      {#if windowInnerWidth > 767}
        <Butterfly />
        <button
          class="skip-explore-button { showSkipExploreButton && currentChapter === '1' && currentScene === '0' ? 'skip-explore-button--show': '' }"
          on:click={handleSkipExploreButtonClick}
        >
          直接看報導
        </button>
      {:else}
        <ButterflyMobile />
      {/if}
      <div style="z-index: 999999" class="explore-footer { showSkipExploreButton && currentChapter === '1' && currentScene === '0' ? 'explore-footer--show' : '' }">
        <p>資料來源：國家發展委員會檔案管理局，<a href="https://aa.archives.gov.tw/Home/Index" target="_blank" rel="noreferrer noopener">國家檔案資訊網</a></p>
      </div>
    </section>
    <section class="main__section-story section-story">
      <section class="section-story__chapter chapter">
        <header id="chapter-1-header" class="chapter__chapter-header chapter-header">
          <h1 class="chapter-header__title">
            <img src="./butterfly-dot-01.svg" alt="chapter-header-title-img">
            <p>第一章：受難者群像</p>
          </h1>
        </header>
        <!--{#if currentChapter === '1' && currentScene !== '0'}-->
        <!--<footer class="chapter__chapter-footer chapter-footer">-->
        <!--  <p>資料來源：國家發展委員會檔案管理局，<a href="https://aa.archives.gov.tw/Home/Index" target="_blank" rel="noreferrer noopener">國家檔案資訊網</a></p>-->
        <!--</footer>-->
        <!--{/if}-->
        <figure class="chapter__chapter-background-figure chapter-background-figure">
          <ButterflyStoryLegend
            categoryRuleName={butterflyStoryLegend[`1-${currentChapter === '1' ? currentScene : 9}`].categoryRuleName}
            totalCount={butterflyStoryLegend[`1-${currentChapter === '1' ? currentScene : 9}`].totalCount}
            categories={butterflyStoryLegend[`1-${currentChapter === '1' ? currentScene : 9}`].categories}
          />
          {#if windowInnerWidth > 767}
            <ButterflyStory
              chapter={'1'}
              scene={currentChapter == '1' ? currentScene : 9}
            />
          {:else}
            <img class="mobile-butterfly-story-image" src="./butterfly-story-mobile/{`1-${currentChapter === '1' ? currentScene : 9}`}.png" alt="mobile-butterfly">
          {/if}
        </figure>
        <section class="chapter__chapter-scene-dialog-wrapper chapter-scene-dialog-wrapper">
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog dialog--hidden"
            data-chapter="1"
            data-scene="0"
          >
            placeholder for 1-0
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="1"
            data-scene="1"
          >
            <p>這些受難者的性別有超過 9 成是男性，女性僅佔 4%。</p>
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="1"
            data-scene="2"
          >
            <p>本省受難者的人數較外省多約 1 千人，各佔 55％和 45％。</p>
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="1"
            data-scene="3"
          >
            <p>受難者們幾乎都在青年時期被起訴，20 至 29 歲佔比最多。值得注意的是，未成年和 70 歲以上被起訴的人雖然比較少，但最年輕的只有 14 歲，最年長的是 77 歲。</p>
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="1"
            data-scene="4"
          >
            <p>戒嚴時期的臺灣社會遭到政府全面監控，情治機關<span class="hint" on:click={handleHintClick}>（註）</span>逮捕、偵訊大量平民，起訴最多人的單位是「臺灣省保安司令部」，其次是「臺灣警備總司令部」和「國防部」。</p>
            {#if hintToggle['1-4']}
              <div class="hint-wrapper">
                <p><span class="hint">註</span>：什麼是情治機關？</p>
                <p>A: 蒐集、研究、分析、運用影響國家利益資訊的政府單位。戒嚴時期在國家安全局的指揮下，包括警總、保密局、調查局等單位，大規模控制社會輿情，並透過軍事審判整肅異己。</p>
              </div>
            {/if}
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="1"
            data-scene="5"
          >
            <p>前兩者算是同一個單位，「臺灣省保安司令部」於 1949 年成立，9 年後和「臺灣防衛總司令部」等單位合併為「臺灣警備總司令部」（簡稱警總），是主要的情治機關<span class="hint" on:click={handleHintClick}>（註）</span>。</p>
            <p>它們都是為什麼起訴這些受難者呢？</p>
            {#if hintToggle['1-5']}
              <div class="hint-wrapper">
                <p><span class="hint">註</span>：什麼是情治機關？</p>
                <p>A: 蒐集、研究、分析、運用影響國家利益資訊的政府單位。戒嚴時期在國家安全局的指揮下，包括警總、保密局、調查局等單位，大規模控制社會輿情，並透過軍事審判整肅異己。</p>
              </div>
            {/if}
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="1"
            data-scene="6"
          >
            <p>「顛覆政府」<span class="hint" on:click={handleHintClick}>（註）</span>是最常見的起訴原因。這些受難者中，可以發現本省人比例較高（64%），且時間多落在戒嚴初期（民國 40 至 49 年）。</p>
            {#if hintToggle['1-6']}
              <div class="hint-wrapper">
                <p><span class="hint">註</span>：起訴書原文為「意圖破壞國體、竊據國土或以非法之方法變更國憲、顛覆政府，而著手實行」。</p>
              </div>
            {/if}
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="1"
            data-scene="7"
          >
            <p>常見理由還有「參加叛亂的組織或集會」及「明知是對方匪諜卻不舉報」<span class="hint" on:click={handleHintClick}>（註）</span>。前者同樣是本省人佔多數，時間分佈上也集中在戒嚴初期（民國 40 至 49 年）。</p>
            {#if hintToggle['1-7']}
              <div class="hint-wrapper">
                <p><span class="hint">註</span>：起訴書原文為「參加叛亂之組織或集會」、「明知為匪諜而不告密、檢舉或縱容之」。</p>
              </div>
            {/if}
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="1"
            data-scene="8"
          >
            <p>中研院臺史所助研究員林正慧指出，本省案件早期都是中共在臺地下組織<span class="hint" on:click={handleHintClick}>（註）</span>，例如「臺灣省工作委員會」和「臺灣民主自治同盟案」，50 年代初期就遭情治機關掃蕩殆盡；後期則是臺獨案最多。</p>
            {#if hintToggle['1-8']}
              <div class="hint-wrapper">
                <p><span class="hint">註</span>：這裡提到的中共在臺地下組織是誰？</p>
                <p>臺灣省工作委員會是第二次世界大戰結束後，中國共產黨在臺灣成立的省級組織；臺灣民主自治同盟是前臺灣共產黨人士謝雪紅等人在民國 36 年於香港創立的組織。</p>
              </div>
            {/if}
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="1"
            data-scene="9"
          >
            <p>林正慧也提到，外省人涉及的案件以「軍隊保防案」為主，例如批評時政、投降敵軍等，另外還有間諜案、情治機關內鬥。</p>
          </article>
        </section>
      </section>
      <section class="section-story__chapter chapter">
        <header id="chapter-2-header" class="chapter__chapter-header chapter-header">
          <h1 class="chapter-header__title">
            <img src="./butterfly-dot-01.svg" alt="chapter-header-title-img">
            <p>第二章：接受審判</p>
          </h1>
          <div>
            <p>每一次的審判，「審理人」的決策將決定被告有沒有罪？我們比較 10710 筆受難者的第一次審判結果與最終判決，發現共有 1068 筆的刑度<span class="hint" on:click={() => { handleHintClick('2')}}>（註）</span>遭到更動。為何會有改變？是誰造成的？</p>
            {#if hintToggle['2']}
              <div class="hint-wrapper">
                <p><span class="hint">（註）</span>：刑度是指刑罰的嚴重程度，刑度越重代表處罰越嚴厲。</p>
              </div>
            {/if}
          </div>
        </header>
        <!--{#if currentChapter === '2' && currentScene !== '0'}-->
        <!--<footer class="chapter__chapter-footer chapter-footer">-->
        <!--  <p>資料來源：國家發展委員會檔案管理局，<a href="https://aa.archives.gov.tw/Home/Index" target="_blank" rel="noreferrer noopener">國家檔案資訊網</a></p>-->
        <!--</footer>-->
        <!--{/if}-->
        {#if windowInnerWidth > 767}
          <figure class="chapter__chapter-background-figure chapter-background-figure { ['2-4', '2-5', '2-7', '2-8', '2-13', '2-14'].includes(`${currentChapter}-${currentScene}`) ? 'hidden' : '' }">
            <ButterflyStoryLegend
              categoryRuleName={(butterflyStoryLegend[`2-${currentChapter === '2' ? currentScene : 2}`] || {}).categoryRuleName}
              totalCount={(butterflyStoryLegend[`2-${currentChapter === '2' ? currentScene : 2}`] || {}).totalCount}
              categories={(butterflyStoryLegend[`2-${currentChapter === '2' ? currentScene : 2}`] || {}).categories || []}
            />
            <ButterflyStory
              chapter={'2'}
              scene={currentChapter == '2' ? currentScene : 2}
            />
          </figure>
          {#if ['2-4', '2-5', '2-7', '2-8', '2-13', '2-14'].includes(`${currentChapter}-${currentScene}`)}
            <figure class="chapter__chapter-background-figure chapter-background-figure">
              <div>
                <h1 class="layout2-title">
                  {layout2Titles[`2-${currentScene}`]}
                </h1>
                <img class="layout2-chart-img" src="./2-{currentScene}.jpg" alt="separate-butterflies-chart">
              </div>
            </figure>
          {/if}
        {:else}
          <figure class="chapter__chapter-background-figure chapter-background-figure { ['2-4', '2-5', '2-7', '2-8', '2-13', '2-14'].includes(`${currentChapter}-${currentScene}`) ? 'hidden' : '' }">
            <ButterflyStoryLegend
              categoryRuleName={(butterflyStoryLegend[`2-${currentChapter == '2' ? currentScene : 2}`] || {}).categoryRuleName}
              totalCount={(butterflyStoryLegend[`2-${currentChapter == '2' ? currentScene : 2}`] || {}).totalCount}
              categories={(butterflyStoryLegend[`2-${currentChapter == '2' ? currentScene : 2}`] || {}).categories || []}
            />
            <img class="mobile-butterfly-story-image" src="./butterfly-story-mobile/{`2-${currentChapter == '2' ? currentScene : 2}`}.png" alt="mobile-butterfly">
          </figure>
          {#if ['2-4', '2-5', '2-7', '2-8', '2-13', '2-14'].includes(`${currentChapter}-${currentScene}`)}
            <figure class="chapter__chapter-background-figure chapter-background-figure">
              <div>
                <h1 class="layout2-title">
                  {layout2Titles[`2-${currentScene}`]}
                </h1>
                <img class="layout2-chart-img" src="./2-{currentScene}-mobile.jpg" alt="separate-butterflies-chart">
              </div>
            </figure>
          {/if}
        {/if}
        <section class="chapter__chapter-scene-dialog-wrapper chapter-scene-dialog-wrapper">
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog dialog--hidden"
            data-chapter="2"
            data-scene="0"
          >
            placeholder for 2-0
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="1"
          >
            <p>在這 1 千多位受難者中，共有 72% 受難者在審理過程中被加重刑度，28% 受難者刑度減輕。</p>
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="2"
          >
            <p>刑度加重的案件中，加重到死刑的比例超過 3 成，且其中有 47 人原來的刑度較輕（少於有期徒刑 10 年），最後卻被判死刑。</p>
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="3"
          >
            <p>加重至死刑的主要原因，仍是「意圖顛覆政府，並付諸行動」<span class="hint" on:click={handleHintClick}>（註）</span>。</p>
            {#if hintToggle['2-3']}
              <div class="hint-wrapper">
                <p><span class="hint">註</span>：審理文件的原文為「意圖以非法之方法顛覆政府而著手實行」。</p>
              </div>
            {/if}
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog dialog--hidden-long"
            data-chapter="2"
            data-scene="4"
          >
            placeholder for 2-4
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="5"
          >
            <p>例如 1953 年綠島爆發「獄中再叛亂案」<span class="hint" on:click={handleHintClick}>（註）</span>，獄方發現政治犯抄寫違禁紙條互相傳遞，被解讀成是組織串連行為，最後有 14 人以「意圖顛覆政府，並付諸行動」被處死刑。</p>
            {#if hintToggle['2-5']}
              <div class="hint-wrapper">
                <p><span class="hint">註</span>：什麼是綠島獄中再叛亂案？</p>
                <p>綠島監獄新生訓導處要求政治犯在身體刺上「反共抗俄」的標語來擁載政府，但遭到大部分人抵制。事後情治單位以「阻擾管訓」為理由，稱政治犯意圖在獄中叛亂、顛覆政府，最後 14 人遭槍決，還有數 10 人因此接受偵訊。</p>
              </div>
            {/if}
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="6"
          >
            <p>在加重刑度的案件中，還有 6% 案件，是「下一位審理人<span class="hint" on:click={handleHintClick}>（註）</span>並不認同上一位審理人的判決」。</p>
            {#if hintToggle['2-6']}
              <div class="hint-wrapper">
                <p><span class="hint">註</span>：審理人是什麼？</p>
                <p>一般案件的審理人為法官，審查軍事政治案件的人，則包括軍法官、國防部長、總統等人。</p>
              </div>
            {/if}
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog dialog--hidden-long"
            data-chapter="2"
            data-scene="7"
          >
            placeholder for 2-7
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="8"
          >
            <p>像是 1969 年的「統中會案」<span class="hint" on:click={handleHintClick}>（註）</span>，有民眾私下籌組社團，軍法官認定涉嫌顛覆政權，從有期徒刑 15 年加重到無期徒刑。總統府秘書長張羣等人認為維持原本的 15 年徒刑就好，但在蔣介石的堅持下，3 人仍處無期徒刑。</p>
            {#if hintToggle['2-8']}
              <div class="hint-wrapper">
                <p><span class="hint">註</span>：什麼是統中會案？</p>
                <p>是 1960 年代發生的中國統一事業基金會案，當時自覺運動風行，學生爭相參與加強公德心和愛國活動，青年許席圖更打算籌組組織「中國統一事業基金會」響應，卻遭政府指控是叛亂團體。</p>
              </div>
            {/if}
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="9"
          >
            <p>而威權時期的最高負責人，近年被許多學者認定為主要加害者的蔣介石，總共參與逾 3 成的審判過程，包括 930 筆最終被判死刑的案件。</p>
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="10"
          >
            <p>3 千多筆案件中，有 5% 的受難者是因為蔣介石才加重刑度，其中超過半數被加重至死刑。</p>
            <p>蔣介石更直接在部分公文寫下「應即槍決照准、槍決可也」等批示，公然違反當時的法律<span class="hint" on:click={handleHintClick}>（註）</span>。</p>
            {#if hintToggle['2-10']}
              <div class="hint-wrapper">
                <p><span class="hint">註</span>：為什麼蔣介石的行為違反當時的法律？</p>
                <p>根據《陸海空軍審判法》、《戰時陸海空軍審判簡易規程》、《軍事審判法》規定，軍事長官與總統如果認定判決不當，可以行使「覆議權」，也就是要求重新審判，但不能逕自變更判決，詳細內容可見下方分析文章。</p>
              </div>
            {/if}
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="11"
          >
            <p>蔣介石還會給予判刑的建議，像是「凡判處 12 年以上徒刑者一律改處死刑」，有 18% 的案件留下這樣的批示。</p>
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="12"
          >
            <p>他也會在公文上質疑軍法機構辦事草率，例如「何以原辦案人對叛亂案量刑如此之輕；保安司令部何以僅判感化三年？均應查報」。</p>
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog dialog--hidden-long"
            data-chapter="2"
            data-scene="13"
          >
            placeholder for 2-13
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="14"
          >
            <p>但蔣介石也有少數決定輕判的例子，其中馬乘風包庇叛徒、許志北連續供給叛徒金錢、郭廷亮打算以非法的方式顛覆政府等原因原本被判處死刑，經蔣介石批示後改為無期徒刑。</p>
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="15"
          >
            <p>從資料也可以發現，加重刑度的決策者大部分都是政府的軍政高層，時任參謀總長周至柔<span class="hint" on:click={handleHintClick}>（註）</span>經手最多筆案件，另外還有前總統蔣介石、時任總統府參軍長劉士毅<span class="hint" on:click={handleHintClick}>（註）</span>等人。</p>
            {#if hintToggle['2-15']}
              <div class="hint-wrapper">
                <p><span class="hint">註</span>：周至柔和劉士毅是誰？</p>
                <p>周至柔是陸軍、空軍一級上將，創建中華民國空軍組織，曾任參謀總長、臺灣省政府主席、國安會秘書長。</p>
                <p>劉士毅則是陸軍二級上將，曾任總統府參軍長，在國防軍事方面扮演輔佐總統的角色。</p>
              </div>
            {/if}
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="2"
            data-scene="16"
          >
            <p>「意圖顛覆政府，並付諸行動」<span class="hint" on:click={handleHintClick}>（註）</span>和「參加叛亂組織」，是這 3 位審理人參酌增加政治犯刑度的共同主因。</p>
            {#if hintToggle['2-16']}
              <div class="hint-wrapper">
                <p><span class="hint">註</span>：審理文件的原文為「意圖以非法之方法顛覆政府而著手實行」</p>
              </div>
            {/if}
          </article>
        </section>
      </section>
      <section class="section-story__chapter chapter">
        <header id="chapter-3-header" class="chapter__chapter-header chapter-header">
          <h1 class="chapter-header__title">
            <img src="./butterfly-dot-01.svg" alt="chapter-header-title-img">
            <p>第三章：終審之後</p>
          </h1>
        </header>
        <!--{#if currentChapter === '3' && currentScene !== '0'}-->
        <!--<footer class="chapter__chapter-footer chapter-footer">-->
        <!--  <p>資料來源：國家發展委員會檔案管理局，<a href="https://aa.archives.gov.tw/Home/Index" target="_blank" rel="noreferrer noopener">國家檔案資訊網</a></p>-->
        <!--</footer>-->
        <!--{/if}-->
        <figure class="chapter__chapter-background-figure chapter-background-figure">
          <ButterflyStoryLegend
            categoryRuleName={butterflyStoryLegend[`3-${currentChapter === '3' ? currentScene : 1}`].categoryRuleName}
            totalCount={butterflyStoryLegend[`3-${currentChapter === '3' ? currentScene : 1}`].totalCount}
            categories={butterflyStoryLegend[`3-${currentChapter === '3' ? currentScene : 1}`].categories}
          />
          {#if windowInnerWidth > 767}
            <ButterflyStory
              chapter={'3'}
              scene={currentChapter == '3' ? currentScene : 2}
            />
          {:else}
            <img class="mobile-butterfly-story-image" src="./butterfly-story-mobile/{`3-${currentChapter === '3' ? currentScene : 1}`}.png" alt="mobile-butterfly">
          {/if}
        </figure>
        <section class="chapter__chapter-scene-dialog-wrapper chapter-scene-dialog-wrapper">
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog dialog--hidden"
            data-chapter="3"
            data-scene="0"
          >
            placeholder for 3-0
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="3"
            data-scene="1"
          >
            <p>每一位政治受難者經歷的審判情形皆有不同，面對少則 2 次，多至 48 次的審理過程後，才會知道最終的判決。</p>
            <p>探究終審結果，判處有期徒刑未滿 10 年的人數最多，占資料總數的 27%。</p>
          </article>
          <article
            class="chapter-scene-dialog-wrapper__dialog dialog"
            data-chapter="3"
            data-scene="2"
          >
            <p>至於包括死刑和無期徒刑的極刑總數為 1244 筆，約占資料總數的 15%。</p>
          </article>
        </section>
      </section>
    </section>
    <SectionCharacter />
    <SectionArticle />
    <SectionNextActions />
    <SectionCredits />
    <SectionREADr />
    {#if windowInnerWidth <= 767}
      <Monument />
    {/if}
  </main>
  <readr-footer class="readr-footer"></readr-footer>
</section>

<svelte:window
  bind:innerWidth={windowInnerWidth}
/>

<script>
  import SectionLanding from "../components/SectionLanding.svelte"
  import Butterfly from '../components/Butterfly.svelte'
  import ButterflyMobile from '../components/ButterflyMobile.svelte'
  import ButterflyStory from '../components/ButterflyStory.svelte'
  import ButterflyStoryLegend from '../components/ButterflyStoryLegend.svelte'
  import SectionScrollyTelling from '../components/SectionScrollyTelling.svelte'
  import SectionCharacter from '../components/SectionCharacter.svelte'
  import SectionArticle from '../components/SectionArticle.svelte'
  import SectionNextActions from '../components/SectionNextActions.svelte'
  import SectionCredits from '../components/SectionCredits.svelte'
  import SectionREADr from '../components/SectionREADr.svelte'
  import Monument from '../components/Monument.svelte'
  import { onMount } from 'svelte'
  import 'intersection-observer'
  import scrollama from "scrollama"
  import * as animateScroll from "svelte-scrollto"

  let windowInnerWidth = 0
  console.log(windowInnerWidth)

  const butterflyStoryLegend = {
    '1-0': {
      categoryRuleName: '性別',
      totalCount: 10708,
      categories: [
        '男性 10269 筆',
        '女性 439 筆'
      ]
    },
    '1-1': {
      categoryRuleName: '性別',
      totalCount: 10708,
      categories: [
        '男性 10269 筆',
        '女性 439 筆'
      ]
    },
    '1-2': {
      categoryRuleName: '籍貫',
      totalCount: 10653,
      categories: [
        '本省 5848 筆',
        '外省 4805 筆'
      ]
    },
    '1-3': {
      categoryRuleName: '年齡',
      totalCount: 9176,
      categories: [
        '20-29 歲 3878 筆'
      ]
    },
    '1-4': {
      categoryRuleName: '被誰起訴',
      totalCount: 4398,
      categories: [
        '臺灣省保安司令部 2033 筆',
        '臺灣警備總司令部 1385 筆',
        '國防部 256 筆'
      ]
    },
    '1-5': {
      categoryRuleName: '被誰起訴',
      totalCount: 4398,
      categories: [
        '臺灣省保安司令部 2033 筆',
        '臺灣警備總司令部 1385 筆',
        '國防部 256 筆'
      ]
    },
    '1-6': {
      categoryRuleName: '起訴理由',
      totalCount: 3077,
      categories: [
        '意圖破壞國體、竊據國土或以非法之方法變更國憲、顛覆政府，而著手實行 812 筆',
      ]
    },
    '1-7': {
      categoryRuleName: '起訴理由',
      totalCount: 3077,
      categories: [
        '參加叛亂之組織或集會 770 筆',
        '明知為匪諜而不告密、檢舉或縱容之 390 筆'
      ]
    },
    '1-8': {
      categoryRuleName: '起訴理由',
      totalCount: 3077,
      categories: [
        '參加叛亂之組織或集會 770 筆',
        '明知為匪諜而不告密、檢舉或縱容之 390 筆'
      ]
    },
    '1-9': {
      categoryRuleName: '起訴理由',
      totalCount: 3077,
      categories: [
        '參加叛亂之組織或集會 770 筆',
        '明知為匪諜而不告密、檢舉或縱容之 390 筆'
      ]
    },
    '2-0': {
      categoryRuleName: '刑度更動',
      totalCount: 1068,
      categories: [
        '刑度加重 767 筆',
        '刑度減輕 301 筆'
      ]
    },
    '2-1': {
      categoryRuleName: '刑度更動',
      totalCount: 1068,
      categories: [
        '刑度加重 767 筆',
        '刑度減輕 301 筆'
      ]
    },
    '2-2': {
      categoryRuleName: '加重刑度',
      totalCount: 767,
      categories: [
        '死刑 249 筆',
        '無期徒刑 27 筆',
        '10 年以上有期徒刑 232 筆'
      ]
    },
    '2-3': {
      categoryRuleName: '加重至死刑的主要原因',
      totalCount: 249,
      categories: [
        '意圖顛覆政府，並付諸行動：114 筆'
      ]
    },
    '2-6': {
      categoryRuleName: '加重刑度',
      totalCount: 767,
      categories: [
        '下一位審理人並不認同刑度加重 43 筆'
      ]
    },
    '2-9': {
      categoryRuleName: '資料總數',
      totalCount: 10710,
      categories: [
        '蔣介石介入 3348 筆'
      ]
    },
    '2-10': {
      categoryRuleName: '蔣介石加重',
      totalCount: 176,
      categories: [
        '91 筆改至死刑'
      ]
    },
    '2-11': {
      categoryRuleName: '蔣介石加重',
      totalCount: 176,
      categories: [
        '給予判刑建議 31 筆'
      ]
    },
    '2-12': {
      categoryRuleName: '蔣介石加重',
      totalCount: 176,
      categories: [
        '質疑軍法機構辦事草率 28 筆'
      ]
    },
    '2-15': {
      categoryRuleName: '最常加重刑度審理人',
      totalCount: 767,
      categories: [
        '參謀總長 周至柔：231 筆',
        '總統 蔣中正：177 筆',
        '總統府參軍長 劉士毅：115 筆'
      ]
    },
    '2-16': {
      categoryRuleName: '最常加重刑度審理人',
      totalCount: 767,
      categories: [
        '參謀總長 周至柔：231 筆',
        '總統 蔣中正：177 筆',
        '總統府參軍長 劉士毅：115 筆'
      ]
    },
    '3-0': {
      categoryRuleName: '終審刑度',
      totalCount: 8167,
      categories: [
        '人數最多：有期徒刑未滿 10 年 2219 筆'
      ]
    },
    '3-1': {
      categoryRuleName: '終審刑度',
      totalCount: 8167,
      categories: [
        '人數最多：有期徒刑未滿 10 年 2219 筆'
      ]
    },
    '3-2': {
      categoryRuleName: '終審刑度',
      totalCount: 8167,
      categories: [
        '死刑 1080 筆',
        '無期徒刑 164 筆'
      ]
    }
  }

  const layout2Titles = {
    '2-4': '綠島獄中再叛亂案被槍決者，14 人皆因意圖以非法之方法顛覆政府而著手實行判處死刑',
    '2-5': '綠島獄中再叛亂案被槍決者，14 人皆因意圖以非法之方法顛覆政府而著手實行判處死刑',
    '2-7': '統中會案涉案人士，因蔣介石堅持，被判處無期徒刑',
    '2-8': '統中會案涉案人士，因蔣介石堅持，被判處無期徒刑',
    '2-13': '蔣介石減輕 6 筆案件的刑度',
    '2-14': '蔣介石減輕 6 筆案件的刑度',
  }

  const hintToggle = {}
  function handleHintClick(e) {
    if (typeof e === 'string') {
      hintToggle[e] = !hintToggle[e]
      return
    }
    const chapter = e.target.parentElement.parentElement.dataset.chapter
    const scene = e.target.parentElement.parentElement.dataset.scene
    hintToggle[`${chapter}-${scene}`] = !hintToggle[`${chapter}-${scene}`]
  }
  
  
  function handleSkipExploreButtonClick() {
    animateScroll.scrollTo({element: '#chapter-1-header'})
    ga('send', 'event', 'projects', 'click', '直接看報導', { nonInteraction: false })
  }
  let showSkipExploreButton = false
  onMount(() => {
    const scrollerTop = scrollama()
    scrollerTop
      .setup({
        step: ".section-explore",
        offset: 0.1,
        // debug: true
      })
      .onStepEnter(response => {
        if (response.direction === 'down') {
          showSkipExploreButton = true
        }
      })
      .onStepExit(response => {
        if (response.direction === 'up') {
          showSkipExploreButton = false
        }
      })

    // setup resize event
    window.addEventListener("resize", scrollerTop.resize);

    const scrollerBottom = scrollama()
    scrollerBottom
      .setup({
        step: ".section-explore",
        offset: 0.9,
        // debug: true
      })
      .onStepEnter(response => {
        if (response.direction === 'up') {
          showSkipExploreButton = true
        }
      })
      .onStepExit(response => {
        if (response.direction === 'down') {
          showSkipExploreButton = false
        }
      })

    // setup resize event
    window.addEventListener("resize", scrollerBottom.resize);
  })

  let scrollStore = {}
  const scrollEmits = {
    '1-0': '互動區',
    '1-9': '第一章末',
    '2-8': '第二章中間',
    '2-16': '第二章末',
    '3-2': '第三章末',
  }
  let currentChapter = '1'
  let currentScene = '0'
  onMount(() => {
    const scroller = scrollama()
    scroller
      .setup({
        step: ".dialog",
        offset: 1,
        // debug: true
      })
      .onStepEnter(response => {
        currentChapter = response.element.dataset.chapter
        if (response.direction === 'down') {
          currentScene = response.element.dataset.scene
          if (!scrollStore[`${currentChapter}-${currentScene}`] && `${currentChapter}-${currentScene}` in scrollEmits) {
            scrollStore[`${currentChapter}-${currentScene}`] = true
            ga('send', 'event', 'projects', 'scroll', scrollEmits[`${currentChapter}-${currentScene}`], { nonInteraction: false })
          }
        } else {
          currentScene = String(Math.max(0, response.element.dataset.scene - 1))
        }
      })
      // .onStepExit(response => {
      //   if (response.direction === 'down') {
      //     currentChapterScene = response.element.dataset.next
      //     console.log('down exit')
      //   } else {
      //     currentChapterScene = response.element.dataset.prev
      //     console.log('up exit')
      //   }
      // })

    // setup resize event
    window.addEventListener("resize", scroller.resize);
  })

  onMount(() => {
    gsap.to('#chapter-1-header', {
      y: 0,
      opacity: 1,
      duration: 1,
      once: true,
      scrollTrigger: '#chapter-1-header',
    })
    gsap.to('#chapter-2-header', {
      y: 0,
      opacity: 1,
      duration: 1,
      once: true,
      scrollTrigger: '#chapter-2-header',
    })
    gsap.to('#chapter-3-header', {
      y: 0,
      opacity: 1,
      duration: 1,
      once: true,
      scrollTrigger: '#chapter-3-header',
    })
  })

  let isScrollEventSentFooter = false
  onMount(() => {
    const scroller = scrollama()
    scroller
      .setup({
        step: ".readr-footer",
        offset: 1,
        // debug: true
      })
      .onStepEnter(response => {
        if (!isScrollEventSentFooter) {
          ga('send', 'event', 'projects', 'scroll', 'footer', { nonInteraction: false })
          isScrollEventSentFooter = true
        }
      })

    // setup resize event
    window.addEventListener("resize", scroller.resize);
  })
</script>

<style>
  .app {
    padding: 62.63px 0 0 0;
  }
  .app__readr-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 10000;
  }
  .readr-header {
    border-bottom: 2px solid #d8d8d8;
    z-index: 9999999;
  }
  .section-explore {
    height: 10000px;
  }
  @media (max-width: 768px) {
    .section-explore {
      height: 1000px;
    }
  }

  .explore-footer {
    position: fixed;
    bottom: 50px;
    right: 50px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.25s ease-out;
  }
  @media (max-width: 768px) {
    .explore-footer {
      bottom: 20px;
      right: 0;
      width: 100%;
      padding: 0 20px;
      text-align: justify;
      font-size: 14px;
    }
  }

  .explore-footer--show {
    visibility: visible;
    opacity: 1;
  }
  .explore-footer a {
    color: #006db2;
    text-decoration: underline;
  }

  .skip-explore-button {
    position: fixed;
    left: calc((100vw - 200px) / 2);
    bottom: 100px;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    background-color: #e0c950;
    opacity: 0;
    transition: opacity .25s ease-out;
    visibility: hidden;
  }
  .skip-explore-button--show {
    opacity: 1;
    visibility: visible;
  }

  /*.chapter {*/
  /*  border: 5px solid blue;*/
  /*}*/
  /*.chapter > * {*/
  /*  border: 5px solid red;*/
  /*}*/
  /*.chapter > figure {*/
  /*  background-color: purple;*/
  /*}*/

  .section-story__chapter {
    padding-bottom: 10px;
  }

  .chapter-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin: 0 auto;
    padding-top: 20vh;
  }
  .chapter-header div {
    margin: 25px 0 0 0;
  }
  .chapter-header p {
    text-align: justify;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.88;
    color: #4a4a4a;
  }
  .chapter-header .hint-wrapper p {
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: 0.2px;
    color: #4a4a4a;
    opacity: .8;
  }
  @media (max-width: 768px) {
    .chapter-header {
      width: 100%;
      padding: 0 20px;
      padding-top: 20vh;
    }
  }

  .chapter__chapter-header {
    opacity: 0;
    transform: translateY(50px);
  }
  .chapter__chapter-background-figure {
    position: sticky;
    width: 100%;
    height: calc(100vh - 62.63px);
    top: 62.63px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*border: 10px solid blue;*/
    /*background-color: gray;*/
    z-index: -1;
  }
  .chapter__chapter-background-figure.hidden {
    visibility: hidden;
  }

  .chapter-header__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .chapter-header__title img {
    width: 100px;
  }
  .chapter-header__title p {
    font-size: 21px;
    font-weight: 600;
    line-height: 1.52;
    letter-spacing: 2.1px;
    color: #006db2;
    margin: 25px 0 0 0;
  }

  .chapter-scene-dialog-wrapper {
    min-height: 100vh;
    width: 30%;
    margin: 0 50px 0 auto;
    position: relative;
    z-index: 9999;
  }
  @media (max-width: 768px) {
    .chapter-scene-dialog-wrapper {
      width: 100%;
      margin: 0;
      padding: 0 20px;
    }
  }

  .chapter-footer {
    position: sticky;
    top: 92vh;
    left: 0;
    display: flex;
    justify-content: flex-end;
    padding: 0 70px 0 0;
    z-index: 1001;
    font-size: 14px;
  }
  .chapter-footer a {
    color: #006db2;
    text-decoration: underline;
  }

  .dialog{
    width: 100%;
    /*height: 500px;*/
    padding: 20px;
    background-color: white;
    /*box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);*/
    margin-bottom: 100vh;
    /*opacity: .7;*/
    font-size: 16px;
    line-height: 1.75;
    color: #4a4a4a;
    z-index: 9999;
  }
  .dialog--hidden {
    margin-bottom: 0;
    visibility: hidden;
  }
  .dialog--hidden-long {
    margin-bottom: 100vh;
    visibility: hidden;
  }
  .dialog p + p {
    margin: 10px 0 0 0;
  }
  .hint {
    color: #006db2;
    cursor: pointer;
  }
  .hint-wrapper {
    margin: 16px 0 0 0;
    padding: 16px 0 0 0;
    border-top: 2px solid #979797;
  }

  .readr-footer {
    margin: 20px 0 0 0;
    border-top: 1px solid #979797;
  }

  .layout2-title {
    font-size: 21px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    text-align: center;
    color: #4a4a4a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .layout2-chart-img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .layout2-title {
      padding: 0 20px;
    }
    .layout2-chart-img {
      height: 70vh;
      object-fit: contain;
    }
  }

  .hide {
    visibility: hidden;
  }

  .mobile-butterfly-story-image {
    height: 50vh;
    object-fit: cover;
    z-index: -1;
  }
</style>