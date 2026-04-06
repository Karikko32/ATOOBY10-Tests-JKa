import { expect } from 'chai'
import isArguments from '../src/isArguments.js'

describe('isArguments()', () => {

  it('palauttaa true aidolle arguments-objektille', () => {
    function testFn() {
      return isArguments(arguments)
    }
    expect(testFn()).to.equal(true)
  })

  it('palauttaa false tavalliselle taulukolle', () => {
    expect(isArguments([1, 2, 3])).to.equal(false)
  })

  it('palauttaa false tavalliselle objektille', () => {
    expect(isArguments({ a: 1 })).to.equal(false)
  })

  it('palauttaa false null-arvolle', () => {
    expect(isArguments(null)).to.equal(false)
  })

  it('palauttaa false undefined-arvolle', () => {
    expect(isArguments(undefined)).to.equal(false)
  })

  it('palauttaa false merkkijonolle', () => {
    expect(isArguments("hello")).to.equal(false)
  })

  it('palauttaa false numerolle', () => {
    expect(isArguments(123)).to.equal(false)
  })

  it('palauttaa false arrow-funktion "arguments"-simuloinnille', () => {
    const fakeArgs = { length: 2, 0: 'a', 1: 'b' }
    expect(isArguments(fakeArgs)).to.equal(false)
  })

})
