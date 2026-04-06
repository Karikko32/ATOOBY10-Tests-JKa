import { expect } from 'chai'
import ceil from '../src/ceil.js'

describe('ceil()', () => {

  it('pyöristää luvun ylöspäin ilman precision-arvoa', () => {
    expect(ceil(4.006)).to.equal(5)
    expect(ceil(4.0)).to.equal(4)
    expect(ceil(-1.2)).to.equal(-1)
  })

  it('pyöristää luvun ylöspäin positiivisella precision-arvolla', () => {
    expect(ceil(6.004, 2)).to.equal(6.01)
    expect(ceil(1.234, 1)).to.equal(1.3)
    expect(ceil(-1.234, 2)).to.equal(-1.23)
  })

  it('pyöristää luvun ylöspäin negatiivisella precision-arvolla', () => {
    expect(ceil(6040, -2)).to.equal(6100)
    expect(ceil(149, -1)).to.equal(150)
    expect(ceil(-149, -1)).to.equal(-140)
  })

  it('käsittelee precision = 0 kuten oletusarvo', () => {
    expect(ceil(4.1, 0)).to.equal(5)
    expect(ceil(4.9, 0)).to.equal(5)
  })

  it('palauttaa saman luvun jos se on jo kokonaisluku', () => {
    expect(ceil(10)).to.equal(10)
    expect(ceil(-5)).to.equal(-5)
  })

})
