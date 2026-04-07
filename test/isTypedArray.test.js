import { expect } from 'chai'
import isTypedArray from '../src/isTypedArray.js'

describe('isTypedArray()', () => {

  it('palauttaa true kaikille typed array -tyypeille', () => {
    expect(isTypedArray(new Int8Array())).to.equal(true)
    expect(isTypedArray(new Uint8Array())).to.equal(true)
    expect(isTypedArray(new Uint8ClampedArray())).to.equal(true)
    expect(isTypedArray(new Int16Array())).to.equal(true)
    expect(isTypedArray(new Uint16Array())).to.equal(true)
    expect(isTypedArray(new Int32Array())).to.equal(true)
    expect(isTypedArray(new Uint32Array())).to.equal(true)
    expect(isTypedArray(new Float32Array())).to.equal(true)
    expect(isTypedArray(new Float64Array())).to.equal(true)
  })

  it('palauttaa false ei-typed array -arvoille', () => {
    expect(isTypedArray([])).to.equal(false)
    expect(isTypedArray({})).to.equal(false)
    expect(isTypedArray(null)).to.equal(false)
    expect(isTypedArray(undefined)).to.equal(false)
    expect(isTypedArray(123)).to.equal(false)
    expect(isTypedArray("abc")).to.equal(false)
    expect(isTypedArray(new ArrayBuffer(8))).to.equal(false)
  })

  it('palauttaa true jos objektilla on toStringTag joka vastaa typed array -tyyppiä, mutta ei ole oikea typed array', () => {
  const fake = { [Symbol.toStringTag]: "Uint8Array" }
  expect(isTypedArray(fake)).to.equal(false)
})
})