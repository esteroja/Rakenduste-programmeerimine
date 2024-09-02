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