<template>
    <div style="padding-top: 16px;">
        <div>
            <g-button @click="onClickButton">上方弹出</g-button>
        </div>

    </div>
</template>
<style>
    .wrapper {
        z-index: 30 !important;
    }
</style>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>
<script>
    import plugin from '../../../src/plugin'
    import GButton from '../../../src/button'
    import Vue from 'vue'
    Vue.use(plugin)
    export default {
        components: {GButton},
        methods: {
            onClickButton () {
                this.$toast('<strong style="color:red;">加粗的提示</strong>', {
                    enableHtml: true
                })
            }
        },
    }
</script>