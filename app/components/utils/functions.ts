import { Alert } from "react-native";
import crearPago from "../../utils/crearPago";
import usePutDSaldoUser from "../../utils/hooks/usePutSaldoUser";
import { Usuario } from "../../utils/types/types";
import { Dispatch, SetStateAction } from "react";
import * as Contacts from "expo-contacts";

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

export const abrirAgenda = async (
  setContactos: Dispatch<SetStateAction<Contacts.Contact[]>>,
  setModalVisible: Dispatch<SetStateAction<boolean>>
) => {
  const { status } = await Contacts.requestPermissionsAsync(); //Solicitamos permiso para acceder
  if (status === "granted") {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      pageSize: 1000,
    }); //Ingresamos a los contactos

    const dataNumber = data
      .filter(
        (contacto) => contacto.phoneNumbers && contacto.phoneNumbers.length > 0
      )
      .map((contacto) => ({
        ...contacto,
        phoneNumbers: Array.from(
          new Set(
            contacto.phoneNumbers
              ?.map((num) => num.number?.replace(/\D/g, ""))
              .filter((num) => num)
          )
        ).map((num) => ({
          number: num,
          id: `${contacto.id}-${num}`,
        })),
      }));

    const uniqueContacts = dataNumber.filter(
      (contact, index, self) =>
        index ===
        self.findIndex(
          (t) => t.phoneNumbers[0]?.number === contact.phoneNumbers[0]?.number
        )
    );

    setContactos(uniqueContacts as Contacts.Contact[]);
    setModalVisible(true);
  } else {
    Alert.alert("Permiso denegado", "No puedes acceder a los contactos");
  }
};
