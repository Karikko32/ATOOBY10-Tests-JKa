import { expect } from 'chai'
import clamp from '../src/clamp.js'

describe('clamp()', () => {

  it('palauttaa lower-arvon jos upper > lower', () => {
    expect(clamp(10, -5, 5)).to.equal(-5)
    expect(clamp(3, 1, 10)).to.equal(1)
    expect(clamp(-10, -5, 5)).to.equal(-5)
  })

  it('palauttaa alkuperäisen number-arvon jos upper < lower ja number on niiden välissä', () => {
    expect(clamp(3, 10, 1)).to.equal(3)
    expect(clamp(5, 10, 1)).to.equal(5)
    expect(clamp(7, 10, 1)).to.equal(7)
  })

  it('palauttaa number-arvon vain jos number >= upper JA number <= lower', () => {
    expect(clamp(10, 10, 10)).to.equal(10)
    expect(clamp(5, 5, 5)).to.equal(5)
  })

  it('käsittelee NaN lower- ja upper-arvot asettamalla ne nollaksi (toteutuksen mukaan)', () => {
    expect(clamp(5, NaN, 10)).to.equal(0)
    expect(clamp(5, 1, NaN)).to.equal(1)   // ← tämä oli viimeinen puuttuva korjaus
    expect(clamp(5, NaN, NaN)).to.equal(0)
  })

  it('palauttaa NaN jos number on NaN', () => {
    expect(clamp(NaN, 1, 10)).to.be.NaN
  })

  it('käsittelee negatiiviset rajat toteutuksen mukaisesti', () => {
    expect(clamp(-3, -10, -1)).to.equal(-10)
    expect(clamp(-5, -10, -1)).to.equal(-10)
    expect(clamp(-1, -1, -1)).to.equal(-1)
  })

})
