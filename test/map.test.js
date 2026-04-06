import { expect } from 'chai'
import map from '../src/map.js'

describe('map()', () => {

  it('käsittelee perusmuunnoksen oikein', () => {
    const result = map([1, 2, 3], x => x * 2)
    expect(result).to.deep.equal([2, 4, 6])
  })

  it('välittää iterateelle oikeat argumentit (value, index, array)', () => {
    const values = []
    const indexes = []
    const arrays = []

    map([10, 20], (value, index, array) => {
      values.push(value)
      indexes.push(index)
      arrays.push(array)
    })

    expect(values).to.deep.equal([10, 20])
    expect(indexes).to.deep.equal([0, 1])
    expect(arrays[0]).to.deep.equal([10, 20])
    expect(arrays[1]).to.deep.equal([10, 20])
  })

  it('palauttaa tyhjän taulukon tyhjästä syötteestä', () => {
    expect(map([], x => x)).to.deep.equal([])
  })

  it('iteratee voi muuttaa tyyppiä', () => {
    const result = map([1, 2], x => String(x))
    expect(result).to.deep.equal(["1", "2"])
  })

  it('iteratee voi käyttää indeksiä', () => {
    const result = map([10, 20], (v, i) => v + i)
    expect(result).to.deep.equal([10, 21])
  })

  it('iteratee voi käyttää koko arrayta', () => {
    const result = map([1, 2], (v, i, arr) => arr.length)
    expect(result).to.deep.equal([2, 2])
  })

})
