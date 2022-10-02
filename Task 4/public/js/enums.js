"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
;
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
;
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
;
console.group('Literal types - užduotys');
{
    let LithuanianCities;
    (function (LithuanianCities) {
        LithuanianCities["Vilnius"] = "Vilnius";
        LithuanianCities["Kaunas"] = "Kaunas";
        LithuanianCities["Klaipeda"] = "Klaipeda";
        LithuanianCities["Siauliai"] = "Siauliai";
        LithuanianCities["Panevezys"] = "Panevezys";
    })(LithuanianCities || (LithuanianCities = {}));
    ;
    let LargestCountries;
    (function (LargestCountries) {
        LargestCountries[LargestCountries["China"] = 0] = "China";
        LargestCountries[LargestCountries["India"] = 1] = "India";
        LargestCountries[LargestCountries["USA"] = 2] = "USA";
        LargestCountries[LargestCountries["Indonesia"] = 3] = "Indonesia";
        LargestCountries[LargestCountries["Pakistan"] = 4] = "Pakistan";
    })(LargestCountries || (LargestCountries = {}));
    ;
    let StrongestEconomies;
    (function (StrongestEconomies) {
        StrongestEconomies[StrongestEconomies["USA"] = 1] = "USA";
        StrongestEconomies[StrongestEconomies["China"] = 2] = "China";
        StrongestEconomies[StrongestEconomies["Japan"] = 3] = "Japan";
        StrongestEconomies[StrongestEconomies["Germany"] = 4] = "Germany";
        StrongestEconomies[StrongestEconomies["UnitedKingdom"] = 5] = "UnitedKingdom";
    })(StrongestEconomies || (StrongestEconomies = {}));
    ;
    console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
    {
        const city1 = LithuanianCities.Vilnius;
        const city2 = LithuanianCities.Kaunas;
        const city3 = LithuanianCities.Klaipeda;
        const city4 = LithuanianCities.Siauliai;
        const city5 = LithuanianCities.Panevezys;
        console.log({ city1, city2, city3, city4, city5 });
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        const largestCountries = [LargestCountries.China, LargestCountries.India, LargestCountries.Indonesia, LargestCountries.Pakistan, LargestCountries.USA];
        console.log(largestCountries);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const strongestEconomies = [
            StrongestEconomies.USA,
            StrongestEconomies.China,
            StrongestEconomies.Japan,
            StrongestEconomies.Germany,
            StrongestEconomies.UnitedKingdom,
        ];
        console.log(strongestEconomies);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=enums.js.map