const { isTypedArray } = require("util/types");
const Engineer = require("../lib/Engineer");
describe("Engineer tests", () => {
    const createEngineer = () => new Engineer("test Enginner", 1, "email@email.com");

    it("get Enginner is working as it should", () => {
        const testEngineer = createEnginner();
        expect(testEngineer.getName()).toEqual("test Engineer");
    })

    it("get Engineer Id is working as it should", () => {
        const testEngineer =  createEngineer();
        expect(testEngineer.getId()).toEqual(1);
    })

    it("get Engineer email is working as it should", () => {
        const testEngineer = createEngineer();
        expect(testEngineer.getEmail()).toEqual("email@email.com")
    })

    it("get Engineer role should be working properly", () => {
        const testEngineer = createEngineer();
        expect(testEngineer.getRole()).toEqual("Engineer");
    })
    

})