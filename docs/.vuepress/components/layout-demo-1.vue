<template>
    <div style="padding-top: 16px;">
        <g-layout style="color: white;">
            <g-header style="height: 50px; background:deepskyblue;">
                header
            </g-header>
            <g-content style="height: 100px; background:lightskyblue;">
                content
            </g-content>
            <g-footer style="height: 50px; background:deepskyblue;">
                footer
            </g-footer>
        </g-layout>
    </div>
</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>
<script>
    import GLayout from '../../../src/layout'
    import GHeader from '../../../src/header'
    import GFooter from '../../../src/footer'
    import GContent from '../../../src/content'
    import GSider from '../../../src/sider'
    export default {
        components: {GLayout, GHeader, GFooter, GContent, GSider}
    }
</script>