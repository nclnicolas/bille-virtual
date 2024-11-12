import React, { createContext, useContext } from "react";
import { Usuario } from "../utils/types/types";

interface UsuariosContextType {
  allUsuarios: Usuario[];
}

const UsuariosContext = createContext<UsuariosContextType>({ allUsuarios: [] });

export const useUsuarios = () => useContext(UsuariosContext);

export default UsuariosContext;
