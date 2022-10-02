import WorkPerson from './entities/workPerson.js';
import SelfEmployedPerson from './entities/selfEmployedPerson.js';
import BuisnessLicencePerson from './entities/businessLicensePerson.js';
import Employee from './entities/employee.js';
import Job from './entities/job.js';

const backendDeveloper = new WorkPerson({
  id: '1586794523',
  name: 'Juozas',
  surname: 'Vaitonis',
  hourPay: 25,
  fullTimeEquivalent: 1,
});
const frontendDeveloper = new WorkPerson({
  id: '4458963452',
  name: 'Almantas',
  surname: 'Brunonas',
  hourPay: 25,
  fullTimeEquivalent: 0.5,
});

const selfEmployed1 = new SelfEmployedPerson({
  id: '4785623948',
  name: 'Joana',
  surname: 'Manik',
  hourPay: 25,
  hoursWorked: 10,
});
const selfEmployed2 = new SelfEmployedPerson({
  id: '7856231945',
  name: 'Leonas',
  surname: 'Laurinaitis',
  hourPay: 10,
});

const designer = new BuisnessLicencePerson({
  id: '56497823564',
  name: 'Lina',
  surname: 'Palsaite',
});

const jobs = [
  new Job('Facebook adds', 300),
  new Job('Google adds', 800),
  new Job('Twitter adds', 500),
];

jobs[0].completeJob();
jobs[2].completeJob();

const marketingSpecialist = new BuisnessLicencePerson({
  id: '7958261348',
  name: 'Jomantas',
  surname: 'Vaigauskas',
  jobs,
});

const employees: Employee[] = [
  backendDeveloper,
  frontendDeveloper,
  selfEmployed1,
  selfEmployed2,
  designer,
  marketingSpecialist,
];

console.group('1. Atspausdinkite visus darbuotojus');
employees.forEach((emp) => console.log(emp.toString()));
console.groupEnd();

console.group('2. Atspausdinkite visų darbuotojų atlyginimus');
employees.forEach((emp) => {
  console.log(emp.getPersonInfo());
  console.log(emp.calcPay());
});
console.groupEnd();
