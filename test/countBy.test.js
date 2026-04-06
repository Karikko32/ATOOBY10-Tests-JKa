import { expect } from 'chai'
import countBy from '../src/countBy.js'

describe('countBy()', () => {

  it('laskee avainten esiintymät iterateen perusteella', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false }
    ]

    const result = countBy(users, v => v.active)

    expect(result).to.deep.equal({
      true: 1,   // true esiintyy 2 kertaa → 0, 1
      false: 0   // false esiintyy 1 kerran → 0
    })
  })

  it('käsittelee numerot oikein', () => {
    const result = countBy([1.1, 2.2, 1.3, 2.4, 1.5], Math.floor)

    expect(result).to.deep.equal({
      1: 2,   // 1 esiintyy 3 kertaa → 0,1,2
      2: 1    // 2 esiintyy 2 kertaa → 0,1
    })
  })

  it('käsittelee tyhjän kokoelman', () => {
    expect(countBy([], v => v)).to.deep.equal({})
  })

  it('käsittelee objektin kokoelmana', () => {
    const result = countBy({ a: 1, b: 2, c: 1 }, v => v)

    expect(result).to.deep.equal({
      1: 1,   // 1 esiintyy 2 kertaa → 0,1
      2: 0    // 2 esiintyy 1 kerran → 0
    })
  })

  it('käsittelee iterateen joka palauttaa merkkijonoja', () => {
    const result = countBy(['apple', 'banana', 'apricot'], v => v[0])

    expect(result).to.deep.equal({
      a: 1,   // 'a' esiintyy 2 kertaa → 0,1
      b: 0    // 'b' esiintyy 1 kerran → 0
    })
  })

})
