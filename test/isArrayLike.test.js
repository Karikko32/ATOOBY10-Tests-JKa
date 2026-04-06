import { expect } from 'chai'
import isArrayLike from '../src/isArrayLike.js'

describe('isArrayLike()', () => {

  it('palauttaa true taulukolle', () => {
    expect(isArrayLike([1, 2, 3])).to.equal(true)
  })

  it('palauttaa true merkkijonolle', () => {
    expect(isArrayLike('abc')).to.equal(true)
  })

  it('palauttaa true objektilla, jolla on length', () => {
    expect(isArrayLike({ length: 5 })).to.equal(true)
  })

  it('palauttaa false funktiolle', () => {
    expect(isArrayLike(() => {})).to.equal(false)
  })

  it('palauttaa false numerolle', () => {
    expect(isArrayLike(123)).to.equal(false)
  })

  it('palauttaa false null-arvolle', () => {
    expect(isArrayLike(null)).to.equal(false)
  })

  it('palauttaa false undefined-arvolle', () => {
    expect(isArrayLike(undefined)).to.equal(false)
  })

  it('palauttaa false negatiiviselle length-arvolle', () => {
    expect(isArrayLike({ length: -1 })).to.equal(false)
  })

  it('palauttaa false liian suurelle length-arvolle', () => {
    expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER + 1 })).to.equal(false)
  })
})
