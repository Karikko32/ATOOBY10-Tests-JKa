import { expect } from 'chai'
import add from '../src/add.js'

describe('add()', () => {
  it('palauttaa kahden luvun summan', () => {
    const tulos = add(6, 4)
    expect(tulos).to.equal(10)
  })

  it('palauttaa toisen luvun jos ensimmäinen on undefined', () => {
    const tulos = add(undefined, 5)
    expect(tulos).to.equal(5)
  })

  it('palauttaa ensimmäisen luvun jos toinen on undefined', () => {
    const tulos = add(7, undefined)
    expect(tulos).to.equal(7)
  })
})
