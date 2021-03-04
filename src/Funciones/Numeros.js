/** Very similar to python's
 * @param {Number} min minimun possible value (inclusive)
 * @param {Number} max maximum possible value (exclusive)
 * @returns {Number} random integer between min and max
*/
export const randInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }