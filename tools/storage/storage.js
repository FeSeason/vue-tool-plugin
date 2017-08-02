/**
 * Created by Season on 17/8/2.
 * QQ: 741876294
 */

class Storage {
  constructor (type) {
    if (type === 'session') {
      this.store = window.sessionStorage
    } else if (type === 'local') {
      this.store = window.localStorage
    }
  }
  set (key, value) {
    if (value instanceof Object) {
      value = JSON.string(value)
    }
    this.store.setItem(key, value)
    return this
  }
  get (key) {
    if (key instanceof Object) {
      throw new Error('key值不可以为一个对象')
    } else {
      return this.store.getItem(key)
    }
  }
  remove (key) {
    if (key instanceof Object) {
      throw new Error('key值不可以为一个对象')
    } else {
      this.store.removeItem(key)
      return key + '：删除成功'
    }
  }
  removeAll () {
    this.store.clear()
  }
}

export const sessionStorage = new Storage('session')
export const localStorage = new Storage('local')
