<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {
            workflowList: [
                {
                    id: 0,
                    name: '初步查詢',
                    icon: require('@/static/images/workflow/workflow_1.png'),
                    detail: '依顧客心中畫面舉凡任何想法，<br/>團隊將有專人紀錄並提供回饋。',
                },
                {
                    id: 1,
                    name: '現場勘查',
                    icon: require('@/static/images/workflow/workflow_2.png'),
                    detail: '',
                },
                {
                    id: 2,
                    name: '報價簽約',
                    icon: require('@/static/images/workflow/workflow_3.png'),
                    detail: '',
                },
                {
                    id: 3,
                    name: '設計洽談',
                    icon: require('@/static/images/workflow/workflow_4.png'),
                    detail: '',
                },
                {
                    id: 4,
                    name: '校對製作',
                    icon: require('@/static/images/workflow/workflow_5.png'),
                    detail: '',
                },
                {
                    id: 5,
                    name: '施工驗收',
                    icon: require('@/static/images/workflow/workflow_6.png'),
                    detail: '',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>
