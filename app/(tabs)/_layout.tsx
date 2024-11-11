import { Tabs, usePathname, useRouter } from "expo-router";
import { Icon } from "@rneui/base";
import { TouchableOpacity } from "react-native";
import HeaderComponent from "../components/headerComponent";

const HomeTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log("path", pathname);

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "white",
          height: 60,
        },
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "black",
        tabBarLabelStyle: { fontSize: 15 },
        headerTintColor: "blue",
        headerTitleStyle: {
          textTransform: "uppercase",
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
          title: "",
          headerStyle: {
            backgroundColor: "#15a6bd",
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          tabBarInactiveTintColor: "",
          tabBarStyle: {
            backgroundColor: "#15a6bd",
            borderTopWidth: 0,
          },
        }}
      />
      <Tabs.Screen
        name="Password/password"
        options={{
          href: null,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#15a6bd",
          },
          headerLeft: () => (
            <Icon
              name="arrow-back"
              size={30}
              color="#b8f4fd"
              style={{ marginLeft: 10 }}
              onPress={() => router.back()}
            />
          ),
          tabBarStyle: {
            backgroundColor: "#15a6bd",
            borderTopWidth: 0,
          },
        }}
      />
      <Tabs.Screen
        name="Registro/registro"
        options={{
          href: null,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#15a6bd",
          },
          headerLeft: () => (
            <Icon
              name="arrow-back"
              size={30}
              color="#b8f4fd"
              style={{ marginLeft: 10 }}
              onPress={() => router.back()}
            />
          ),
          tabBarStyle: {
            backgroundColor: "#15a6bd",
            borderTopWidth: 0,
          },
        }}
      />

      <Tabs.Screen
        name="Home/home"
        options={{
          title: 'Home',
          //headerTitle: () => <HeaderComponent title='Vink'/>,
          headerShown: false, //Ocultamos el header
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#15a6bd",
          },
          tabBarStyle: {
            backgroundColor: "#15a6bd",
            borderTopWidth: 0,
          },
          tabBarIcon({ focused }) {
            return <Icon name="home" />;
          },
          tabBarButton: (
            props //permite mostrar el tab solo si estamos en esta pestaña
          ) =>
            pathname !== "/" &&
            pathname !== "/Password/password" &&
            pathname !== "/Registro/registro" ? (
              <TouchableOpacity {...props} />
            ) : null,
        }}
      />
      <Tabs.Screen
        name="Beneficios/beneficios"
        options={{
          title: "Beneficios",
          //headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#15a6bd",
          },
          tabBarStyle: {
            backgroundColor: "#15a6bd",
            borderTopWidth: 0,
          },
          tabBarIcon({ focused }) {
            return <Icon name="home" />;
          },
          tabBarButton: (
            props //permite mostrar el tab solo si estamos en esta pestaña
          ) =>
            pathname !== "/" &&
            pathname !== "/Password/password" &&
            pathname !== "/Registro/registro" ? (
              <TouchableOpacity {...props} />
            ) : null,
        }}
      />
    </Tabs>
  );
};

export default HomeTabs;
