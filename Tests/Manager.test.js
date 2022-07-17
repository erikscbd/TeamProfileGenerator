const Manager = require("../lib/Manager");
describe("Manager tests", () => {
    const createManager = () => new Manager("test Manager", 1, "email@email.com");

    it("get Manager name is working properly", () => {
        const testManager = createManager();
        expect(testManager.getName()).toEqual("test Manager");
    })

    it("get Manager Id is working properly", () => {
        const testManager= createManager();
        expect(testManager.getId()).toEqual(1);
    })
   
    it("get Manager email is working properly", () => {
        const testManager = createManager();
        expect(testManager.getEmail()).toEqual("email@email.com");
    })

    it("get Manager role is working properly", () => {
        const testManager = createManager();
        expect(testManager.getRole()).toEqual("Manager");
    })
})