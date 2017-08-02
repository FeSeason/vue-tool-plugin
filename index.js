/**
 * Created by Season on 17/7/30.
 * QQ: 741876294
 */
import LoadingComponent from './src/loadingComponent'
import { localStorage, sessionStorage } from './tools'
let $vm

const plugin = {
  install (vue, option) {
    const Loading = vue.extend(LoadingComponent)
    if (!$vm) {
      $vm = new Loading({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    vue.$loading = {
      show (option) {
        $vm.show = true
        option ? $vm.text = option : ''
      },
      hide () {
        $vm.show = false
      }
    }
    // 空对象判断
    vue.prototype.isEmptyObject = function (obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false
        }
      }
      return true
    }
    // url 参数提取
    vue.prototype.getParam = function (param) {
      var reg = new RegExp('(^|\\?|&)' + param + '=([^&]*)(\\s|&|$)', 'i')
      if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, ''))
      return ''
    }
    // 时间格式化
    vue.prototype.dataFormat = function (time, format) {
      var t = new Date(time)
      var tf = function (i) {
        return (i < 10 ? '0' : '') + i
      }
      return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
          case 'yyyy':
            return tf(t.getFullYear())
          case 'MM':
            return tf(t.getMonth() + 1)
          case 'mm':
            return tf(t.getMinutes())
          case 'dd':
            return tf(t.getDate())
          case 'HH':
            return tf(t.getHours())
          case 'ss':
            return tf(t.getSeconds())
        }
      })
    }
    // 数组排重
    vue.prototype.removeRepeatArr = function (ar) {
      var ret = []
      for (var i = 0, j = ar.length; i < j; i++) {
        if (ret.indexOf(ar[i]) === -1) {
          ret.push(ar[i])
        }
      }
      return ret
    }
    // 时间日期过滤器
    vue.filter('dateFormat', function (value) {
      return value ? vue.prototype.dataFormat(value, 'yyyy-MM-dd HH:mm') : ''
    })
    vue.mixin({
      created () {
        this.$loading = vue.$loading
      }
    })
    // 加入storage对象
    vue.prototype.$localStorage = localStorage
    vue.prototype.$sessionStorage = sessionStorage
  }
}

export default plugin
