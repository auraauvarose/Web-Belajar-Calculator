function reloadQuiz() {
  result.textContent = "";
  window.location.reload();
}

/* Variabel */
let nama = "Aura";
let umur = 16;
nama = "Bayu"; // Varibael tipe : let dapat di perbarui
console.log(nama);

let hello = "Hello World";
let masange;

masange = hello;

alert(hello);
alert(masange);

const naMA = "Aura auvarose"; // Tapi variabel tipe : constan tidak dapat diperbarui karena sifat nya mutlak
naMa = "raka";
console.log(naMA);

/* Tipe Data Javascript */
// Tipe number
let n = 123;
n = 14.081;
console.log(`number nya adalah ${n}`);

/* Tipe Infinity mewakili Infinity matematis ∞. Ia merupakan nilai spesial yang lebih besar dari angka apapun.
   Kita bisa mendapatkannya sebagai hasil dari pembagian oleh nol */

console.log(1 / 0); // infinity

/* NaN mewakili error komputasional. Ia merupakan hasil operasi matematis yang salah atau tak-terdefinisi, misalnya: */
console.log("Number tersebut" / 981); // NaN

// Tipe Boolean
let boOl = 4 > 1; // True
console.log(boOl);

let FalSe = 1 > 10; // False
console.log(FalSe);

/* Interaksi Prompt */
// prompt
let age = prompt("Masukan umur anda?", ""); // prompt untuk input sebuah user
alert(`Umur anda ${age}`);

/* Konversi Tipe pada javascipt */
let value = true; // Konversi boolean ke
console.log(typeof value);

value = String(value); // boolean ke string
console.log(typeof value);

// Konversi Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // False

console.log(Boolean("Hello")); // True
console.log(Boolean("")); // False

/* Operator MTK */
let a = +prompt("Masukan angka pertama", 1); // jika tanda panah kiri prompt tidak ada
let b = +prompt("Masukan nagka ke dua", 2); // nanti jumlahnya akan menjadi string yaitu 12
console.log(`Hasil dari penambahan anda : ${a + b}`);

/* Perbandingan */
console.log(1 < 10); // True *karena 1 lebih besar dari 10*
console.log(10 > 100); // False *karena 100 lebih besar dari 10*
console.log(10 != 1); // True *karena berbeda*
console.log(1 == 10); // False *karena angka tidak sama*

/* Kondisi bercabang: if, '?' */
let namaSaya = prompt("Siapa nama ku?", "");

if (namaSaya == "Aura") {
  console.log("Kamu benar");
} else {
  // termuat jika salah memasukan jawabanb
  console.log("Kamu tidak mmebaca halaman ku :(");
}

let tahun = prompt("Aku lahir di tahun berapa?", "");

if (tahun > 2017) {
  console.log("APA!! kamu pikir aku anak kecil?");
} else if (tahun < 2017) {
  console.log("Aku tidak setua itu");
} else if (tahun == 2024) {
  console.log("Kamu serius, aku lahir di tahun 2024");
} else {
  console.log("Tepat sekali aku tahun 2017");
}

/* Operator logika */

// || (OR) or diwakili dengan garis 2 vertikal
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

tnt = 19;
if (tnt > 10 || tnt < 1) {
  console.log("kalau ada berarti true");
}

// && (AND) and diwakili dengan simbol &&
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

// !(NOT) "Menjadi kebalikan nya true dan false"
console.log(!true); // false
console.log(!0); // true

let username = prompt("Siapa ini? ", "");

if (username === "Aura") {
  let pass = prompt("masukan paswword kamu: ", "");

  if (pass === "7") {
    alert("Welcome Aura");
    console.log("Welcome Aura");
  } else if (pass === "" || pass === null) {
    alert("Masukan yang benar");
  } else {
    alert("Ada kesalahan dalam pasword");
  }
} else if (username === "" || username === null) {
  alert("Batal");
} else {
  alert("Aku tidak tau kamu");
}

/* Perulangan while dan for */
// Perulangan while
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
