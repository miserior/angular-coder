export interface IAlumno {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
}

export const alumnoColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'email','acciones'];