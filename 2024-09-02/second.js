// 1. Ülesanne: Luua array numbritega ja leida spetsiifilise numbri index

let array = [1,2,3,4,5];

function findIndex(array, number){
    return array.indexOf(number);
}

console.log(findIndex(array, 2));

// Arrow functions

// 2. Ülesanne: FUnktsioon, mis liidab 2 numbrit kokku ja tagastab summa

function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(2, 3));

// 3. Ülesanne: Ümber kirjutada arrow funktsioonina

const sumArrowFn = (num1, num2) => {
    return num1 + num2;
};

console.log(sumArrowFn(2,4));

// 4. Ülesanne: Ümber kirjutada shorthand arrow funktsioonina

const sumArrowShort = (num1, num2) => num1 + num2;

// () => {return ...}
// () => ... (returnib ikka)

console.log(sumArrowShort(3,5));

// 5. Ülesanne: Luua funkts. sellisel kujul, et saaks kutsuda välja seda nii: console.log(sumNested(3)(4);)

function sumNested(num1){
    return function (num2) {
        return num1 + num2;
    }
}
console.log(sumNested(3)(4));

// 6. Ülesanne: Looge samast funktsioonist arrowfunktsioon

const sumNestedArrow = num1 => num2 => num1 + num2;

console.log(sumNestedArrow(2)(8));

// 7. Ülesanne: AF (arrowfunc) printida "Hello (nimi)" ja kasutada string literals

const greet = (name = "World") => `Hello ${name}`; 

console.log(greet());
console.log(greet("Ester"));

// Map ja filter

// 8. Ülesanne: liita igale elemendile juurde +5, et uuele muutujale omandaks

const newArray = [1, 2, 3, 4, 5];

const addedAray = newArray.map((element) => element + 5); 
//map -> kutsutakse funktsioon välja iga array elemendi juures, olemasoleat arrayd ei muudeta

console.log(addedAray);

// 9. Käime läbi 3 paramteetrit, mida saab map ja filtriga välja 

const threeParameters = newArray.map((element, index, array) => {
    console.log(element, index, array);

    return element + 5;
}); 

console.log(threeParameters);

//10. Muudame objektiks, et console.logides oleks paremini märgata

console.log({threeParameters: threeParameters} );
