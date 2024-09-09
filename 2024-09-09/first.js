// 11. Ülesanne: filtreerida välja uuesti massiivist kõik elemendid, mis on suuremad kui 4

const array = [1, 2, 3, 4, 5, 6];

const filteredArray = array.filter((element) => element > 4);

console.log(filteredArray);
console.log({ filteredArray });
console.log({ array: filteredArray});

// {} -> objekti tunnus

// 12.Ülesanne: Luua nimede massiivi põhjal objektide massiiv, mis koosneb sellised kujul objektidest

const names = ['Anni', 'Mari', 'Mati', 'Juku'];

const objectifiedNames = names.map(name => {
    return {
        name: name,
        age: name.length + 20,
        email: `${name}@company.com`,
        address: `${name} Street 55`,
        username: name.split('').reverse().join('')

    }
})

console.log({ objectifiedNames });

// 13.Ülesanne: Tahame juurde lisada pikkuse ja jätta eelnevad andmed kõik samaks

// Spread syntax

let ester = {
    name: 'Ester',
    school: 'TLÜ'
}

ester = {...ester, height: 172};

console.log({ ester });

// 14. Ülesanne: == / ===

console.log(1 == "1");
console.log(1 === "1"); // range võrdus, vaatab andmetüüpi

//async/await Promise
//

const myPromise = () => {
    return new Promise((resolve) => 
        setTimeout(()=> 
            resolve('done'), 1000));
};

// async function Name(){} - teine kuju

const runPromise = async () => {
    console.log(await myPromise());
};

// await ootab ära muu funktsiooni lõpuni töötamise, nt apist andmete kättesaamiseks kasutatakse et oodata andmed ära

runPromise();

setTimeout(()=> console.log("timeout"), 2000); // see on sync kood

//dependencite jaoks aint npm install, siis tõmmatakse node_modules arvutisse

