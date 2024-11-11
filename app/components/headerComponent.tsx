import { StyleSheet, View, Text, Image } from "react-native";

interface headerProp {
  title: string;
}

const HeaderComponent = ({ title }: headerProp) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image source={require("../assets/vinkLogo.png")} style={styles.img} />
    <Text style={styles.text}>{title}</Text>
  </View>
);

export default HeaderComponent;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    marginRight: 15,
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
