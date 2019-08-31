---
title: Collapse - 手风琴
---
# 手风琴

## 设置默认开启前两个

#### 预览
<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>

#### 代码
``` 
data() {
    return {
        selectedTab: ['1', '2']
    }
}
```
```html
<g-collapse :selected.sync="selectedTab">
    <g-collapse-item title="标题1" name="1">我是内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">我是内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">我是内容3</g-collapse-item>
</g-collapse>
```
## 设置仅能开启一个（single）

#### 预览
<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

#### 代码
``` 
data() {
    return {
        selectedTab: ['1']
    }
}
```
```html
<g-collapse :selected.sync="selectedTab" single>
    <g-collapse-item title="标题1" name="1">我是内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">我是内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">我是内容3</g-collapse-item>
</g-collapse>
```