


describe('Test mathEnforcer', function(){
    describe('addFive',function() {
        it ('should return correct result with a non number parameter',function(){
            expect(mathEnforcer.addFive('hello')).to.be.undefined
          expect(mathEnforcer.addFive([1,2,3])).to.be.undefined
          expect(mathEnforcer.addFive({name: 'david '})).to.be.undefined
        })
          

        })

        it ('should return correct result' , function(){
            expect(mathEnforcer.addFive(5)).to.be.equal(10)
            expect(mathEnforcer.addFive(-5)).to.be.equal(0)
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5,0.01)
           
          })

    })
    describe('substractTen', function(){
        it ('should return correct result with a non number parameter' , function(){
            expect(mathEnforcer.addFive('hello')).to.be.undefined
            expect(mathEnforcer.addFive([1,2,3])).to.be.undefined
            expect(mathEnforcer.addFive({name: 'david '})).to.be.undefined
  
          })

        it ('should return correct result' , function(){
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0)
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20)
            expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5,0.01)
    })


    describe('sum', function(){
        it('should return correct result with a non number parameter')
        expect(mathEnforcer.sum('hello',1)).to.be.undefined
        expect(mathEnforcer.sum(1[1,2,3])).to.be.undefined
        expect(mathEnforcer.sum({name: 'david'})).to.be.undefined

    })

    it ('should return correct result' , function(){
        expect(mathEnforcer.subtractTen(1,2)).to.be.equal(3)
        expect(mathEnforcer.subtractTen(-10,5)).to.be.equal(-5)
        expect(mathEnforcer.subtractTen(10.2,12,3)).to.be.equal(22.5,0.01)

    

})