---
title: Toast - 弹出框
---

# Toast
## this.$toast
#### 预览

<ClientOnly>
  <toast-demo-1></toast-demo-1>
</ClientOnly>

#### 代码
```html
<style>
    .wrapper {
        z-index: 30;
    }
</style>
<g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```
## 设置关闭按钮
#### 预览
<ClientOnly>
  <toast-demo-2></toast-demo-2>
</ClientOnly>

#### 代码
```html
<style>
    .wrapper {
        z-index: 30;
    }
</style>
<div>
    <g-button @click="onClickButton">上方弹出</g-button>
</div>
methods: {
    onClickButton () {
        this.$toast('你知道我在等你吗？', {
            closeButton: {
                text: '知道了',
                callback: () => {
                    console.log('他说知道了')
                }
            }
        })
    }
}
```

## 支持 HTML
#### 预览
<ClientOnly>
  <toast-demo-3></toast-demo-3>
</ClientOnly>

#### 代码
```html
<style>
    .wrapper {
        z-index: 30;
    }
</style>
<div>
    <g-button @click="onClickButton">上方弹出</g-button>
</div>
methods: {
    onClickButton () {
        this.$toast('你知道我在等你吗？', {
            closeButton: {
                text: '知道了',
                callback: () => {
                    console.log('他说知道了')
                }
            }
        })
    }
}
```