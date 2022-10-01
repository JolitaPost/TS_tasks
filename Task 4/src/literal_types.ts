/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/

type Latvia = 'Latvia';
type Lithuania = 'Lithuania';
type Estonia = 'Estonia';
const country: Latvia = 'Latvia';

type BalticCountry = Latvia | Lithuania | Estonia;
const country2 = 'Estonia';

type HttpType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type HttpRequest = {
  url: string,
  headers?: {
    [key: string]: string,
  },
  body?: {
    [key: string]: string,
  }
  method: HttpType,
};

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

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type Berlin = 'Berlin';
  type Hamburg = 'Hamburg';
  type Munich = 'Munich';
  type Cologne = 'Cologne';
  type Frankfurt = 'Frankfurt';
  type GermanyCity = Berlin | Hamburg | Munich | Cologne | Frankfurt;

  type Corgi = 'Corgi';
  type Husky = 'Husky';
  type Vizsla = 'Vizsla';
  type Spaniel = 'Spaniel';
  type Collie = 'Collie';
  type Breed = Corgi | Husky | Vizsla | Spaniel | Collie;

  type Engine = 'Engine';
  type Mirrors = 'Mirrors';
  type Wheel = 'Wheel';
  type Seats = 'Seats';
  type Windows = 'Windows';
  type CarPart = Engine | Mirrors | Wheel | Seats | Windows;

  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const city1: GermanyCity = 'Berlin';
    const city2: GermanyCity = 'Cologne';
    const city3: GermanyCity = 'Frankfurt';
    const city4: GermanyCity = 'Hamburg';
    const city5: GermanyCity = 'Munich';

    console.log({ city1, city2, city3, city4, city5});
  }
  console.groupEnd();

  console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    const breed1: Breed = 'Husky';
    const breed2: Breed = 'Corgi';
    const breed3: Breed = 'Spaniel';
    const breed4: Breed = 'Vizsla';
    const breed5: Breed = 'Collie';

    console.log({ breed1, breed2, breed3, breed4, breed5}); 
  }
  console.groupEnd();

  console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    
    const parts: CarPart[] = ['Mirrors', 'Engine', 'Seats', 'Wheel', 'Windows'];

    console.log(parts); 
  }
  console.groupEnd();

}
console.groupEnd();


