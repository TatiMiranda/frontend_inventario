// Definición del módulo usuario

export function crearUsuario(nombre, email) {
    return {
        nombre,
        email,
        creado: new Date()
    };
}

export function mostrarUsuario(usuario) {
    console.log(`Usuario: ${usuario.nombre}, Email: ${usuario.email}`);
}

// Puedes agregar más funciones relacionadas con usuario aquí