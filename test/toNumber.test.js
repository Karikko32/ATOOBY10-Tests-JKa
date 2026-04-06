import { expect } from 'chai'
import toNumber from '../src/toNumber.js'

describe('toNumber()', () => {

  it('palauttaa numeron sellaisenaan', () => {
    expect(toNumber(5)).to.equal(5)
    expect(toNumber(-3)).to.equal(-3)
  })

  it('muuntaa trimattavan merkkijonon numeroksi', () => {
    expect(toNumber("  7  ")).to.equal(7)
  })

  it('muuntaa binäärimerkkijonon numeroksi', () => {
    expect(toNumber("0b101")).to.equal(5)
  })

  it('muuntaa oktaalimerkkijonon numeroksi', () => {
    expect(toNumber("0o10")).to.equal(8)
  })

  it('muuntaa heksamerkkijonon numeroksi', () => {
    expect(toNumber("0xFF")).to.equal(255)
  })

  it('palauttaa NaN virheellisestä signed-hex -merkkijonosta', () => {
    expect(Number.isNaN(toNumber("-0x1F"))).to.equal(true)
  })

  it('palauttaa NaN symboleille', () => {
    expect(Number.isNaN(toNumber(Symbol()))).to.equal(true)
  })

  it('muuntaa objektin valueOf-metodin avulla', () => {
    const obj = { valueOf() { return 3 } }
    expect(toNumber(obj)).to.equal(3)
  })

  it('muuntaa objektin toString-metodin avulla', () => {
    const obj = { toString() { return "4" } }
    expect(toNumber(obj)).to.equal(4)
  })

  it('muuntaa null-arvon nollaksi', () => {
    expect(toNumber(null)).to.equal(0)
  })

  it('palauttaa NaN undefined-arvosta', () => {
    expect(Number.isNaN(toNumber(undefined))).to.equal(true)
  })

})
