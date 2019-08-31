<template>
    <div style="padding-top: 16px;">
        <g-button>默认按钮</g-button>
        <g-button icon="settings">设置</g-button>
        <g-button icon="settings" icon-position="right">设置右</g-button>
        <g-button :loading="true">加载中</g-button>
        <g-button disabled>点击后</g-button>
        <g-button icon="download" icon-position="right">下载</g-button>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    export default {
        components: {
            'g-button': Button
        }
    }
</script>