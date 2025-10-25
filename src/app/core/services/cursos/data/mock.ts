import { EstadoCurso, ICurso } from "../model/curso";

export const mockCursos: ICurso[] = [
    {
        id: 1,
        nombre: 'Introducción a Angular',
        descripcion: 'Curso básico sobre el framework Angular.',
        fechaInicio: new Date('2024-01-15'),
        fechaFin: new Date('2024-03-15'),
        estado: EstadoCurso.ACTIVO,
    },
    {
        id: 2,
        nombre: 'Desarrollo de Aplicaciones Web',
        descripcion: 'Curso avanzado sobre desarrollo web con Angular y otras tecnologías.',    
        fechaInicio: new Date('2024-02-01'),
        fechaFin: new Date('2024-04-30'),
        estado: EstadoCurso.ACTIVO,
    },
    {
        id: 3,
        nombre: 'Fundamentos de TypeScript',
        descripcion: 'Curso para aprender los conceptos básicos de TypeScript.',
        fechaInicio: new Date('2023-11-10'),
        fechaFin: new Date('2023-12-20'),
        estado: EstadoCurso.ACTIVO,
    },
    
]