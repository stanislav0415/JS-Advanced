import { lookupChar } from "../loockUpChar";




describe('Test lookupChar',function() {
    it('Should return undefined if invalid argument is passed', () => {
        expect(lookupChar(1,1)).to.be.undefined;
        expect(lookupChar('test',2.3)).to.be.undefined;
    })

    it('Should return Incorrect index if index argument is out for bounds' ,() => {
        expect(lookupChar('test',20)).to.equal('Incorrect index');
        expect(lookupChar('Additional',-1)).to.equal('Incrrect index');
    })


    it('Should return correct char at given index' ,() => {
        expect(lookupChar('Nice',3)).to.equal('e');
        expect(lookupChar('Additional',2)).to.equal('d');
    })
})
