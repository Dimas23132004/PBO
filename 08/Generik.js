// Fungsi generik menggunakan pola
function getElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    }
    throw new Error("Indeks di luar jangkauan");
}

let angka = [40, 50, 60];
let kata = ["empat", "lima", "enam"];

console.log(getElementAtIndex(angka, 1)); // Output: 50
console.log(getElementAtIndex(kata, 0)); // Output: "empat"
