// class
import Ticker from './class/Ticker'

// hooks
import useTicker from './hooks/useTicker'

// object
import isEmpty from './object/isEmpty'
import deepClone from './object/deepClone'
import isNaN from './object/testNaN'

// time
import formatPassTime from './time/formatPasstime'

// number
import digitUppercase from './number/digitUppercase'
import formatFixedDate from './time/formatFixedDate'
import formatFileFize from './number/formatFileSize'

// function
import debounce from './function/debounce'
import throttle from './function/throttle'

export { Ticker, useTicker, isEmpty, isNaN, formatPassTime }
export default {
  Ticker,
  useTicker,
  isEmpty,
  isNaN,
  formatPassTime,
  digitUppercase,
  formatFixedDate,
  formatFileFize,
  debounce,
  throttle,
  deepClone
}
