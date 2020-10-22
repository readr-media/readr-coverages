<script>
import leftImg1 from '~/static/images/1_3.jpg'
import leftImg2 from '~/static/images/2_3.jpg'
import leftImg3 from '~/static/images/3_3.jpg'
import leftImg4 from '~/static/images/4_3.jpg'
export default {
    data() {
        return {
            infoList: [
                {
                    id: 1,
                    name: '張常美',
                    image: leftImg1,
                    info: [
                        '1931 年出生，臺中縣人',
                        '16歲就讀臺中商業職業學校一年級時，遭情治單位以「參加叛亂組織」罪名起訴',
                        '偵訊 1 次後即受審判，判刑 12 年',
                    ],
                },
                {
                    id: 2,
                    name: '劉秀明',
                    image: leftImg2,
                    info: [
                        '1944 年出生，臺北市人',
                        '24 歲遭情治單位以「參加叛亂組織」罪名起訴，同案受難者被刑求到精神失常',
                        '判刑 15 年，之後適逢蔣介石逝世，減刑 5 年',
                    ],
                },
                {
                    id: 3,
                    name: '高金郎',
                    image: leftImg3,
                    info: [
                        '1940 年出生，雲林縣人',
                        '當兵時和友人討論電影《叛艦喋血記》的劇情，情治單位認定是預謀叛亂，判刑 12 年',
                        '服刑期間參與「泰源監獄叛亂案」，好友鄭金河等五人全遭槍決',
                    ],
                },
                {
                    id: 4,
                    name: '周賢農',
                    image: leftImg4,
                    info: [
                        '1933 年出生，新竹市人',
                        '初中時應導師的邀請，加入「社會主義青年大同盟」，情治人員認定是參與叛亂組織逮捕',
                        '因未滿 18 歲，僅判刑 7 年，之後因刑期分數不及格，再送小琉球管訓 1 年 5 個月',
                    ],
                },
            ],
        }
    },
}
</script>
