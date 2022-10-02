import Employee from './employee.js';
import formatLine from '../helpers/formatLine.js';
import calcMonthWorkDays from '../helpers/calcMonthWorkDays.js';
class WorkPerson extends Employee {
    constructor({ hourPay, fullTimeEquivalent, ...personProps }) {
        super(personProps);
        this.calcPay = () => calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent * 8;
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    toString() {
        return `${this.getPersonInfo()
            + formatLine(`hour pay: ${this.hourPay}`, 1)
            + formatLine(`full time equivalent: ${this.fullTimeEquivalent}`, 1)}\n`;
    }
}
export default WorkPerson;
//# sourceMappingURL=workPerson.js.map