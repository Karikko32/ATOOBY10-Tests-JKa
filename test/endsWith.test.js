import { expect } from 'chai'
import endsWith from '../src/endsWith.js'

describe('endsWith()', () => {

  it('palauttaa true kun merkkijono päättyy kohdesanaan', () => {
    expect(endsWith('hello', 'lo')).to.equal(true)
  })

  it('palauttaa false kun merkkijono ei pääty kohdesanaan', () => {
    expect(endsWith('hello', 'he')).to.equal(false)
  })

  it('käsittelee position-parametrin oikein', () => {
    expect(endsWith('hello', 'he', 2)).to.equal(true)
  })

  it('palauttaa false tyhjälle merkkijonolle', () => {
    expect(endsWith('', 'a')).to.equal(false)
  })

  it('palauttaa true kun target on tyhjä merkkijono', () => {
    expect(endsWith('hello', '')).to.equal(true)
  })

  it('käsittelee undefined-merkkijonon (heittää TypeError)', () => {
    expect(() => endsWith(undefined, 'a')).to.throw(TypeError)
  })

  it('käsittelee undefined-targetin (heittää TypeError)', () => {
    expect(() => endsWith('hello', undefined)).to.throw(TypeError)
  })

  it('käsittelee unicode-merkit', () => {
    expect(endsWith('määrä', 'rä')).to.equal(true)
  })
})
