//function factorial (n) {
//    if (n === 0)
//        return 1;
//    return factorial(n-1) * n;
//};

describe("Factorial", function(){
    it("should return factorial of a number", function(){
        expect(factorial(4)).toBe(24);
        expect(factorial(5)).toBe(120);
        expect(factorial(6)).toBe(720);
    });
});