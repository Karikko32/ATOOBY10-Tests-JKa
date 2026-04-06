import { expect } from 'chai'
import isDate from '../src/isDate.js'

describe('isDate()', () => {

  it('palauttaa true Date-olioista', () => {
    expect(isDate(new Date())).to.equal(true)
    expect(isDate(new Date('2020-01-01'))).to.equal(true)
  })

  it('palauttaa true jos arvo on Date-objekti Object()-kääreessä', () => {
    const wrapped = Object(new Date())
    expect(isDate(wrapped)).to.equal(true)
  })

  it('palauttaa false merkkijonoista', () => {
    expect(isDate('2020-01-01')).to.equal(false)
    expect(isDate('Mon April 23 2012')).to.equal(false)
  })

  it('palauttaa false numeroista', () => {
    expect(isDate(123456)).to.equal(false)
  })

  it('palauttaa false boolean-arvoista', () => {
    expect(isDate(true)).to.equal(false)
    expect(isDate(false)).to.equal(false)
  })

  it('palauttaa false taulukoista', () => {
    expect(isDate([])).to.equal(false)
  })

  it('palauttaa false tavallisista objekteista', () => {
    expect(isDate({})).to.equal(false)
  })

  it('palauttaa false null- ja undefined-arvoista', () => {
    expect(isDate(null)).to.equal(false)
    expect(isDate(undefined)).to.equal(false)
  })

})
