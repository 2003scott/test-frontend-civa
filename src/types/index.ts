
export interface Futbolista {
    id:              number,
    nombres:         string,
    apellidos:       string,
    fechaNacimiento: string,
    caracteristicas: string,
    posicion:        Posicion,
}

export interface Posicion {
    codPos:   number,
    position: string,
}

