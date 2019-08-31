<template>
    <div style="padding-top: 16px;">
        <g-tabs :selected="selected">
            <g-tabs-head>
                <g-tabs-item name="1">Hello</g-tabs-item>
                <g-tabs-item name="2">你好</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">我是英文</g-tabs-pane>
                <g-tabs-pane name="2">我是中文</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>
<script>
    import GTabs from '../../../src/tabs'
    import GTabsBody from '../../../src/tabs-body'
    import GTabsHead from '../../../src/tabs-head'
    import GTabsItem from '../../../src/tabs-item'
    import GTabsPane from '../../../src/tabs-pane'
    export default {
        components: {GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane},
        data () {
            return {
                selected: '1'
            }
        }
    }
</script>