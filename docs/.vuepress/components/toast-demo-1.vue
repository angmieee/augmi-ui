<template>
    <div style="padding-top: 16px;">
        <div>
            <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
            <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
            <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
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
        components: {GButton}
    }
</script>