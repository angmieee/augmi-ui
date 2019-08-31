---
title: 快速上手
---

# 快速上手

CSS 样式要求：使用框架的时候，请在CSS中开启border-box。
    
```html
* {box-sizing: border-box;}
* ::before{box-sizing: border-box;}
* ::after{box-sizing: border-box;}
```
    
IE 8 及以上浏览器会支持这个样式。 
    
## 安装

请参考 [安装](../install/) 章节


## Hello World

```javascript
import {Button} from 'augmi-ui'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button':Button
  }
})
```