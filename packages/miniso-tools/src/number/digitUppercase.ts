/**
 * @description 小写数字转大写金额
 * @param num 金额数字 例如：1000
 * @returns 转换后的大写金额 例如：壹仟
 */
const digitUppercase = (num: number): string => {
  if (isNaN(num)) {
    return ''
  }
  let strPrefix = ''
  if (num < 0) {
    strPrefix = '(负)'
  }
  num = Math.abs(num)
  if (num >= 1000000000000) {
    return '无效数值！'
  }
  let strOutput = ''
  let strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分'
  const strCapDgt = '零壹贰叁肆伍陆柒捌玖'
  let numStr = num.toString()
  numStr += '00'
  const intPos = numStr.indexOf('.')
  if (intPos >= 0) {
    numStr = numStr.substring(0, intPos) + numStr.substr(intPos + 1, 2)
  }
  strUnit = strUnit.substr(strUnit.length - numStr.length)
  for (let i = 0; i < numStr.length; i++) {
    strOutput += strCapDgt.substr(Number(numStr.substr(i, 1)), 1) + strUnit.substr(i, 1)
  }
  return (
    strPrefix +
    strOutput
      .replace(/零角零分$/, '整')
      .replace(/零[仟佰拾]/g, '零')
      .replace(/零{2,}/g, '零')
      .replace(/零([亿|万])/g, '$1')
      .replace(/零+元/, '元')
      .replace(/亿零{0,3}万/, '亿')
      .replace(/^元/, '零元')
  )
}

export default digitUppercase
