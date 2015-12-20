/* global describe it */
var assert = require('assert')
var tonal = require('..')

describe('tonal', function () {
  it('has notation', function () {
    assert(tonal.notation)
    assert(tonal.note)
    assert(tonal.note.regex)
    assert(tonal.note.parse)
    assert(tonal.note.str)
    assert(tonal.interval.regex)
    assert(tonal.interval.parse)
    assert(tonal.interval.str)
    assert(tonal.pitch.parse)
    assert(tonal.pitch.str)
    assert(tonal.roman.regex)
    assert(tonal.roman.parse)
  })
  it('has midi', function () {
    assert(tonal.midi)
    assert(tonal.midi.freq)
  })

  it('has transpose and interval', function () {
    assert(tonal.transpose)
    assert(tonal.note.transpose)
    assert(tonal.note.interval)
  })

  it('has gamut', function () {
    assert(tonal.gamut)
    assert(tonal.harmonizer)
  })

  it('has dictionary', function () {
    assert(tonal.dictionary)
  })
})