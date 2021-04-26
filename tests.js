// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe("sayHello",function() {
    it("should return a string when called",function() {
        expect(typeof sayHello()).toBe("string");
});
});
describe("Hello, Jane!",function () {
    it('should be a defined function', function () {
expect(typeof sayHello("Jane")).toBe("string")
    });
})
describe("Hello, Alex!", function() {
    it('should be a string "Hello, Alex! when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
})
describe("Hello, Pat!", function() {
    it('should be a string "Hello, Pat! when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
})
describe("Hello, World!", function() {
    it('should be a string "Hello, World! when executed', function () {
        expect(sayHello("World")).toBe("Hello, World!")
    });
})