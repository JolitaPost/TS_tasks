"use strict";
const country = 'Latvia';
const country2 = 'Estonia';
const req1 = {
    url: 'https://tavo-veidas.lt',
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
};
const req2 = {
    url: 'https://tavo-veidas.lt/api/',
    headers: {
        'Authorization': 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
        'Content-Type': 'application/json',
    },
    body: {
        image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg',
    },
    method: 'POST',
};
console.group('Literal types - užduotys');
{
    console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
    {
        const city1 = 'Berlin';
        const city2 = 'Cologne';
        const city3 = 'Frankfurt';
        const city4 = 'Hamburg';
        const city5 = 'Munich';
        console.log({ city1, city2, city3, city4, city5 });
    }
    console.groupEnd();
    console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
    {
        const breed1 = 'Husky';
        const breed2 = 'Corgi';
        const breed3 = 'Spaniel';
        const breed4 = 'Vizsla';
        const breed5 = 'Collie';
        console.log({ breed1, breed2, breed3, breed4, breed5 });
    }
    console.groupEnd();
    console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
    {
        const parts = ['Mirrors', 'Engine', 'Seats', 'Wheel', 'Windows'];
        console.log(parts);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=literal_types.js.map