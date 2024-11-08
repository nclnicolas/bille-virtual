import React, { Dispatch, SetStateAction } from "react";
import { Button } from "@rneui/base";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Platform,
  GestureResponderEvent,
  ActivityIndicator,
  Alert,
} from "react-native";
import Inputs from "../inputs";
import DateTimePicker from "@react-native-community/datetimepicker";
import sendUserRegister from "../../utils/sendUserRegister";

const RegistroUser = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [pass, setPass] = useState("");
  const [date, setDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errorName, setErrorName] = useState(false);
  const [errorSurName, setErrorSurName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorDni, setErrorDni] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorDate, setErrorDate] = useState(false);

  const handleInput = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    setData: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<boolean>>
  ) => {
    const value = e.nativeEvent.text;
    setData(value);

    if (!value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === "ios"); // Mantiene el DatePicker visible en iOS
    if (selectedDate) {
      const formattedDate = `${selectedDate
        .getDate()
        .toString()
        .padStart(2, "0")}/${(selectedDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${selectedDate.getFullYear()}`;
      setDate(formattedDate); // Formato DD/MM/YYYY
      setErrorDate(false);
    } else {
      setErrorDate(true);
    }
  };

  const handleRegister = async (e: GestureResponderEvent) => {
    e.preventDefault();
    const validate = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    if (!validate) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
      setLoading(true);

      const result = await sendUserRegister(
        name,
        surName,
        email,
        +dni,
        pass,
        date
      );

      if (result.success) {
        setName("");
        setSurName("");
        setEmail("");
        setDni("");
        setPass("");
        setDate("");

        Alert.alert('Te registraste correctamente','',[{
          text: 'OK',
          onPress: () => console.log('OK')
        }] )
      } else {
        console.log("Error al registrar usuario");
      }
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../app/assets/vinkLogo.png")}
      />
      <Text style={styles.textTitle}> VINK </Text>

      <Text>Seamos juntos parte de esto!</Text>

      <ScrollView>
        <Inputs
          errorMessage={errorName}
          textError={"Oops! Nombre Obligatorio."}
          nameIcon={"person"}
          valueInput={name}
          label={"Nombre"}
          placeHolder={"Ingrese Su Nombre"}
          handleFunction={(e) => handleInput(e, setName, setErrorName)}
        />

        <Inputs
          errorMessage={errorSurName}
          textError={"Oops! Apellido Obligatorio"}
          nameIcon={"person"}
          valueInput={surName}
          label={"Apellido"}
          placeHolder={"Ingrese Su Apellido"}
          handleFunction={(e) => handleInput(e, setSurName, setErrorSurName)}
        />

        <Inputs
          errorMessage={errorDate}
          textError={"Oops! Fecha Obligatoria"}
          nameIcon={"person"}
          valueInput={date}
          label={"Fecha de Nac."}
          placeHolder={"Ingrese Su Nacimiento"}
          handleFunction={() => {}}
          onFocus={() => setShowDatePicker(true)}
        />

        {showDatePicker && (
          <DateTimePicker
            value={date ? new Date(date) : new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Inputs
          errorMessage={errorEmail}
          textError={"Oops! Email incorrecto"}
          nameIcon={"person"}
          valueInput={email}
          typeInput="email-address"
          label={"Email"}
          placeHolder={"Ingrese Su Email"}
          handleFunction={(e) => handleInput(e, setEmail, setErrorEmail)}
        />

        <Inputs
          errorMessage={errorDni}
          textError={"Oops! Dni incorrecto"}
          nameIcon={"person"}
          valueInput={dni}
          typeInput="numeric"
          label={"Dni"}
          placeHolder={"Ingrese Su Dni"}
          handleFunction={(e) => handleInput(e, setDni, setErrorDni)}
        />

        <Inputs
          errorMessage={errorPass}
          textError={"Oops! Contraseña incompleta"}
          nameIcon={"person"}
          valueInput={pass}
          secureText={true}
          typeInput="default"
          label={"Contraseña"}
          placeHolder={"Ingrese Su Contraseña"}
          handleFunction={(e) => handleInput(e, setPass, setErrorPass)}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={styles.buttonCont}>
            <Button
              title={"Registrarme"}
              titleStyle={{ fontWeight: "bold", fontSize: 18, color: "black" }}
              linearGradientProps={{
                colors: ["#FF9800", "#F44336"],
                start: [1, 0],
                end: [0.2, 0],
              }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: "transparent",
                borderRadius: 20,
              }}
              containerStyle={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                width: 200,
                marginVertical: 50,
              }}
              icon={{
                name: "arrow-right",
                type: "font-awesome",
                size: 15,
                color: "white",
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
              disabled={
                !name || !surName || !email || !dni || !pass || !date
                  ? true
                  : false
              }
              disabledStyle={{ backgroundColor: "#b8f4fd" }}
              onPress={handleRegister}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default RegistroUser;

const styles = StyleSheet.create({
  container: {
    flex: 14,
    alignItems: "center",
    backgroundColor: "#15a6bd",
    paddingHorizontal: 10,
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
