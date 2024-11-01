// Menggunakan List (Array)
let listMahasiswa = ["Dimas", "Puteri", "Mugar"];
listMahasiswa.push("Didi"); // Menambahkan elemen baru
console.log(listMahasiswa); // Output: ["Dimas", "Puteri", "Mugar", "Didi"]

// Menggunakan Set
let setMahasiswa = new Set(["Dimas", "Puteri", "Mugar"]);
setMahasiswa.add("Didi");
setMahasiswa.add("Dimas"); // Tidak akan menambahkan karena Dimas sudah ada
console.log(setMahasiswa); // Output: Set(4) {"Dimas", "Puteri", "Mugar", "Didi"}

// Menggunakan Map
let mapNilai = new Map();
mapNilai.set("Dimas", 90);
mapNilai.set("Puteri", 85);
console.log(mapNilai.get("Dimas")); // Output: 90
