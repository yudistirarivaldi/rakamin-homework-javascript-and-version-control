let array = [
  23, 33, 46, 33, 47, 42, 21, 46, 44, 42, 15, 50, 25, 9, 10, 4, 1, 25, 32, 3,
  21, 18, 31, 41, 44, 7, 6, 45, 13, 27, 5, 22, 17, 20, 3, 50, 9, 37, 48, 46, 42,
  9, 45, 27, 34, 21, 6, 19, 44, 29, 19, 7, 32, 27, 16, 21, 37, 41, 16, 27, 23,
  28, 50, 44, 3, 23, 4, 38, 10, 42, 32, 43, 13, 27, 43, 50, 46, 5, 12, 45, 17,
  20, 31, 32, 20, 32, 25, 31, 23, 26, 23, 24, 21, 33, 38, 36, 9, 46, 26, 49,
];
let arrayGenap = [];
let arrayGanjil = [];
let min = array[0];
let max = array[0];
let total = 0;
let avg = 0;

// BUAT ARRAY DENGAN JUMLAH 100 INDEX

// for (let i = 0; i < 100; i++) {
//   array.push(Math.floor(Math.random() * 50) + 1);
// }

// PECAH MENJADI 2 ARRAY BERDASARKAN INDEX GANJIL ATAUPUN INDEX GENAP 

for (let i = 0; i < array.length; i++) {
  if (i % 2 == 0) {
    arrayGenap.push(array[i]);
  } else {
    arrayGanjil.push(array[i]);
  }
}

// MENCARI PERHITUNGAN MIN

for (let i = 0; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }

  // MENCARI PERHITUNGAN MAX

  if (array[i] > max) {
    max = array[i];
  }

  // MENCARI PERHITUNGAN TOTAL

  total += array[i];
}

// MENCARI PERHITUNGAN RATA RATA

avg = total / array.length;

console.log("Array Genap: " + arrayGenap);
console.log("Array Ganjil: " + arrayGanjil);

console.log("Nilai minimum: " + min);
console.log("Nilai maksimum: " + max);
console.log("Nilai total: " + total);
console.log("Nilai rata-rata: " + avg);
