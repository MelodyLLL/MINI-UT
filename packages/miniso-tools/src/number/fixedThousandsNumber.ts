/**
 * @description 数字转千分位
 * @param {Number} num 被转换的数字
 * @param {Number} fixed 浮点数精度
 * @returns {String} 返回值
 */
const fixedThousandsNumber = (num: number | string, fixed = 0): string => {
  num = num.toString()
  // 过滤参数
  if (Object.is(parseFloat(num), NaN)) {
    console.error('请检查入参。例如：fixedThousandsNumber(10000.1234, 2)')
    return ''
  }
  // 参数预处理
  const numString: string = parseFloat(num).toFixed(fixed)
  // 提取整数部分和浮点数部分
  const [intNum, floatNum] = numString.split('.')
  // 判断是否需要进行千分位处理
  if (intNum.length <= 3) {
    return numString
  }
  // 千分位转换
  const temp = []
  for (let end = intNum.length; end >= 0; end -= 3) {
    const start = end - 3 > 0 ? end - 3 : 0
    const el = intNum.slice(start, end)
    if (el) {
      temp.push(el)
    }
  }
  // 判断是否需要保留浮点数
  const result = floatNum ? `${temp.reverse().join()}.${floatNum}` : temp.reverse().join()
  return result
}

export default fixedThousandsNumber
