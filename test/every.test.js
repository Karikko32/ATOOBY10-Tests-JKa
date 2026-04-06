import { expect } from 'chai'
import every from '../src/every.js'

describe('every()', () => {

  it('palauttaa true jos kaikki alkiot läpäisevät predikaatin', () => {
    expect(every([2, 4, 6], n => n % 2 === 0)).to.equal(true)
  })

  it('palauttaa false jos yksikin alkio epäonnistuu', () => {
    expect(every([2, 3, 6], n => n % 2 === 0)).to.equal(false)
  })

  it('lopettaa iteroinnin heti kun predikaatti palauttaa falsy', () => {
    let count = 0
    every([1, 2, 3], n => {
      count++
      return n < 2   // ensimmäinen true, toinen false
    })
    expect(count).to.equal(2)  // ei saa käydä kolmatta alkiota
  })

  it('välittää predikaatille oikeat argumentit (value, index, array)', () => {
    const arr = ['a']
    every(arr, (value, index, array) => {
      expect(value).to.equal('a')
      expect(index).to.equal(0)
      expect(array).to.equal(arr)
      return true
    })
  })

  it('palauttaa true tyhjälle taulukolle (vacuous truth)', () => {
    expect(every([], () => false)).to.equal(true)
  })

  it('palauttaa true jos array on null', () => {
    expect(every(null, () => false)).to.equal(true)
  })

  it('palauttaa true jos array on undefined', () => {
    expect(every(undefined, () => false)).to.equal(true)
  })

  it('toimii myös merkkijonoilla, koska ne ovat iteroitavia', () => {
    expect(every('aaa', ch => ch === 'a')).to.equal(true)
    expect(every('aba', ch => ch === 'a')).to.equal(false)
  })

})
