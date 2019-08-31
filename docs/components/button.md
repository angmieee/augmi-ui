---
title: Button - 按钮
---
# 按钮
## 单个按钮
#### 预览
<ClientOnly>
  <button-demo-1></button-demo-1>
</ClientOnly>

#### 代码

```html
<g-button>默认按钮</g-button>
<g-button icon="settings">设置</g-button>
<g-button icon="settings" icon-position="right">右设置</g-button>
<g-button :loading="true">加载中</g-button>
<g-button disabled>点击后</g-button>
<g-button icon="download" icon-position="right">下载</g-button>
```

## 组合按钮
#### 预览

<ClientOnly>
  <buttonGroup-demo></buttonGroup-demo>
</ClientOnly>


#### 代码

```html
<g-button-group>
    <g-button icon="left" icon-position="left">上一页</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
```