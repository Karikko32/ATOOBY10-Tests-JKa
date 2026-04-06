import { expect } from 'chai'
import camelCase from '../src/camelCase.js'

describe('camelCase()', () => {

  it('muuntaa välilyönneillä erotetut sanat camelCase-muotoon', () => {
    expect(camelCase('Foo Bar')).to.equal(' fooBar')
  })

  it('poistaa erikoismerkit ja muuntaa camelCase-muotoon', () => {
    expect(camelCase('--foo-bar--')).to.equal(' fooBar')
  })

  it('käsittelee isolla kirjoitetut sanat oikein', () => {
    expect(camelCase('__FOO_BAR__')).to.equal(' fooBar')
  })

  it('palauttaa tyhjän merkkijonon, jos syöte on tyhjä', () => {
    expect(camelCase('')).to.equal(' ')
  })

  it('käsittelee undefined-arvon', () => {
    expect(camelCase(undefined)).to.equal(' undefined')
  })

  it('käsittelee yksittäisen sanan', () => {
    expect(camelCase('HELLO')).to.equal(' hello')
  })
})
