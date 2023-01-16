const arr = [1,2,3,4,5,6];

arr.forEach(el => {
    console.log(el);
})

const newf = (a,b,c) => {
    console.log((a + b) * c);
}

newf(1,2,3);

if(5 < arr.length) {
    console.log(true);
} else {
    console.log(false);
}

console.log(`tabliza ma ${arr.length} elementow`);