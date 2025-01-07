import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const Carousel = () => {
  return (
    <Swiper style={{ height: 200 }} showsPagination loop>
      <View>
        <Image
          source={require("../../assets/promoOne.jpg")}
          style={styles.imgCarouser}
        />
      </View>
      <View>
        <Image
          source={require("../../assets/promoMc.jpg")}
          style={styles.imgCarouser}
        />
      </View>
      <View>
        <Image
          source={require("../../assets/promoCarrefour.jpg")}
          style={styles.imgCarouser}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  imgCarouser: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default Carousel;
