/**
 * @description 判断空对象
 * @param source 目标对象
 * @returns {Boolean}
 */
const isEmpty = (source: any): boolean => {
  if (typeof source === "object") {
    if (source === null) {
      return true;
    } else if (Array.isArray(source)) {
      return source.length === 0;
    } else {
      return Object.keys(source).length === 0;
    }
  } else if (typeof source === "string" || typeof source === "undefined") {
    return !source;
  }
  return false;
};

export default isEmpty;
