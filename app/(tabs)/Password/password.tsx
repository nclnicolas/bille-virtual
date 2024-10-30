import { Button, Icon, Input } from "@rneui/base";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  GestureResponderEvent,
  ActivityIndicator,
} from "react-native";
import sendMail from "../../utils/sendMail";

const Password = () => {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    setEmail(value);

    if (!value) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const handleContinue = async (e: GestureResponderEvent) => {
    e.preventDefault();
    const validate = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    if (!validate) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
      setLoading(true);

      const result = await sendMail(email);

      if (result.success) {
        setEmail("");
      } else {
        console.log("Error al enviar el correo");
      }

      setLoading(false);
    }

    //router.push('/Home/home');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../assets/vinkLogo.png")} />
      <Text style={styles.textTitle}> VINK </Text>

      <Text>Olvidaste la contraseña?</Text>

      <Input
        containerStyle={{
          minWidth: 350,
          backgroundColor: "#2e91a0",
          marginHorizontal: 10,
          marginTop: 50,
        }}
        errorMessage={errorEmail ? "Oops! Email incorrecto." : ""}
        errorStyle={{}}
        errorProps={{}}
        label="Email"
        labelStyle={{ color: "black" }}
        labelProps={{}}
        leftIcon={<Icon name="email" size={20} />}
        placeholder="Ingresa Tu Email"
        placeholderTextColor="black"
        keyboardType="email-address" //Input tipo email
        autoCapitalize="none" //Evitamos mayusculas automaticas
        value={email}
        onChange={handleEmail}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.buttonCont}>
          <Button
            title={"Enviar"}
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
            disabled={!email ? true : false}
            disabledStyle={{ backgroundColor: "#b8f4fd" }}
            onPress={handleContinue}
          />
        </View>
      )}
    </View>
  );
};

export default Password;

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
