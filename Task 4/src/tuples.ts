/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ["Koridas", "Atmazas"];
const person2: FullnameTuple = ["Paklodijus", "Pagalvė"];
const person3: FullnameTuple = ["Višta", "Maumedienė"];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓

  type PersonTuple = [string, number];

  type Person = {
    name: string,
    age: number,
  };

  type Dog = {
    name: string,
    age: number,
  };

  type PersonAndDogTuple = [Person, Dog];
  type PointTuple = [number, number];
  type TriangleTuple = [PointTuple, PointTuple, PointTuple];

  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const person1: PersonTuple = ['Antanas', 25];
    const person2: PersonTuple = ['Ona', 24];

    console.log(person1, person2); 
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    const personAndDog: PersonAndDogTuple = [{
        name: 'Laura',
        age: 35,
    },{
        name: 'Kudlius',
        age: 3,
    }];

    console.log(personAndDog);    
  }
  console.groupEnd();

  console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
    const triangle1: TriangleTuple = [[1, 0], [-2, 4], [3, 1]];
    const triangle2: TriangleTuple = [[2, 0], [0, 0], [3, 4]];
    const triangle3: TriangleTuple = [[1, 3], [0, 4], [1, -2]];

    console.log({
      triangle1,
      triangle2,
      triangle3
    });
  }
  console.groupEnd();

}
console.groupEnd();