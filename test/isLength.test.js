import { expect } from 'chai'
import isLength from '../src/isLength.js'

describe('isLength()', () => {

  it('palauttaa true validoille pituuksille', () => {
    expect(isLength(0)).to.equal(true)
    expect(isLength(1)).to.equal(true)
    expect(isLength(100)).to.equal(true)
    expect(isLength(9007199254740991)).to.equal(true) // MAX_SAFE_INTEGER
  })

  it('palauttaa false negatiivisille arvoille', () => {
    expect(isLength(-1)).to.equal(false)
    expect(isLength(-100)).to.equal(false)
  })

  it('palauttaa false desimaaleille', () => {
    expect(isLength(1.1)).to.equal(false)
    expect(isLength(3.14)).to.equal(false)
  })

  it('palauttaa false arvoille yli MAX_SAFE_INTEGER', () => {
    expect(isLength(9007199254740992)).to.equal(false)
  })

  it('palauttaa false ei-numeerisille arvoille', () => {
    expect(isLength("3")).to.equal(false)
    expect(isLength(true)).to.equal(false)
    expect(isLength(false)).to.equal(false)
    expect(isLength(null)).to.equal(false)
    expect(isLength(undefined)).to.equal(false)
    expect(isLength({})).to.equal(false)
    expect(isLength([])).to.equal(false)
    expect(isLength(Symbol())).to.equal(false)
  })

  it('palauttaa false Infinity-arvoille', () => {
    expect(isLength(Infinity)).to.equal(false)
    expect(isLength(-Infinity)).to.equal(false)
  })

  it('palauttaa false Number.MIN_VALUE-arvosta', () => {
    expect(isLength(Number.MIN_VALUE)).to.equal(false)
  })

})
