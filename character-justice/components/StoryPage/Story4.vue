<template>
    <div class="Story" id="4">
        <div class="Story__left_info">
            <div class="Story__left_info_image">
                <img :src="left_image" alt="" />
            </div>
            <div class="Story__left_info_content">
                <span class="Story__left_info_content_name">周賢農 小檔案</span>
                <ul class="Story__left_info_content_list">
                    <li>1933 年出生，新竹市人</li>
                    <li>
                        初中時應導師的邀請，加入「社會主義青年大同盟」，情治人員認定是參與叛亂組織逮捕
                    </li>
                    <li>
                        因未滿 18 歲，僅判刑 7
                        年，之後因刑期分數不及格，再送小琉球管訓 1 年 5 個月
                    </li>
                </ul>
            </div>
        </div>

        <div class="Story__content">
            <ArticleTitle
                >周賢農：這個政府想關你的時候，什麼理由都可以關</ArticleTitle
            >

            <ArticleQuote>
                你們認識李敖嗎？他曾經說過在戒嚴時期，只要有正義感的年輕人，思想很容易左傾。我覺得我就是如此。一個初中的少年，才
                14、15
                歲，看到社會貧富差距很大，貪污新聞頻傳，雖然懂得不多，但還是對政府很失望，也就在這個時期，認識了改變我一生的老師。
            </ArticleQuote>

            <ArticleParagraph>
                <p>
                    他叫黎子松，我在新竹市立中學初中部讀書時，他是我的班導師兼國文老師，黎老師的教法不死板，會以社會事件或國際新聞作例子，跟一般老師非常不一樣。而且又多才多藝，不僅書法寫得非常好，還會作詞作曲，以前的國文課哪有人這樣教的？那時候他還送我自己寫的書法，後來因為聽聞政府開始抓人，我爸媽就把老師送的所有東西都燒掉。
                </p>
            </ArticleParagraph>

            <ArticlePicture :imageUrl="[story4_1]">
                照片中間者是黎子松老師，他當時常常帶學生外出探訪農村（攝影／林煒凱）
            </ArticlePicture>

            <ArticleParagraph>
                <p>
                    黎老師常來我家聊天，談的內容都跟社會時事有關，也會推薦我們一些書，像是魯迅、茅盾的作品。週末也會帶我們去農村跟當地人聊聊，看看他們的生活。1947
                    年，老師又來拜訪，說他想達成社會主義的理想，問我要不要加入<ArticleNotation
                        notation="註：黎子松於 1949 年創立的組織，根據周賢農回憶，黎子松稱是為了達成社會主義的理想，減少貧富差距等社會問題才創立此組織。"
                        >「社會主義青年大同盟」</ArticleNotation
                    >，我沒有想太多就直接答應。他還請我邀請其他同學，好險我沒有認真照做，否則參加叛亂組織頂多關個幾年；但招攬他人進入組織，就構成叛亂行為，我搞不好早就被槍斃了。
                </p>

                <p>
                    上了高中之後，我花比較多時間在課業上，跟黎老師的聯繫就沒以前密切。但當黎老師被逮捕之後，情治單位也循線找上了我。
                </p>
            </ArticleParagraph>

            <ArticleQuote>
                當時是教務主任來教室找人，我就坐著吉普車前往新竹憲兵隊。偵訊通常都是在晚上，辦案人員跟我說，黎老師已經把我供出來了，他的日記裡也有留下我的資訊。我一聽到就直接點頭認罪，所以並沒有被刑求。
            </ArticleQuote>

            <ArticleParagraph>
                <p>
                    「社會主義青年大同盟案」共有 2
                    個人被槍決，其中一個就是黎子松老師。我因為差 3
                    天才成年．所以只被判 7
                    年，雖然跟其他人比起來刑度算輕，但一個人的青春只有一次，對我來說還是很嚴重。
                </p>

                <p>
                    我一開始被關在臺北軍人監獄，兩年後送往綠島，在綠島有比較多團體活動，像是唱歌、運動、上課等等，我常常偷溜去海邊游泳，還曾經偶遇楊逵，可惜當時沒有認出來，出獄後看到他的照片才發現。
                </p>

                <p>
                    在綠島，就不得不提「獄中再叛亂案」，這件事的起因是獄方希望政治犯響應「一人一事良心救國運動」，在身體刺上「反共抗俄」等標語，但大部分獄友討論後決定拒絕，運動就不了了之。
                </p>

                <p>
                    之後發生叛亂案時，我已經不在綠島，但很多好朋友都因此被槍決，我到現在還是很難過。而且現在回想起來，自己竟然有勇氣拒絕政府的要求，當時只是覺得在身上刺青不妥，所以抵制政府的活動，倒是沒想過有可能回不了家。
                </p>
            </ArticleParagraph>

            <ArticlePicture :imageUrl="[story4_2]">
                周賢農在獄中寫下座右銘，期勉自己戰勝痛苦（攝影／林煒凱）
            </ArticlePicture>

            <ArticleParagraph>
                <p>
                    還有一件事情，我到現在還是覺得很離譜。當時我差幾個月就刑滿，獄方把我叫過去，跟我說如果提供一些潛在叛亂的名單，就讓我準時出獄。我當然直接拒絕啊，結果我就被分發到小琉球，多坐了一年半的牢，這個政府就是這麼不合理，想關你的時候，什麼理由都可以關。
                </p>

                <p>
                    因為沒有學歷也沒有經歷，身分證上面也留了註記，我出獄後好長一段時間都找不到工作。剛好香港邵氏電影公司來臺灣徵才，我順利通過考試，才找到一條生路。後來有朋友找我一起創業，一直做到退休。
                </p>

                <p>
                    現在的我有空就參加日文課、口琴課和氣功課，有空也會約過去的獄友出來聊聊，人生應該開放、樂觀一點，我也希望獄友能走出陰鬱的過去，未來還有很多的可能性。
                </p>
            </ArticleParagraph>
        </div>
    </div>
</template>

<script>
import ArticleQuote from '~/components/Article/ArticleQuote'
import ArticleTitle from '~/components/Article/ArticleTitle'
import ArticleParagraph from '~/components/Article/ArticleParagraph'
import ArticlePicture from '~/components/Article/ArticlePicture'
import ArticleNotation from '~/components/Article/ArticleNotation'

import left_image from '~/static/images/4_3.jpg'
import story4_1 from '~/static/images/story4_1.jpeg'
import story4_2 from '~/static/images/story4_2.jpeg'
import story1_3_1 from '~/static/images/story1_3_1.jpeg'
import story1_3_2 from '~/static/images/story1_3_2.jpeg'
import story1_3_3 from '~/static/images/story1_3_3.jpeg'

export default {
    transition: 'fade',
    components: {
        ArticleQuote,
        ArticleTitle,
        ArticleParagraph,
        ArticlePicture,
        ArticleNotation,
    },
    data() {
        return {
            left_image,
            story4_1,
            story4_2,
            story1_3_1,
            story1_3_2,
            story1_3_3,
        }
    },
}
</script>

<style lang="scss" scoped>
@import './Story.scss';
</style>
