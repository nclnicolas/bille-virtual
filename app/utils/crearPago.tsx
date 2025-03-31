import { Linking } from "react-native";

const crearPago = async (email: string | undefined, monto: number) => {
  try {
    const response = await fetch(
      "http://192.168.0.19:8080/crear-pago",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          monto: monto,
          email: email,
        }),
      }
    );

    const data = await response.json();

    if (data.init_point) {
      Linking.openURL(data.init_point);
    }

    if (!response.ok) {
      console.error("Error en la respuesta del backend:", data);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error al generar el pago", error);
    return false;
  }
};

export default crearPago;
