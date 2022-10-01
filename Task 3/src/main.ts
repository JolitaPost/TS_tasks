const numbers: number[] = [1, -5, 9, 3, 7, -4, 8, 7, 10, -2];


console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');

// Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
{
    function result(arr: any[]): void {
        console.log(arr.length - 1);
}

    console.log(numbers);
    result(numbers);

}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: any[]): void {
        for (let i=0; i < arr.length; i++)
        console.log(i);
    }
    console.log(numbers);
    result(numbers);    
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: any[]): void {
        for (let i = 0; i < arr.length; i++)
        console.log(arr[i]);    
    }
    console.log(numbers);
    result(numbers);
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: any[]): void {
        for (let i=0; i < arr.length; i++)
        console.log(`[${i}] => ${arr[i]}`);    
    }
    console.log(numbers);
    result(numbers);
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: any[]): void {
        for (let i = arr.length - 1; i >= 0; i--)
        console.log(arr[i]);
    }

    console.log(numbers);
    result(numbers);
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: any[]): void {
        const numbersInLine = arr.map((_, i) => i).join(' ');
        console.log(numbersInLine);
    }
    console.log(numbers);
    result(numbers);
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: any[]): void {
        const numbersInLine = arr.join(' ');
        console.log(numbersInLine);    
    }
    console.log(numbers);
    result(numbers);
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: any[]): void {
        const numbersInPairs = arr.map((x, i) => `[${i}]=>${x}`).join(', ');
        console.log(numbersInPairs);    
    }
    console.log(numbers);
    result(numbers);
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: number[]): number[] {
        return arr.map(x => x * 2);
    }
    const resultMultiply = result(numbers);
    console.log(numbers);
    console.log(resultMultiply);    
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

  function result(arr: number[]): number[] {
    return arr.map(x => x ** 2);
}
const resultSquare = result(numbers);
console.log(numbers);
console.log(resultSquare); 
}
console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: number[]): number[] {
        return arr.map((x, i) => x * i);
    }
    const keyAndValueMultiply = result(numbers);
    console.log(numbers);
    console.log(keyAndValueMultiply);      
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: number[]): number[] {
        return arr.filter((x) => x > 0);
    }
    const positiveNumbers = result(numbers);
    console.log(numbers);
    console.log(positiveNumbers);
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: number[]): number[] {
        return arr.filter((x) => x < 0);
}
    const negativeNumbers = result(numbers);
    console.log(numbers);
    console.log(negativeNumbers);
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: number[]): number[] {
        return arr.filter((x) => x % 2 === 0);
    }
    const evenNumbers = result(numbers);
    console.log(numbers);
    console.log(evenNumbers);  
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: number[]): number[] {
        return arr.filter((x) => Math.abs(x) % 2 === 1);
    }
    const oddNumbers = result(numbers);
    console.log(numbers);
    console.log(oddNumbers);  
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function result(arr: number[]): number[] {
        return arr.map((x) => x < 0 ? x * -1 : x);
    }
    const negativeToPositive = result(numbers);
    console.log(numbers);
    console.log(negativeToPositive);    
}
console.groupEnd();
