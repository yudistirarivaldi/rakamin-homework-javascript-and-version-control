// MEMBANDINGKAN HASIL KEDUA ARRAY

const arrEven = [6, 10, 4, 8, 2];
const arrOdd = [5, 11, 9, 1, 7, 3];

let minEven = arrEven[0]; // nilai minimum pada array genap
let maxOdd = arrOdd[0]; // nilai maksimum pada array ganjil
let sumEven = 0; // total nilai pada array genap
let sumOdd = 0; // total nilai pada array ganjil

for (let i = 0; i < arrEven.length; i++) {
  if (arrEven[i] < minEven) {
    minEven = arrEven[i]; // update nilai minimum pada array genap jika ada nilai yang lebih kecil
  }
  sumEven += arrEven[i]; // tambahkan nilai pada array genap ke total
}

for (let i = 0; i < arrOdd.length; i++) {
  if (arrOdd[i] > maxOdd) {
    maxOdd = arrOdd[i]; // update nilai maksimum pada array ganjil jika ada nilai yang lebih besar
  }
  sumOdd += arrOdd[i]; // tambahkan nilai pada array ganjil ke total
}

const avgEven = sumEven / arrEven.length; // rata-rata pada array genap
const avgOdd = sumOdd / arrOdd.length; // rata-rata pada array ganjil

if (minEven > maxOdd) {
  console.log("Nilai minimum lebih besar pada array genap");
} else {
  console.log("Nilai maksimum lebih besar pada array ganjil");
}

if (sumEven === sumOdd) {
  console.log("Total memiliki nilai sama antara array genap dan ganjil");
} else if (sumEven > sumOdd) {
  console.log("Total lebih besar pada array genap");
} else {
  console.log("Total lebih besar pada array ganjil");
}

if (avgEven > avgOdd) {
  console.log("Rata-rata lebih besar pada array genap");
} else {
  console.log("Rata-rata lebih besar pada array ganjil");
}
