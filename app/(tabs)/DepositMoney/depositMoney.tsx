import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, Button } from "react-native";
import { useUsuarios } from "../../context/UsuariosContext";
import { lightColors, PricingCard } from "@rneui/themed";
import { Input } from "@rneui/base";
import DepositMoneyComponent from "../../components/depositMoney/depositMoneyComponent";

const DepositMoney = () => {
  const { currentUser } = useUsuarios();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elegi como queres ingresar dinero</Text>

      <DepositMoneyComponent currentUser={currentUser} />
    </View>
  );
};

export default DepositMoney;

const styles = StyleSheet.create({
  container: {
    flex: 14,
    paddingTop: 20,
    backgroundColor: "#15a6bd",
    paddingHorizontal: 10,
  },
  title: {
    color: "#3c5066",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
});
