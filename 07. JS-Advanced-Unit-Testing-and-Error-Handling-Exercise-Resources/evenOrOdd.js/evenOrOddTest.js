import { expect } from 'chai'
import { isOddOrEven } from '../even-or-odd.js'

describe('test isOddOrEven ', function() {
  it('Should return undefined if other than string is passed',() => {
    expect(isOddOrEven(1)).to.be.undefined;
    expect(isOddOrEven(['string'])).to.be.undefined;
    expect(isOddOrEven({name: 'david'})).to.be.undefined;
  })

  it('Sould return even if string with even length is passed', () =>{
    expect(isOddOrEven('11')).to.equal('even');
    expect(isOddOrEven('test')).to.equal('even');
  })

  it('Sould return even if string with odd length is passed', () =>{
    expect(isOddOrEven('dog')).to.equal('odd');
  })

  it('Should work normally with diffrent strings', () =>{
    expect(isOddOrEven('Happy')).to.equal('odd');
    expect(isOddOrEven('Stuff')).to.equal('odd');
    expect(isOddOrEven('Hell')).to.equal('even');
  })
})