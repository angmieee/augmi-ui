<template>
    <svg class="g-icon">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name: "icon",
        props:['name']
    }
</script>

<style lang="scss">
    .g-icon {
        width: 1em;
        height: 1em;
        /*vertical-align: -0.15em;*/
        /*fill: currentColor;*/
        /*overflow: hidden;*/
    }
</style>