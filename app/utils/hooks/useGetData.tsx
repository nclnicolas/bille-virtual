import { useEffect, useState } from "react";

const useGetData = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://192.168.0.19:8080/datos/usuarios");

      if (response.ok) {
        const resData = await response.json();
        setUsuarios(resData?.allUsuarios || []);
        setError(null);
      } else {
        setError("Error en la peticion GETUSUARIOS");
      }
    } catch (error) {
      console.log(error);
      setError("Error en la conexion");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return { usuarios, loading, error, refetch: fetchUsuarios };
};

export default useGetData;
