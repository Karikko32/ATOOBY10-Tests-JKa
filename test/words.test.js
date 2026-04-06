import { expect } from 'chai'
import words from '../src/words.js'

describe('words()', () => {

  it('palauttaa tyhjän taulukon tyhjästä merkkijonosta', () => {
    expect(words("")).to.deep.equal([])
  })

  it('palauttaa ASCII-sanat oikein', () => {
    expect(words("Hello world")).to.deep.equal(["Hello", "world"])
  })

  it('käsittelee sanat joissa on numeroita (kirjaimet ja numerot erillään)', () => {
    expect(words("abc123 def456")).to.deep.equal(["abc", "123", "def", "456"])
  })

  it('käyttää unicodeWords-polun unicode-merkkejä sisältävissä syötteissä', () => {
    const result = words("kissa🐱koira")
    expect(result).to.deep.equal(["kissa", "🐱", "koira"])
  })

  it('hyväksyy pattern-parametrin ja käyttää sitä', () => {
    expect(words("abc-123", /[a-z]+/g)).to.deep.equal(["abc"])
  })

})
