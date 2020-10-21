<script>
import hover1 from '~/static/images/1_1.jpg'
import hover2 from '~/static/images/2_1.jpg'
import hover3 from '~/static/images/3_1.jpg'
import hover4 from '~/static/images/4_1.jpg'
import normal1 from '~/static/images/1_2.jpg'
import normal2 from '~/static/images/2_2.jpg'
import normal3 from '~/static/images/3_2.jpg'
import normal4 from '~/static/images/4_2.jpg'
export default {
    data() {
        return {
            characterList: [
                {
                    id: 1,
                    name: '張常美',
                    info: { content: '獄友多才多藝', position: 76.29 },
                    image: { normal: normal1, hover: hover1 },
                    url: '#1',
                    status: false,
                    smallPosition: {
                        top: '-80%',
                    },
                },
                {
                    id: 2,
                    name: '高金郎',
                    info: { content: '被刑求到精神失常', position: 55.55 },
                    image: { normal: normal2, hover: hover2 },
                    url: '#2',
                    status: false,
                    smallPosition: {
                        top: '-70%',
                    },
                },
                {
                    id: 3,
                    name: '劉秀明',
                    info: { content: '聊個電影就入獄', position: 76.29 },
                    image: { normal: normal3, hover: hover3 },
                    url: '#3',
                    status: false,
                    smallPosition: {
                        top: '-150%',
                    },
                },
                {
                    id: 4,
                    name: '周賢農',
                    info: { content: '入獄時未滿18歲', position: 61.48 },
                    image: { normal: normal4, hover: hover4 },
                    url: '#4',
                    status: false,
                    smallPosition: {
                        top: '-130%',
                    },
                },
            ],
        }
    },
}
</script>
