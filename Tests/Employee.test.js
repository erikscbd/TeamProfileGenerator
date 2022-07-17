const Employee = require('../lib/Employee');
describe('Employee tests', () => {
    const createEmployee = () => new Employee("Test Employee", 1, "email@email.com");
    
    it("get Employee is working as it should", () => {
        const testEmployee = createEmployee();
        expect(testEmployee.getName()).toEqual("test Employee"); 
    
    })

    it("get Employee Id is working as it should", () => {
        const testEmployee = createEmployee();
        expect(testEmployee.getId()).toEqual(1);
        
    })

    it("get Employee email is working properly", () => {
        const testEmployee = createEmployee();
        expect(testEmployee.getEmail()).toEqual("email@email.com");
    })

    it("get Employee role should work properly", () => {
        const testEmployee = createEmployee();
        expect(testEmployee.getRole()).toEqual("Employee");

    })
})
