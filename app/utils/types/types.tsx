export interface Usuario {
    apellido: string;
    dni: number;
    email: string;
    fechaNac: string;
    nombre: string;
    pass: string;
    uid: string;
  }
  
export interface UsuariosResponse {
    allUsuarios: Usuario[];
  }