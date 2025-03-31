import { Alert } from "react-native";
import crearPago from "../../utils/crearPago";
import usePutDSaldoUser from "../../utils/hooks/usePutSaldoUser";
import { Usuario } from "../../utils/types/types";
import { Dispatch, SetStateAction } from "react";

export const handleDeposito = async (
  monto: string,
  setMonto: Dispatch<SetStateAction<string>>,
  setErrorIngreso: Dispatch<SetStateAction<boolean>>,
  currentUser: Usuario | null,
  setCurrentUser: Dispatch<SetStateAction<Usuario | null>>,
  refetchUsuarios: () => void
) => {
  const montoNumber = parseFloat(monto);

  if (isNaN(montoNumber) || montoNumber <= 0) {
    setErrorIngreso(true);
    return;
  }

  setErrorIngreso(false);

  try {
    const pagoExitoso = await crearPago(currentUser?.email, montoNumber);

    if (pagoExitoso) {
      const nuevoSaldo = (currentUser?.saldo || 0) + montoNumber;

      const updateValue = await usePutDSaldoUser(
        currentUser?.email,
        nuevoSaldo
      );

      if (updateValue.success) {
        setCurrentUser((prevUser) =>
          prevUser ? { ...prevUser, saldo: nuevoSaldo } : prevUser
        );
        refetchUsuarios();
        Alert.alert("Éxito", "El saldo se ha actualizado correctamente");
      } else {
        Alert.alert("Error", "No se pudo actualizar el saldo");
      }

      setMonto("");
    }
  } catch (error) {
    console.error("Error al procesar el pago", error);
  }
};
