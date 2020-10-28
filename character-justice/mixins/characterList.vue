<script>
import hover1 from '~/static/images/1_1.jpg'
import hover2 from '~/static/images/2_1.jpg'
import hover3 from '~/static/images/3_1.jpg'
import hover4 from '~/static/images/4_1.jpg'
import normal1 from '~/static/images/1_2.jpg'
import normal2 from '~/static/images/2_2.jpg'
import normal3 from '~/static/images/3_2.jpg'
import normal4 from '~/static/images/4_2.jpg'

import mobile1 from '~/static/images/1_4_mobile.jpg'
import pad1 from '~/static/images/1_4_pad.jpg'
import mobile2 from '~/static/images/2_4_mobile.jpg'
import pad2 from '~/static/images/2_4_pad.jpg'
import mobile3 from '~/static/images/3_4_mobile.jpg'
import pad3 from '~/static/images/3_4_pad.jpg'
import mobile4 from '~/static/images/4_4_mobile.jpg'
import pad4 from '~/static/images/4_4_pad.jpg'

export default {
    data() {
        return {
            characterList: [
                {
                    id: 1,
                    name: '張常美',
                    info: { content: '目送獄友走向行刑場', position: 76.29 },
                    image: {
                        normal: normal1,
                        hover: hover1,
                        mobile: mobile1,
                        pad: pad1,
                    },
                    url: '#1',
                    status: false,
                    smallPosition: {
                        top: '-180%',
                    },
                },
                {
                    id: 2,
                    name: '劉秀明',
                    info: { content: '獄友被刑求到精神失常', position: 55.55 },
                    image: {
                        normal: normal2,
                        hover: hover2,
                        mobile: mobile2,
                        pad: pad2,
                    },
                    url: '#2',
                    status: false,
                    smallPosition: {
                        top: '-170%',
                    },
                },
                {
                    id: 3,
                    name: '高金郎',
                    info: { content: '討論電影劇情就被抓', position: 76.29 },
                    image: {
                        normal: normal3,
                        hover: hover3,
                        mobile: mobile3,
                        pad: pad3,
                    },
                    url: '#3',
                    status: false,
                    smallPosition: {
                        top: '-150%',
                    },
                },

                {
                    id: 4,
                    name: '周賢農',
                    info: { content: '未滿18歲就入獄', position: 61.48 },
                    image: {
                        normal: normal4,
                        hover: hover4,
                        mobile: mobile4,
                        pad: pad4,
                    },
                    url: '#4',
                    status: false,
                    smallPosition: {
                        top: '-190%',
                    },
                },
            ],
        }
    },
}
</script>
