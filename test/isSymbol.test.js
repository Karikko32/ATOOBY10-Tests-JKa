import { expect } from 'chai'
import isSymbol from '../src/isSymbol.js'

describe('isSymbol()', () => {

  it('palauttaa true symbol-primitivistä', () => {
    expect(isSymbol(Symbol())).to.equal(true)
    expect(isSymbol(Symbol('x'))).to.equal(true)
  })

  it('palauttaa true Symbol-objektista', () => {
    const symObj = Object(Symbol('y'))
    expect(isSymbol(symObj)).to.equal(true)
  })

  it('palauttaa false merkkijonoista', () => {
    expect(isSymbol("abc")).to.equal(false)
  })

  it('palauttaa false numeroista', () => {
    expect(isSymbol(123)).to.equal(false)
  })

  it('palauttaa false boolean-arvoista', () => {
    expect(isSymbol(true)).to.equal(false)
    expect(isSymbol(false)).to.equal(false)
  })

  it('palauttaa false taulukoista', () => {
    expect(isSymbol([])).to.equal(false)
  })

  it('palauttaa false tavallisista objekteista', () => {
    expect(isSymbol({})).to.equal(false)
  })

  it('palauttaa false null-arvosta', () => {
    expect(isSymbol(null)).to.equal(false)
  })

  it('palauttaa false undefined-arvosta', () => {
    expect(isSymbol(undefined)).to.equal(false)
  })

})
