class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;  
    }

    getFullName () {
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota (newMascota) {
        if(true){
           this.mascotas.push(newMascota)
        }   
    } 
    
    countMascotas () {
        const cantidadDeMascotas = this.mascotas
        console.log (cantidadDeMascotas.length)
    }

    addBook (nombre, autor) {
        if(true){
            this.libros.push({nombre, autor})
        }
    }

    getBooksNames () {
        const booksNames = this.libros

        for(const nombre of booksNames){
            let lista = []
            if(true){
                lista.push(nombre.nombre)
            }
            console.log(lista)
        }
    }
}

const usuario1 = new Usuario("Matias", "Menendez", [{nombre:"Harry Potter", autor: "J K Rolling"}], ['Perro', ' Gato']);


usuario1.getFullName();

usuario1.addMascota('Loro');

usuario1.countMascotas();

usuario1.addBook("Maze Runner", "James Dashner");

usuario1.getBooksNames();

console.log(usuario1);