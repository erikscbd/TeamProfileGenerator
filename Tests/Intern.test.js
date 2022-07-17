const Intern = require("../lib/Intern");
describe("Intern tests", () => {
    const createIntern = () => new Intern("test intern",1 , "email@email.com");

    it("get Intern name is working properly", () => {
        const testIntern = createIntern();
        expect(testIntern.getName()).toEqual("test intern");
    })

    it("get Intern Id is working properly", () => {
        const testIntern = createIntern();
        expect(testIntern.getId()).toEqual(1);
    })
   
    it("get Intern email is working properly", () => {
        const testIntern = createIntern();
        expect(testIntern.getEmail()).toEqual("email@email.com");
    })

    it("get Intern role is working properly", () => {
        const testIntern = createIntern();
        expect(testIntern.getRole()).toEqual("Intern");
    })
})