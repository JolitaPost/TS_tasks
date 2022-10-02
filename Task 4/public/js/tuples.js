"use strict";
const person1 = ["Koridas", "Atmazas"];
const person2 = ["Paklodijus", "Pagalvė"];
const person3 = ["Višta", "Maumedienė"];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const person1 = ['Antanas', 25];
        const person2 = ['Ona', 24];
        console.log(person1, person2);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const personAndDog = [{
                name: 'Laura',
                age: 35,
            }, {
                name: 'Kudlius',
                age: 3,
            }];
        console.log(personAndDog);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const triangle1 = [[1, 0], [-2, 4], [3, 1]];
        const triangle2 = [[2, 0], [0, 0], [3, 4]];
        const triangle3 = [[1, 3], [0, 4], [1, -2]];
        console.log({
            triangle1,
            triangle2,
            triangle3
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map