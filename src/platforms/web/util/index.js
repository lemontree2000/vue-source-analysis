/* @flow */

import { warn } from 'core/util/index'

export * from './attrs'
export * from './class'
export * from './element'

/**
 * Query an element selector if it's not an element already.
 */
export function query (el: string | Element): Element {
  // 如果是字符串， 则是选择器
  if (typeof el === 'string') {
    // 通过css选择器获取元素
    const selected = document.querySelector(el)
    // 没有获取到，抛出警告
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      )
      // 并返回自动创建的div
      return document.createElement('div')
    }
    // 获取到了，则返回获取到的元素
    return selected
  } else {
    // el如果不是字符串则返回el
    return el
  }
}
