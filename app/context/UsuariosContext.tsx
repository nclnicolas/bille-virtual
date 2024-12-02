import React, { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Usuario } from "../utils/types/types";

interface UsuariosContextType {
  allUsuarios: Usuario[];
  currentUser: Usuario | null;
  setCurrentUser: Dispatch<SetStateAction<Usuario | null>>;
}

const UsuariosContext = createContext<UsuariosContextType>({
  allUsuarios: [],
  currentUser: null,
  setCurrentUser: () => {},
});

export const useUsuarios = () => useContext(UsuariosContext);

export default UsuariosContext;
