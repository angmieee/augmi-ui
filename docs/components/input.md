---
title: Input-输入框
---
# 输入框
## 简单用法
#### 预览
<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

#### 代码
```html
<g-input value="中文"></g-input>
<g-input value="中文" disabled></g-input>
<g-input value="中文" readonly></g-input>
<g-input value="中文" error="错误"></g-input>
```

## 双向绑定
#### 预览
<ClientOnly>
  <input-demo-2></input-demo-2>
</ClientOnly>

#### 代码
```html
data:{
    value: 'Hello'
}
<g-input v-model="value"></g-input>
<div>
    value: {{value}}
</div>
```