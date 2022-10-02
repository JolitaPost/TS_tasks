/*
  Aprašant masyvų tipus reikia nurodyti kokie elementai sudarys masyvai, galimos 2 sintaksės:
    * tipas[] -> number[], string[], Person[] ir t.t.
    * Array<tipas> -> Array<number>, Array<string>, Array<Person> ir t.t.
*/

type Person1 = {
  id: string,
  name: string,
  surname: string,
  age: number,
  height?: number, // Neprivaloma savybė
  weight?: number, // Neprivaloma savybė
};

const numData: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const names: Array<string> = ['Rita', 'Jonas', 'Petras', 'Viktorija'];
const people: Person1[] = [{
  id: '4578562318',
  name: 'Viktoras',
  surname: 'Ramonas',
  age: 63,
}, {
  id: '8594672134',
  name: 'Rita',
  surname: 'Aukstyte',
  age: 44,
  height: 1.62,
  weight: 65,
}, {
  id: '3958792312',
  name: 'Bronius',
  surname: 'Barda',
  age: 101,
  height: 1.79,
  weight: 92,
}];

// Kaip ir kiti tipai, masyvai gali būti naudojami funkcijų parametrams arba funkcijų grąžinimo tipams aprašyti
type CreatePeopleArrayFunction = (p1: Person1, p2: Person1) => Person1[];

const printStrings = (strings: string[]): void => {
  const printString = (str: string): void => console.log(str);

  strings.forEach(printString);
};

const sumNumbers = (nums: Array<number>): number => {
  const numberSumReducer = (sum: number, num: number): number => sum + num;

  return nums.reduce(numberSumReducer, 0);
};

const createPeopleArray: CreatePeopleArrayFunction = (p1, p2) => [p1, p2];

console.group('Panaudojimo pavyzdžiai:');
{
  console.group('printStrings');
  {
    printStrings(names);
  }
  console.groupEnd();

  console.group('sumNumbers');
  {
    const result: number = sumNumbers(numData);
    console.log({
      numbers: numData,
      result,
    });
  }
  console.groupEnd();

  console.group('createPeopleArray');
  {
    const couple: Array<Person1> = createPeopleArray(people[0], people[1]);
    console.log(couple);
  }
  console.groupEnd();
}
console.groupEnd();

console.group('Užduotys');
{
  console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
  {
    const numbers: number[] = [1, 3, -4, 5, 7, -8];

    function addPositiveNumbers(arr: number[]) {
      const positiveNumberReducer = (sum: number, num: number) => (num > 0 ? sum + num : sum);

      return arr.reduce<number>(positiveNumberReducer, 0);
    }

    console.log({
      numbers,
      sumOfPositiveNumbers: addPositiveNumbers(numbers),
    });
  }
  console.groupEnd();

  console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
  {
    /*
      Pvz.:
       * ['Lietuviškas', 'Nepriklausomas', 'Kanalas'] -> LNK
       * ['Lietuvos', 'Respublikos', 'Televizija'] -> LRT
       * ['Loughing', 'Out', 'Loud'] -> LOL
    */
    const acronymReducer = (acronym: string, word: string) => acronym + word[0];

    const createAcronym = (words: string[]): string => {
      const acronym = words.reduce<string>(acronymReducer, '');
      return acronym;
    };

    const dataSamples: string[][] = [
      ['Lietuviškas', 'Nepriklausomas', 'Kanalas'],
      ['Lietuvos', 'Respublikos', 'Televizija'],
      ['Loughing', 'Out', 'Loud'],
    ];

    dataSamples.forEach((words: string[]) => console.log(`[${words.join(', ')}] -> ${createAcronym(words)}`));
  }
  console.groupEnd();

  console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
  {
    /*
      Pvz.:
       * [1, 7, 8] -> 56
       * [98, 74, 5, 0] -> 0
       * [17, 10, 5] -> 850
    */
    // Sprendimas
    type NumbersMultiplyReducer = (product: number, factor: number) => number;
    type MultiplyNumbers = (numbers: Array<number>) => number;

    const numbersProductReducer: NumbersMultiplyReducer = (product, factor) => product * factor;

    const multiplyNumbers: MultiplyNumbers = (numbers) => numbers.reduce<number>(numbersProductReducer, 1);

    // Spausdinimas - ŠI SPAUSDINIMO DALIS TIK DĖL ĮDOMUMO, TIEMS KAM BUVO PER LENGVA(kolkas...)
    type AnswerObject = {
      [key: string]: number,
    };

    type FormatAnswerObject = (samples: Array<Array<number>>) => AnswerObject;

    type AnswerObjectReducer = (answerObject: AnswerObject, numbers: Array<number>) => AnswerObject;

    const samples: Array<Array<number>> = [
      [1, 7, 8],
      [98, 74, 5, 0],
      [17, 10, 5],
    ];

    const answerObjectReducer: AnswerObjectReducer = (answerObject, numbers) => {
      const functionName: string = multiplyNumbers.name;
      const functionArgsString: string = `[${numbers.join(', ')}]`;
      const key: string = `${functionName}(${functionArgsString})`;
      const value: number = multiplyNumbers(numbers);
      answerObject[key] = value;
      return answerObject;
    };

    const formatAnswerObject: FormatAnswerObject = (samples) => {
      const initialValue: AnswerObject = {};
      const result: AnswerObject = samples.reduce<AnswerObject>(answerObjectReducer, initialValue);
      return result;
    };

    const answerObject: AnswerObject = formatAnswerObject(samples);

    console.log(answerObject);
  }
  console.groupEnd();
}
console.groupEnd();
