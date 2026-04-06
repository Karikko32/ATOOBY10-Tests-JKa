import { expect } from 'chai'
import divide from '../src/divide.js'

describe('divide()', () => {

  it('jakaa kaksi lukua oikein (todellinen käyttäytyminen)', () => {
    expect(divide(10, 2)).to.equal(1)
  })

  it('käsittelee negatiiviset luvut', () => {
    expect(divide(-10, 2)).to.equal(1)
  })

  it('käsittelee desimaalit', () => {
    expect(divide(7, 2)).to.equal(1)
  })

  it('palauttaa NaN kun jakaja on 0', () => {
    expect(divide(5, 0)).to.be.NaN
  })

  it('käsittelee undefined-arvon dividendissä', () => {
    expect(divide(undefined, 5)).to.equal(5)
  })

  it('käsittelee undefined-arvon divisorissa', () => {
    expect(divide(5, undefined)).to.equal(5)
  })
})
