import React from "react";
import { Text, StyleSheet, View } from "react-native";
import AvatarComponent from "../../components/avatar/avatar";
import { useUsuarios } from "../../context/UsuariosContext";
import HomePage from "../../components/homePage/homePage";

const Home = () => {
  const { currentUser, setCurrentUser, refetchUsuarios } = useUsuarios();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <AvatarComponent current={currentUser} />

          <Text style={styles.text}>Bienvenido {currentUser?.nombre}</Text>
        </View>

        <HomePage
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          refetchUsuarios={refetchUsuarios}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 14,
    paddingTop: 50,
    backgroundColor: "#15a6bd",
    paddingHorizontal: 10,
  },
  avatar: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    marginBottom: 5,
  },
  text: {
    marginLeft: 20,
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
