let main = require('../main/main');

describe('main', function() {
    // write your tests here...
    let km = [1, 5, 9];
    let min = 3;
    let money = [7, 9, 13];
    it('两公里内车费', function() {
        let result = main(km[0], min);
        expect(result).toEqual(money[0]);
    });
    it('八公里内车费', function() {
        let result = main(km[1], min);
        expect(result).toEqual(money[1]);
    })
    it('八公里外车费', function() {
        let result = main(km[2], min);
        expect(result).toEqual(money[2]);
    })
});