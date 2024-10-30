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
import { Button, Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Link, useRouter } from "expo-router";

export default function App() {
  const [errorUser, setErrorUser] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const router = useRouter();

  const handleUser = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    setUser(value);

    if (!value) {
      setErrorUser(true);
    } else {
      setErrorUser(false);
    }
  };

  const handlePass = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    setPass(value);

    if (!value) {
      setErrorPass(true);
    } else {
      setErrorPass(false);
    }
  };

  const handleContinue = (e: GestureResponderEvent) =>{
    e.preventDefault();

    //router.push('/Home/home');
    console.log('Enter')
    console.log('user', user)
    console.log('pass', pass)
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/vinkLogo.png")} />
      <Text style={styles.textTitle}> VINK </Text>

      <ScrollView>
        <Input
          containerStyle={{
            minWidth: 350,
            backgroundColor: "#2e91a0",
            marginHorizontal: 10,
            marginTop: 50,
          }}
          errorMessage={
            errorUser ? "Oops! Usuario incorrecto o no existe." : ""
          }
          errorStyle={{}}
          errorProps={{}}
          label="Usuario"
          labelStyle={{ color: "black" }}
          labelProps={{}}
          leftIcon={<Icon name="account-outline" size={20} />}
          placeholder="Ingrese Su Usuario"
          placeholderTextColor="black"
          onChange={handleUser}
        />
        <Input
          containerStyle={{
            backgroundColor: "#2e91a0",
            marginHorizontal: 10,
            marginTop: 50,
          }}
          errorMessage={errorPass ? "Oops! Contraseña incorrecta." : ""}
          errorStyle={{}}
          errorProps={{}}
          label="Contraseña"
          labelStyle={{ color: "black" }}
          labelProps={{}}
          leftIcon={<Icon name="key" size={20} />}
          placeholder="Ingrese Su Contraseña"
          placeholderTextColor="black"
          onChange={handlePass}
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
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
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
          disabledStyle={{backgroundColor: '#b8f4fd'}}
          onPress={handleContinue}
        />
        </View>

        <View style={styles.containerLink}>
          <Link style={styles.linkPass} href={'/Password/password'}>Olvide mi contraseña</Link>
          <Link style={styles.linkRegister} href={'/Register/register'}>Registrarme</Link>
        </View>
      </ScrollView>
    </View>
  );
}

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
  buttonCont:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerLink:{
    display: 'flex',
    alignItems: 'center',
  },
  linkPass:{
    color: '#285f68'
  },
  linkRegister:{
    color: '#285f68', 
    marginTop: 5
  }
});
