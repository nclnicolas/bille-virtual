import React from "react";
import Login from "../components/login/login";
import { useUsuarios } from "../context/UsuariosContext";

export default function App() {
  const { allUsuarios } = useUsuarios();

  return <Login allUsuarios={allUsuarios} />;
}
