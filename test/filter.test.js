import { expect } from 'chai'
import filter from '../src/filter.js'

describe('filter()', () => {

  it('palauttaa arvot jotka täyttävät predikaatin ehdon', () => {
    const result = filter([1, 2, 3, 4], x => x > 2)
    expect(result).to.deep.equal([3, 4])
  })

  it('välittää predikaatille oikeat argumentit (value, index, array)', () => {
    const args = []

    filter([10, 20], (value, index, array) => {
      args.push([value, index, array])
      return true
    })

    expect(args[0][0]).to.equal(10)
    expect(args[0][1]).to.equal(0)
    expect(args[0][2]).to.deep.equal([10, 20])

    expect(args[1][0]).to.equal(20)
    expect(args[1][1]).to.equal(1)
    expect(args[1][2]).to.deep.equal([10, 20])
  })

  it('palauttaa [ [] ] tyhjästä syötteestä', () => {
    expect(filter([], x => x)).to.deep.equal([[]])
  })

  it('palauttaa [ [] ] jos mikään arvo ei täytä ehtoa', () => {
    expect(filter([1, 2, 3], () => false)).to.deep.equal([[]])
  })

  it('palauttaa kaikki arvot jos predikaatti palauttaa aina true', () => {
    expect(filter([1, 2, 3], () => true)).to.deep.equal([1, 2, 3])
  })

  it('ei muuta alkuperäistä taulukkoa', () => {
    const arr = [1, 2, 3]
    filter(arr, x => x > 1)
    expect(arr).to.deep.equal([1, 2, 3])
  })

})
