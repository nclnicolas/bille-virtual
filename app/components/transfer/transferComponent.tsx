import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Input, lightColors } from "@rneui/base";
import { Avatar } from "@rneui/themed";
import * as Contacts from "expo-contacts";
import { abrirAgenda } from "../utils/functions";
import ModalContactsComponent from "../modalContacts/modalContactsComponent";

const TransferComponent = () => {
  const [contactos, setContactos] = useState<Contacts.Contact[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ingresa el alias</Text>
        <View style={styles.aliasContainer}>
          <Text style={styles.cardInfo}>Envia dinero a tus contactos</Text>
          <TouchableOpacity
            style={styles.copyButton}
            onPress={() => abrirAgenda(setContactos, setModalVisible)}
          >
            <Avatar
              size={35}
              rounded
              icon={{ name: "person", type: "material" }}
              containerStyle={{ backgroundColor: "blue" }}
            />
          </TouchableOpacity>
        </View>

        {/* MODAL PARA LISTAR CONTACTOS */}
        <ModalContactsComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          contactos={contactos}
        />

        {/* <Text style={styles.cardInfo}>CVU: {cvu}</Text> */}
        <View style={styles.inputContainer}>
          <Input
            leftIcon={{ type: "material", name: "person-outline" }}
            placeholder="Ingresa un alias"
            errorStyle={{ color: "red" }}
            keyboardType="decimal-pad"
            //value={10000}
            //onChangeText={setMonto}
          />
          <Input
            leftIcon={{ type: "material", name: "attach-money" }}
            placeholder="Ingrese un monto"
            errorStyle={{ color: "red" }}
            keyboardType="decimal-pad"
            //value={10000}
            //onChangeText={setMonto}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Ingresa Dinero desde mp" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default TransferComponent;

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
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contactNumber: {
    fontSize: 14,
    color: "gray",
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
