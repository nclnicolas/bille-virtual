import { Tabs, useRouter } from "expo-router";
import { Icon } from "@rneui/themed";
import { Image, View, Text } from "react-native";

const HomeTabs = () => {

  const router = useRouter();
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
          headerLeft: () =>(
            <Icon 
              name="arrow-back"
              size={30}
              color='#b8f4fd'
              style={{marginLeft: 10}}
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
          headerLeft: () =>(
            <Icon 
              name="arrow-back"
              size={30}
              color='#b8f4fd'
              style={{marginLeft: 10}}
              onPress={() => router.back()}
            />
          ),
          tabBarStyle: {
            backgroundColor: "#15a6bd",
            borderTopWidth: 0,
          },
        }}
      />
    </Tabs>
  );
};

export default HomeTabs;
