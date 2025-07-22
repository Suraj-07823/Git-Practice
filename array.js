//index 0  1  2  3  4  5  6  7  8   9
arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arr);
console.log(arr[4]);
console.log(arr[6]);

// for (initialization;condition; iteration)

// for (i=0;i<arrLength;i++){
//     console.log(arr[i])
// }
console.log("Length of array is: ");
arrlength = arr.length;
console.log(arrlength); // length of array

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
];
console.log(fruits);
console.log("fruit at index 3 is", fruits[3]);
console.log("fruit at index 6 is", fruits[6]);
console.log("fruit at index 2 is", fruits[2]);

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
