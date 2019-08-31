---
title: Tabs - 标签页
---
# 标签页

## 使用方法

#### 预览

<ClientOnly>
<tabs-demo-1></tabs-demo-1>
</ClientOnly>

#### 代码

```js
data:{
  selected: '1'
}
```

```html
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
```