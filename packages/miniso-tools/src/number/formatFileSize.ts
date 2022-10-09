/**
 * @description 格式化文件大小
 * @param size 文件大小
 * @returns 返回 10KB, 10MB, 10GB
 */
const formatFileFize = (size: number, fixed = 2): string => {
  if (size < 1024) {
    return `${size}B`
  } else if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(fixed)}KB`
  } else if (size < 1024 * 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(fixed)}MB`
  } else {
    return `${(size / (1024 * 1024 * 1024)).toFixed(fixed)}GB`
  }
}

export default formatFileFize
