### 对开发Vue项目中常用到一些公用方法的封装

>Encapsulation of common methods commonly used in developing Vue projects

* 全局 `loading` 状态控制，
 
```
  this.$loading.show() 显示
  
  this.$loading.hide() 隐藏
```

* 常用方法
  
  － `isEmptyObject`     // 空对象判断
  
  － `getParam`          // url参数提取
  
  － `dataFormat`        // 日期格式化
  
  － `removeRepeatArr`   // 数组排重
  
* 过滤器
 
  － `dateFormat`         // 日期过滤 
