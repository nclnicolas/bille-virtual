import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useUsuarios } from "../../context/UsuariosContext";
import TransferComponent from "../../components/transfer/transferComponent";

const Transfer = () => {
  const { currentUser, setCurrentUser, refetchUsuarios } = useUsuarios();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}> Transferi dinero a quien quieras... </Text>
        <TransferComponent />
      </View>
    </>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  container: {
    flex: 14,
    paddingTop: 50,
    backgroundColor: "#15a6bd",
    paddingHorizontal: 10,
  },
  text: {
    color: "#3c5066",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
});
