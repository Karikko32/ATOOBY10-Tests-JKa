import { expect } from 'chai'
import drop from '../src/drop.js'

describe('drop()', () => {

  it('pudottaa yhden alkion oletuksena', () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3])
  })

  it('pudottaa n ensimmäistä alkiota', () => {
    expect(drop([1, 2, 3], 2)).to.deep.equal([3])
  })

  it('palauttaa tyhjän taulukon jos n on suurempi kuin taulukon pituus', () => {
    expect(drop([1, 2, 3], 5)).to.deep.equal([])
  })

  it('palauttaa alkuperäisen taulukon jos n = 0', () => {
    expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3])
  })

  it('käsittelee negatiivisen n-arvon kuin n = 0', () => {
    expect(drop([1, 2, 3], -5)).to.deep.equal([1, 2, 3])
  })

  it('pyöristää desimaalisen n-arvon kohti nollaa', () => {
    expect(drop([1, 2, 3, 4], 1.9)).to.deep.equal([2, 3, 4])
    expect(drop([1, 2, 3, 4], -1.9)).to.deep.equal([1, 2, 3, 4])
  })

  it('palauttaa tyhjän taulukon null-arvosta', () => {
    expect(drop(null, 2)).to.deep.equal([])
  })

  it('palauttaa tyhjän taulukon undefined-arvosta', () => {
    expect(drop(undefined, 2)).to.deep.equal([])
  })

  it('palauttaa tyhjän taulukon tyhjästä syötteestä', () => {
    expect(drop([], 2)).to.deep.equal([])
  })

})
