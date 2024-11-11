import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  GestureResponderEvent,
} from "react-native";
import { Button } from "@rneui/base";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import Inputs from "../inputs";
import { useGetData } from "../../utils/hooks/useGetData";
import { UsuariosResponse } from "../../utils/types/types";

const Login = () => {
  const [errorUser, setErrorUser] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState<UsuariosResponse | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const resData = await useGetData();
      setData(resData);
    };

    fetchData();
  }, []);

  const handleUser = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    setUser(value);
    setErrorUser(!value);
  };

  const handlePass = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    setPass(value);
    setErrorPass(!value);
  };

  const handleContinue = async (e: GestureResponderEvent) => {
    e.preventDefault();

    const userExist = data?.allUsuarios.some(
      (usuario) => usuario.email === user && usuario.pass === pass
    );

    if (userExist) {
      setErrorPass(false);
      setErrorUser(false);
      setUser("");
      setPass("");

      router.push("Home/home");
    } else {
      setErrorPass(true);
      setErrorUser(true);
      console.log("Ingreso incorrecto");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../app/assets/vinkLogo.png")}
      />
      <Text style={styles.textTitle}> VINK </Text>

      <ScrollView>
        <Inputs
          errorMessage={errorUser}
          textError={"Oops! Usuario incorrecto o no existe."}
          nameIcon={"person"}
          valueInput={user}
          label={"Usuario"}
          typeInput={"email-address"}
          placeHolder={"Ingrese Su Usuario"}
          handleFunction={handleUser}
        />
        <Inputs
          errorMessage={errorPass}
          textError={"Oops! Contraseña incorrecta."}
          nameIcon={"key"}
          valueInput={pass}
          label={"Contraseña"}
          secureText={true}
          placeHolder={"Ingrese Su Contraseña"}
          handleFunction={handlePass}
        />

        <View style={styles.buttonCont}>
          <Button
            title={"Ingresar"}
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
            disabled={!user || !pass ? true : false}
            disabledStyle={{ backgroundColor: "#b8f4fd" }}
            onPress={handleContinue}
          />
        </View>

        <View style={styles.containerLink}>
          <Link style={styles.linkPass} href={"/Password/password"}>
            Olvide mi contraseña
          </Link>
          <Link style={styles.linkRegister} href={"/Registro/registro"}>
            Registrarme
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

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
  containerLink: {
    display: "flex",
    alignItems: "center",
  },
  linkPass: {
    color: "#285f68",
  },
  linkRegister: {
    color: "#285f68",
    marginTop: 5,
  },
});
