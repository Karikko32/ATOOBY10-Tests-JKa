import { expect } from 'chai'
import toInteger from '../src/toInteger.js'

describe('toInteger()', () => {

  it('muuntaa positiiviset desimaalit kokonaisluvuksi kohti nollaa', () => {
    expect(toInteger(3.7)).to.equal(3)
    expect(toInteger(9.1)).to.equal(9)
  })

  it('muuntaa negatiiviset desimaalit kokonaisluvuksi kohti nollaa', () => {
    expect(toInteger(-3.7)).to.equal(-3)
    expect(toInteger(-9.1)).to.equal(-9)
  })

  it('muuntaa ei-numeeriset arvot nollaksi', () => {
    expect(toInteger(null)).to.equal(0)
    expect(toInteger(undefined)).to.equal(0)
    expect(toInteger('5')).to.equal(5)
    expect(toInteger(true)).to.equal(1)
    expect(toInteger(false)).to.equal(0)
  })

  it('palauttaa MAX_INTEGER jos arvo on Infinity', () => {
    expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308)
  })

  it('palauttaa MIN_INTEGER jos arvo on -Infinity', () => {
    expect(toInteger(-Infinity)).to.equal(-1.7976931348623157e+308)
  })

})
