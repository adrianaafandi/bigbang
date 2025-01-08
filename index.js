let number = [];

for ( let i=1; i<=100; i++){
    if (i % 3 === 0 && i % 5 == 0) {
        number.push("BIGBANG");
    } else if (i % 3 === 0) {
        number.push("BIG");
    } else if (i % 5 === 0) {
        number.push("BANG");
    } else {
        number.push(i);
    }
}

const output = JSON.stringify(number, null, 2);
console.log(output);
