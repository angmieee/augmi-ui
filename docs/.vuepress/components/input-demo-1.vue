<template>
    <div style="padding-top: 16px;">
        <g-input value="中文"></g-input>
        <g-input value="中文" disabled></g-input>
        <g-input value="中文" readonly></g-input>
        <g-input value="中文" error="错误"></g-input>

    </div>
</template>
<script>
    import GInput from '../../../src/input'
    export default {
        components: {GInput},
        data () {
            return {
                selected: '1'
            }
        }
    }
</script>