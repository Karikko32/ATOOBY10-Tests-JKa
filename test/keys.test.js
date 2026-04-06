import { expect } from 'chai'
import keys from '../src/keys.js'

describe('keys()', () => {

  it('palauttaa objektin omat enumerable-avaimet', () => {
    const obj = { a: 1, b: 2 }
    expect(keys(obj)).to.deep.equal(["a", "b"])
  })

  it('palauttaa taulukon indeksit avaimina', () => {
    expect(keys([10, 20])).to.deep.equal(["0", "1"])
  })

  it('palauttaa merkkijonon indeksit avaimina', () => {
    expect(keys("abc")).to.deep.equal(["0", "1", "2"])
  })

  it('palauttaa tyhjän taulukon numeroarvoista', () => {
    expect(keys(123)).to.deep.equal([])
  })

  it('palauttaa tyhjän taulukon boolean-arvoista', () => {
    expect(keys(true)).to.deep.equal([])
    expect(keys(false)).to.deep.equal([])
  })

})
