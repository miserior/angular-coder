export interface IAlumno {
    id: number | string;
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
}

export const alumnoColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'email','acciones'];