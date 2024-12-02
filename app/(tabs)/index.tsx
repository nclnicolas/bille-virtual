import React from "react";
import Login from "../components/login/login";
import { useUsuarios } from "../context/UsuariosContext";

export default function App() {
  const { allUsuarios, setCurrentUser } = useUsuarios();

  return <Login allUsuarios={allUsuarios} setCurrentUser={setCurrentUser} />;
}
