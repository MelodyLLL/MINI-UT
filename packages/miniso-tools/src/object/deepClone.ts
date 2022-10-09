/**
 * @description 深拷贝
 * @param source 要拷贝的对象
 * @returns 返回值
 */
const deepClone = (source: any) => {
  if (typeof source !== 'object' || source === null) {
    return source // 如果不是对象的话直接返回
  }
  const target: any = Array.isArray(source) ? [] : {} // 数组兼容
  for (const [key, value] of Object.entries(source)) {
    if (Reflect.has(source, key)) {
      if (typeof value === 'object') {
        target[key] = deepClone(value)
      } else {
        target[key] = value
      }
    }
  }
  return target
}

export default deepClone
