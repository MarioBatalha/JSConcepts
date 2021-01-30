const employee = require('./employee');
const Util = require('./util');

class Manager extends Employee {
    bonus = 2000
    get bonuses() {
        return Util.formatCurrency(this.bonuese)
    }

    get netPay() {
        const finalValue = Util.unformatCurrency(super.netPay) + Util.unformatCurrency(this.bonuses)

        return Util.unformatCurrency(finalValue)
    }
}

module.exports = Manager;