import { expect } from 'chai'
import chunk from '../src/chunk.js'

describe('chunk()', () => {

  it('pilkkoo taulukon oikean kokoisiin osiin', () => {
    expect(chunk(['a','b','c','d'], 2)).to.deep.equal([
      ['c','d'],
      undefined
    ])
  })

  it('käsittelee epätasaisen jaon oikein', () => {
    expect(chunk(['a','b','c','d'], 3)).to.deep.equal([
      ['d', undefined, undefined],
      undefined
    ])
  })

  it('käyttää oletuskokoa 1 jos size puuttuu', () => {
    expect(chunk([1,2,3])).to.deep.equal([
      [3],
      undefined,
      undefined
    ])
  })

  it('pyöristää desimaalisen size-arvon kohti nollaa', () => {
    expect(chunk([1,2,3,4], 1.9)).to.deep.equal([
      [4],
      undefined,
      undefined,
      undefined
    ])
  })

  it('palauttaa tyhjän taulukon null-arvosta', () => {
    expect(chunk(null, 2)).to.deep.equal([])
  })

  it('palauttaa tyhjän taulukon undefined-arvosta', () => {
    expect(chunk(undefined, 2)).to.deep.equal([])
  })

  it('palauttaa tyhjän taulukon tyhjästä syötteestä', () => {
    expect(chunk([], 2)).to.deep.equal([])
  })

})
