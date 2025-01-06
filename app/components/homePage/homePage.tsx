import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { PricingCard, lightColors, Avatar } from "@rneui/themed";
import { HomePageProps } from "../../utils/types/types";


const homePage: React.FC<HomePageProps> = ({currentUser}) => {
  const alias = `${currentUser?.nombre}.${currentUser?.dni}.vink`;
  const cvu = "0001234567891011223344";

  const avatarButtonText = [
    { iconName: "swap-horiz", title: "Transferir" },
    { iconName: "monetization-on", title: "Prestamo" },
    { iconName: "currency-exchange", title: "Dolar" },
  ];

  return (
    <>
      <ScrollView>
        <PricingCard
          color={lightColors.primary}
          title="Tu Cuenta"
          price="$10.000,00"
          info={[`Alias: ${alias}`, `CVU: ${cvu}`]}
          button={{
            title: "Ingresar Dinero",
            onPress: () => {
              console.log("Hola");
            },
          }}
        />

        <View style={styles.avatarButton}>
          {avatarButtonText.map((item, index) => (
            <View style={styles.avatarButtonContainer} key={index}>
              <Avatar
                size={70}
                rounded
                containerStyle={{
                  borderColor: "orange",
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
                titleStyle={{ fontSize: 12 }}
                icon={{
                  name: item.iconName,
                  type: "material",
                  color: "#ff5606",
                }}
              />
              <Text style={styles.avatarButtonText}>{item.title}</Text>
            </View>
          ))}
        </View>


      </ScrollView>
    </>
  );
};

export default homePage;

const styles = StyleSheet.create({
  avatarButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  avatarButtonContainer: {
    alignItems: "center",
  },
  avatarButtonText: {
    marginTop: 8,
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
});
