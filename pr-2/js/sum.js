const array = [1, 2, 3, 4, 5];
let sum = 0;

for (i = 0; i <= array.length - 1; i++) {
    console.log(`Array is ${array[i]}`);
    sum = sum + array[i];
}
console.log(`Sum of Array is = ${sum}`);
