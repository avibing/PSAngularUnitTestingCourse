import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {
 
    let sp: StrengthPipe = new StrengthPipe();
    
    beforeEach(() => {


    } );

    it('should be true', () => {

        expect(sp.transform(5)).toBeTruthy();
        expect(sp.transform(5)).toEqual("5 (weak)");
        expect(sp.transform(5)).toBe("5 (weak)");
        expect(sp.transform(15)).toEqual("15 (strong)");

    });

});