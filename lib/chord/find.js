'use strict'

var pitchSet = require('../collection/pitchSet')
var rotate = require('../collection/rotate')
var binary = require('../binaryScale/fromCollection')
var chords = require('./data/chords')
var names = Object.keys(require('./data/chord-intervals.json'))

/**
 * Get the chord name(s) of a collection of pitches
 *
 * @param {String|Array} pitches - the pitch collection
 * @return {Array} an array of the chord names that has that pitches
 *
 * @example
 * find('G2 E3 C4') // => ['CM/G', 'Em#5/G']
 */
function find (pitches) {
  var set = pitchSet(pitches)
  var inversions = {}
  set.forEach(function (tonic, index) {
    inversions[tonic] = binary(rotate(index, set))
  })
  var results = []
  set.forEach(function (tonic) {
    results = results.concat(names.filter(function (name) {
      return binary(chords[name]) === inversions[tonic]
    }).map(function (name) {
      return tonic + name
    }))
  })
  return results
}

module.exports = find