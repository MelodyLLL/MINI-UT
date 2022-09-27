/**
 * @description 判断是否NAN
 * @param value 目标对象
 * @returns {Boolean}
 */
function testNaN(value) {
  return typeof value === "number" && isNaN(value);
}

export default testNaN;
