import { expect } from 'chai'
import eq from '../src/eq.js'

describe('eq()', () => {

  it('palauttaa true kun arvot ovat samat', () => {
    expect(eq(1, 1)).to.equal(true)
  })

  it('palauttaa false kun arvot ovat eri', () => {
    expect(eq(1, 2)).to.equal(false)
  })

  it('käsittelee NaN-arvot oikein (SameValueZero)', () => {
    expect(eq(NaN, NaN)).to.equal(true)
  })

  it('käsittelee +0 ja -0 samana arvona', () => {
    expect(eq(+0, -0)).to.equal(true)
  })

  it('palauttaa true kun objektiviittaus on sama', () => {
    const obj = { a: 1 }
    expect(eq(obj, obj)).to.equal(true)
  })

  it('palauttaa false eri objektiviittauksille', () => {
    expect(eq({ a: 1 }, { a: 1 })).to.equal(false)
  })

  it('käsittelee null-arvot', () => {
    expect(eq(null, null)).to.equal(true)
  })

  it('käsittelee undefined-arvot', () => {
    expect(eq(undefined, undefined)).to.equal(true)
  })

  it('palauttaa true null vs undefined (löysä vertailu)', () => {
    expect(eq(null, undefined)).to.equal(true)
  })

  it('palauttaa true eri tyyppisille arvoille, jos löysä vertailu palauttaa true', () => {
    expect(eq('1', 1)).to.equal(true)
  })

  it('käsittelee boolean-arvot', () => {
    expect(eq(true, true)).to.equal(true)
    expect(eq(true, false)).to.equal(false)
  })
})
