import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Usuario } from "../utils/types/types";
import useGetData from "../utils/hooks/useGetData";

interface UsuariosContextType {
  allUsuarios: Usuario[];
  currentUser: Usuario | null;
  setCurrentUser: Dispatch<SetStateAction<Usuario | null>>;
  refetchUsuarios: () => void;
}

const UsuariosContext = createContext<UsuariosContextType | undefined>(
  undefined
);

export const UsuariosProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { usuarios, refetch } = useGetData();
  const [currentUser, setCurrentUser] = useState<Usuario | null>(null);

  return (
    <UsuariosContext.Provider
      value={{
        allUsuarios: usuarios,
        currentUser,
        setCurrentUser,
        refetchUsuarios: refetch,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export const useUsuarios = () => {
  const context = useContext(UsuariosContext);
  if (!context) {
    throw new Error("useUsuarios debe usarse dentro de UsuariosProvider");
  }
  return context;
};

export default UsuariosContext;
