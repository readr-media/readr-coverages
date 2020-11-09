<template>
    <div class="Story1">
        <ArticleTitle
            >Ch1<br />
            2-8 歲 肥肉、白蛆、遛狗鏈</ArticleTitle
        >

        <ArticleParagraph>
            <p>
                個新腳手工的那情小件面益？色代生影接如無我備……同軍去要：實銀獨小性真引試支：車不望的都，住許不識依前。
            </p>

            <p>
                在告夠最理員自種說技本流轉太三一境場演度止石好司上定的為果光神合傳可到班種……天成實代生學山為變故日。化兒老常：時的功再濟許大經往商常能年是她以新利作了，一輕有心之分急綠！花理集站製查平斯去什小投更果助小止大了已。影爭去道天氣學過官，議到文一濟修前願兒，放市談們小灣光河；企識心制管國力都此天候改並為知國過一求不子你手作同弟可人？中獲約能在也大出一使兒藥從院當過我：愛情壓去壓的片故系結爸海力是，現生一業當文高光了臺生頭在心爾會國然樹出動把的面排。
            </p>
        </ArticleParagraph>

        <ArticleSubTitle></ArticleSubTitle>
        <ArticlePicture :imageUrl="imageCarousel" :autoplayTimeout="5000"
            >照片圖說照片圖說照片圖說照片圖說照片圖說照片圖說</ArticlePicture
        >
        <!-- <ArticlePicture></ArticlePicture> -->
    </div>
</template>

<script>
import ArticleTitle from '~/components/ArticleComponents/ArticleTitle'
import ArticleParagraph from '~/components/ArticleComponents/ArticleParagraph'
import ArticleSubTitle from '~/components/ArticleComponents/ArticleSubTitle'
import ArticlePicture from '~/components/ArticleComponents/ArticlePicture'

import image1 from '~/static/images/story1_3_1.jpeg'
import image2 from '~/static/images/story1_3_2.jpeg'
import image3 from '~/static/images/story1_3_3.jpeg'
export default {
    components: {
        ArticleTitle,
        ArticleParagraph,
        ArticleSubTitle,
        ArticlePicture,
    },
    data() {
        return {
            imageCarousel: [image1, image2, image3],
        }
    },
}
</script>

<style lang="scss" scoped></style>
