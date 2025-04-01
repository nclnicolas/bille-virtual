import React from "react";
import {
  Modal,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { ModalContactsProps } from "../../utils/types/types";

const ModalContactsComponent: React.FC<ModalContactsProps> = ({
  modalVisible,
  setModalVisible,
  contactos,
}) => {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Selecciona un contacto</Text>
        <FlatList
          data={contactos}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => {
                console.log(`Seleccionaste: ${item.name}`);
                setModalVisible(false);
              }}
            >
              <Text style={styles.contactName}>{item.name}</Text>
              {item.phoneNumbers?.map((num, index) => (
                <Text key={index} style={styles.contactNumber}>
                  {num.number}
                </Text>
              ))}
            </TouchableOpacity>
          )}
        />
        <Button title="Cerrar" onPress={() => setModalVisible(false)} />
      </View>
    </Modal>
  );
};

export default ModalContactsComponent;

const styles = StyleSheet.create({
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
