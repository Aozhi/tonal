'use strict'

var isValid = require('./isValid')

/**
 * Get the all the modes of a binary scale.
 *
 * The modes are always ordered by number of steps so the first mode will be
 * always the cannonical mode (the mode that has the greatest possible number
 * of its larger steps at the beginning)
 *
 * @param {String} binary - the binary number
 * @return {Array} an array of binary scales ordered by steps length
 *
 * @example
 * // Exactly same result for two modes
 * modes('101011010101') // => [ '101010110101', '101011010101', '101011010110', ...]
 * modes('101010110101') // => [ '101010110101', '101011010101', '101011010110', ...]
 */
function modes (binary) {
  if (!isValid) return null
  var modes = Array.apply(null, Array(12))
    .map(function (a, i) { return rotate(binary, i) })
    .filter(function (binary) { return binary[0] === '1' }).sort()
  return modes
}

/*
 * rotates a string of 12 characters length (a scale binary number)
 */
function rotate (str, positions) {
  return str.slice(positions, 12) + str.slice(0, positions)
}

module.exports = modes