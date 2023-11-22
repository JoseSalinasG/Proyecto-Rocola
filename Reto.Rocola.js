class RocolaX {
    temas = [
        'Billie Jean',
        'THE REAL FOLK BLUES',
        'Nana',
        'Alma de Conquistador',
        'Mujer Amante',
        'La Leyenda del Hada y el Mago',
        'Molinos de Viento',
        'La Danza del Fuego',
        'KOMM, SUSSER',
        "Let's Go",
    ];

    queue = [];

    reproducir(limiteCola) {
        if (limiteCola < 1 || limiteCola > this.temas.length) {
            throw new Error("El límite de la cola no es válido.");
        }

        if (this.queue.length >= limiteCola) {
            let primeraCancion = this.queue.shift();
            this.temas.push(primeraCancion);
        }

        let indiceAleatorio = Math.floor(Math.random() * this.temas.length);
        let cancionElegida = this.temas.splice(indiceAleatorio, 1)[0];
        this.queue.push(cancionElegida);

        return cancionElegida;
    }
}

var rocola = new RocolaX();
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));
console.log(rocola.reproducir(4));