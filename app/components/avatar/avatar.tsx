import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { Avatar } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import usePutAvatarUser from "../../utils/hooks/usePutAvatarUser";

const AvatarComponent = (currentUser: any) => {
  const [avatarUri, setAvatarUri] = useState(currentUser?.current?.avatar);
  
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
      const newAvatarUri = result.assets[0].uri;
      setAvatarUri(newAvatarUri); //Guardamos la uri de la imagen en el estado

      try {
        const updatedResponse = await usePutAvatarUser(
          currentUser?.current?.email,
          newAvatarUri
        );
        if (updatedResponse.success) {
          Alert.alert("Éxito", "El avatar se ha actualizado correctamente");
        } else {
          Alert.alert("Error", "No se pudo actualizar el avatar");
        }
      } catch (error) {
        console.error("Error al actualizar el avatar:", error);
        Alert.alert("Error", "Hubo un problema al actualizar el avatar");
      }
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <Avatar
        size={64}
        rounded
        icon={{ name: "" }}
        source={{ uri: avatarUri }}
        key={`1`}
      />
    </TouchableOpacity>
  );
};

export default AvatarComponent;
