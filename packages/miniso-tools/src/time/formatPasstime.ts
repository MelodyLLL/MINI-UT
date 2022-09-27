import formatFixedDate from './formatFixedDate'
/**
 * @description 格式化${startTime}距现在的已过时间
 * @param  {Date} startTime 开始时间对象或者时间戳
 * @param  {Date} endTime 结束时间对象或者时间戳
 * @returns {String} 例如 '刚刚'，'3分钟前'，'1小时前'
 */
const formatPassTime = (startTime: Date | number = new Date(), endTime: Date | number = new Date()): string => {
  if (typeof startTime !== 'number' && startTime.constructor !== Date) {
    return ''
  } else {
    startTime = new Date(startTime)
  }
  const currentDate = new Date(endTime)
  const time = currentDate.getTime() - startTime.getTime()
  const hour = Math.floor(time / (1000 * 60 * 60))
  const min = Math.floor(time / (1000 * 60))
  const currentYear = currentDate.getFullYear()
  if (min < 1) {
    return '刚刚'
  } else if (min >= 1 && min <= 59) {
    return min + '分钟前'
  } else if (hour >= 1 && hour <= 24) {
    return hour + '小时前'
  } else if (hour > 24 && startTime.getFullYear() === currentYear) {
    return formatFixedDate(startTime, 'MM-dd')
  } else {
    return formatFixedDate(startTime, 'yyyy-MM-dd')
  }
}

export default formatPassTime
