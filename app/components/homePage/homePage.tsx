import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import {
  PricingCard,
  lightColors,
  Avatar,
  SocialIcon,
  SocialMediaType,
} from "@rneui/themed";
import { HomePageProps } from "../../utils/types/types";
import Carousel from "./carousel";
import { useRouter } from "expo-router";

type IconData = {
  type: SocialMediaType;
  url: string;
};

const homePage: React.FC<HomePageProps> = ({ currentUser }) => {
  const router = useRouter();
  const alias = `${currentUser?.nombre}.${currentUser?.dni}.vink`;
  const cvu = "0001234567891011223344";

  const avatarButtonText = [
    { iconName: "swap-horiz", title: "Transferir" },
    { iconName: "monetization-on", title: "Prestamo" },
    { iconName: "currency-exchange", title: "Dolar" },
  ];

  const dataList: Partial<IconData>[] = [
    { type: "facebook", url: "https://www.facebook.com/?locale=es_LA" },
    { type: "twitter", url: "https://x.com/?lang=es" },
    { type: "youtube", url: "https://www.youtube.com/?app=desktop&hl=es" },
    { type: "instagram", url: "https://www.instagram.com/" },
    { type: "whatsapp", url: "https://www.whatsapp.com/?lang=es_LA" },
  ];

  const handleSocialIcon = (url: string) => {
    router.push(url);
  };

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

        <View>
          <Text style={styles.carouselText}>
            Conoce alguna de nuestas promos
          </Text>
          <Carousel />
        </View>

        <View>
          <Text style={styles.socialText}>Mira nuestras redes</Text>
          <View style={styles.containerSocial}>
            {dataList.map((item, index) => (
              <SocialIcon
                type={item.type}
                key={index}
                onPress={() => handleSocialIcon(item.url ? item.url : "")}
              />
            ))}
          </View>
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
  imgCarouser: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  containerSocial: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  carouselText: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  socialText: {
    marginTop: 50,
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
