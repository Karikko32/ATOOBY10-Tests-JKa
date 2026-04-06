import { expect } from 'chai'
import reduce from '../src/reduce.js'

describe('reduce()', () => {

  it('laskee yhteen taulukon arvot kun accumulator annetaan', () => {
    const result = reduce([1, 2, 3], (acc, val) => acc + val, 0)
    expect(result).to.equal(6)
  })

  it('käyttää ensimmäistä arvoa accumulatorina jos sitä ei anneta', () => {
    const result = reduce([1, 2, 3], (acc, val) => acc + val)
    // accumulator = 1 → 1+2+3 = 6
    expect(result).to.equal(6)
  })

  it('välittää iterateelle oikeat argumentit (acc, value, index, collection)', () => {
    const args = []

    reduce([10, 20], (acc, val, index, array) => {
      args.push([acc, val, index, array])
      return acc + val
    }, 0)

    expect(args[0][0]).to.equal(0)      // accumulator
    expect(args[0][1]).to.equal(10)     // value
    expect(args[0][2]).to.equal(0)      // index
    expect(args[0][3]).to.deep.equal([10, 20]) // collection
  })

  it('toimii myös objekteille', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const result = reduce(obj, (acc, val) => acc + val, 0)
    expect(result).to.equal(6)
  })

  it('käyttää objektin ensimmäistä arvoa accumulatorina jos sitä ei anneta', () => {
    const obj = { a: 5, b: 10, c: 20 }
    const result = reduce(obj, (acc, val) => acc + val)
    // accumulator = 5 → 5+10+20 = 35
    expect(result).to.equal(35)
  })

  it('palauttaa accumulatorin jos collection on tyhjä ja accumulator annetaan', () => {
    const result = reduce([], (acc, val) => acc + val, 100)
    expect(result).to.equal(100)
  })

})
