import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { lightColors } from "@rneui/themed";
import { Input } from "@rneui/base";
import { HomePageProps } from "../../utils/types/types";
import * as Clipboard from "expo-clipboard";
import { handleDeposito } from "../utils/functions";

const DepositMoneyComponent: React.FC<HomePageProps> = ({
  currentUser,
  setCurrentUser,
  refetchUsuarios,
}) => {
  const [monto, setMonto] = useState("");
  const [errorIngreso, setErrorIngreso] = useState(false);
  const alias = `${currentUser?.nombre}.${currentUser?.dni}.vink`;

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
  };

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Mi Banco</Text>
        <Text style={styles.cardPrice}>${currentUser?.saldo.toFixed(2)}</Text>
        <View style={styles.aliasContainer}>
          <Text style={styles.cardInfo}>Alias: {alias}</Text>
          <TouchableOpacity
            style={styles.copyButton}
            onPress={() => copyToClipboard(alias)}
          >
            <Text>Copiar</Text>
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.cardInfo}>CVU: {cvu}</Text> */}
        <View style={styles.inputContainer}>
          <Input
            leftIcon={{ type: "material", name: "attach-money" }}
            placeholder="Ingrese un monto"
            errorStyle={{ color: "red" }}
            errorMessage={errorIngreso ? "Ingrese un monto valido" : ""}
            keyboardType="decimal-pad"
            value={monto}
            onChangeText={setMonto}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Ingresa Dinero desde mp"
            onPress={() =>
              handleDeposito(
                monto,
                setMonto,
                setErrorIngreso,
                currentUser,
                setCurrentUser,
                refetchUsuarios
              )
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: lightColors.primary,
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  cardPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  cardInfo: {
    fontSize: 14,
    color: "white",
    marginBottom: 5,
  },
  inputContainer: {
    marginTop: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
  aliasContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  copyButton: {
    marginLeft: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    width: 70,
  },
});
export default DepositMoneyComponent;
