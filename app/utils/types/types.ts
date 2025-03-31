import { Dispatch, SetStateAction } from "react";

export interface Usuario {
    apellido: string;
    dni: number;
    email: string;
    fechaNac: string;
    nombre: string;
    pass: string;
    avatar: string;
    uid: string;
    saldo: number;
  }
  
export interface UsuariosResponse {
    allUsuarios: Usuario[];
  }

export interface TypeUsuarioContext{
  allUsuarios: Usuario[];
  setCurrentUser: Dispatch<SetStateAction<Usuario | null>>
}

export interface HomePageProps{
  currentUser: Usuario | null;
  setCurrentUser: Dispatch<SetStateAction<Usuario | null>>;
  refetchUsuarios: any;
}