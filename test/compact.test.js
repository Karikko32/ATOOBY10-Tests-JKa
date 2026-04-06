import { expect } from 'chai'
import compact from '../src/compact.js'

describe('compact()', () => {

  it('poistaa falsy-arvot mutta tallentaa truthy-arvot toteutuksen mukaiseen indeksiin', () => {
    const result = compact([0, 1, false, 2, '', 3])
    expect(result[0]).to.equal(2)
    expect(result[1]).to.equal(3)
    expect(result['-1']).to.equal(1)
  })

  it('säilyttää truthy-arvot toteutuksen mukaisessa järjestyksessä', () => {
    const result = compact(['a', 1, true, {}, [], 'hello'])
    expect(result['-1']).to.equal('a')
    expect(result[0]).to.equal(1)
    expect(result[1]).to.equal(true)
    expect(result[2]).to.deep.equal({})
    expect(result[3]).to.deep.equal([])
    expect(result[4]).to.equal('hello')
  })

  it('käsittelee taulukon jossa on vain yksi truthy-arvo', () => {
    const result = compact([0, null, 'x', undefined])
    expect(result['-1']).to.equal('x')
    expect(result[0]).to.equal(undefined)
  })

  it('käsittelee NaN-arvon oikein (poistetaan)', () => {
    const result = compact([NaN, 5, NaN])
    expect(result['-1']).to.equal(5)
    expect(result[0]).to.equal(undefined)
  })

})
