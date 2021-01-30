const EntityBase = require("./entityBase");
//const Assert = require("./assert");
const Employee = require("./employee");
const Util = require("./util");
const Manager = require("./manager");

// console.log(new EntityBase({
//     name = 'Mario Silva',
//     gender = 'male'
// }));

// console.log(new EntityBase({
//     name = 'Josefina Batalha',
//     gender = 'female'
// }));
const GENDER = {
    male: 'male',
    female: 'female'
}

{
    const employee = new Employee({
        name: 'Mario Silva',
        gender: 'male'
    })

    assert.throws(() => employee.birthYear, {
        message: 'You must define age first!!'
    })
}

const CURRENT_YEAR = 2021
Date.prototype.getFullYear = () => CURRENT_YEAR

{
    const employee = new Employee({
        name: 'Joaozinho',
        age: 22,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, 'Mr. Joaozinho')
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32))

    const expectedBirthYear = 2001
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

    employee.birthYear = new Date().getFullYear() - 80
    assert.deepStrictEqual(employee.birthYear, new Date().getFullYear() - 80)

    employee.age = 80
    assert.deepStrictEqual(employee.birthYear, 1941)

    console.log('\n-----emplloyee------')
    console.log(employee)

    const manager = new Manager({
        name: "Ricardo",
        age: 18,
        gender: GENDER.female
    })

    assert.deepStrictEqual(manager.name, 'Mr. Ricardo')
    assert.deepStrictEqual(manager.age, undefined)
    assert.deepStrictEqual(manager.gender, undefined)
    assert.deepStrictEqual(manager.birthYear, 2003)
    assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(manager.bonuses.Util.formatCurrency(2000))
}