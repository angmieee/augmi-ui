<template>
    <div style="padding-top: 16px;">
        <g-row class="demoRow" gutter="10">
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8" offset="8">
                <div class="demoCol">8</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="6" offset="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6" offset="6">
                <div class="demoCol">6</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4" offset="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4" offset="8">
                <div class="demoCol">4</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
                <div class="demoCol">2</div>
            </g-col>
        </g-row>
    </div>
</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
    .demoRow{
        margin: 10px 0;
    }
    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: grey;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
    import GRow from '../../../src/row'
    import GCol from '../../../src/col'
    export default {
        components: {GRow, GCol}
    }
</script>