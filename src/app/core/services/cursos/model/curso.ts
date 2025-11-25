export interface ICurso {
    id: number | string;
    nombre: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin: Date;
    estado: EstadoCurso;
}

export enum EstadoCurso {
    ACTIVO = 'activo',
    INACTIVO = 'inactivo'
}

export const cursoColumns: string[] = ['id', 'nombre', 'descripcion', 'fechaInicio', 'fechaFin', 'estado','acciones'];