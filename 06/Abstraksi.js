// Kelas abstrak tidak dapat diinstansiasi secara langsung
class Kendaraan {
    constructor(jenis) {
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas Kendaraan adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak
    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Motor extends Kendaraan {
    constructor() {
        super('Motor');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak dengan roda.`);
    }
}

class Tank extends Kendaraan {
    constructor() {
        super('Tank');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di atas tanah.`);
    }
}

// Penggunaan
const motor = new Motor();
motor.bergerak(); // Output: Motor bergerak dengan roda.

const tank = new Tank();
tank.bergerak(); // Output: Tank bergerak di atas tanah.
