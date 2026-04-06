import { expect } from 'chai'
import toFinite from '../src/toFinite.js'

describe('toFinite()', () => {

  it('palauttaa normaalin numeron sellaisenaan', () => {
    expect(toFinite(5)).to.equal(5)
    expect(toFinite(3.14)).to.equal(3.14)
  })

  it('muuntaa merkkijonon numeroksi', () => {
    expect(toFinite("5")).to.equal(5)
  })

  it('muuntaa boolean-arvot numeroksi', () => {
    expect(toFinite(true)).to.equal(1)
    expect(toFinite(false)).to.equal(0)
  })

  it('muuntaa null-arvon nollaksi', () => {
    expect(toFinite(null)).to.equal(0)
  })

  it('palauttaa 0 jos arvo on NaN', () => {
    expect(toFinite(NaN)).to.equal(0)
  })

  it('palauttaa MAX_INTEGER jos arvo on Infinity', () => {
    expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308)
  })

  it('palauttaa -MAX_INTEGER jos arvo on -Infinity', () => {
    expect(toFinite(-Infinity)).to.equal(-1.7976931348623157e+308)
  })

  it('muuntaa objektin valueOf-metodin avulla', () => {
    const obj = { valueOf() { return 7 } }
    expect(toFinite(obj)).to.equal(7)
  })

})
