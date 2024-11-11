import React, { useState } from "react";
import { Text, StyleSheet, View, Alert, TouchableOpacity } from "react-native";
import { Avatar } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";

const Home = () => {
  const [avatarUri, setAvatarUri] = useState(
    "https://randomuser.me/api/portraits/men/36.jpg"
  );

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync(); //Solicitamos permiso para abrir la galeria

    if (!permissionResult) {
      Alert.alert(
        "Permiso Requerido",
        "Es necesario para acceder a la galeria"
      );
      return;
    }

    //Abrimos la galeria
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatarUri(result.assets[0].uri); //Guardamos la uri de la imagen en el estado
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <TouchableOpacity onPress={pickImage}>
          <Avatar
            size={64}
            rounded
            source={{ uri: avatarUri}}
            key={`1`}
          />
        </TouchableOpacity>
      </View>
    </View>
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
    marginLeft: 5,
  },
});
