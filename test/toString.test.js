import { expect } from 'chai'
import toString from '../src/toString.js'

describe('toString()', () => {

  it('muuntaa null-arvon merkkijonoksi "null"', () => {
    expect(toString(null)).to.equal("null")
  })

  it('muuntaa undefined-arvon merkkijonoksi "undefined"', () => {
    expect(toString(undefined)).to.equal("undefined")
  })

  it('muuntaa symbolin merkkijonoksi', () => {
    const sym = Symbol("x")
    expect(toString(sym)).to.equal(sym.toString())
  })

  it('säilyttää -0 arvon merkkijonona "-0"', () => {
    expect(toString(-0)).to.equal("-0")
  })

  it('muuntaa numerot merkkijonoksi', () => {
    expect(toString(5)).to.equal("5")
    expect(toString(123.45)).to.equal("123.45")
  })

  it('muuntaa boolean-arvot merkkijonoksi', () => {
    expect(toString(true)).to.equal("true")
    expect(toString(false)).to.equal("false")
  })

  it('palauttaa merkkijonon sellaisenaan', () => {
    expect(toString("abc")).to.equal("abc")
  })

  it('muuntaa taulukon merkkijonoksi', () => {
    expect(toString([1, 2, 3])).to.equal("1,2,3")
  })

  it('muuntaa objektin merkkijonoksi', () => {
    expect(toString({ a: 1 })).to.equal("[object Object]")
  })

})
