import React, { useEffect, useState } from "react";
import { Tabs, usePathname, useRouter } from "expo-router";
import { Icon } from "@rneui/base";
import { TouchableOpacity } from "react-native";
import UsuariosContext from "../context/UsuariosContext";
import { Usuario } from "../utils/types/types";
import useGetData from "../utils/hooks/useGetData";

const HomeTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { usuarios, refetch } = useGetData();
  const [allUsuarios, setAllUsuarios] = useState<Usuario[]>([]);
  const [currentUser, setCurrentUser] = useState<Usuario | null>(null);

  useEffect(() => {
      setAllUsuarios(usuarios);
  }, [usuarios]);

  return (
    <UsuariosContext.Provider
      value={{
        allUsuarios,
        currentUser,
        setCurrentUser,
        refetchUsuarios: refetch,
      }}
    >
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
          }}
        />

        <Tabs.Screen
          name="Home/home"
          initialParams={{ allUsuarios }}
          options={{
            title: "Home",
            //headerTitle: () => <HeaderComponent title='Vink'/>,
            headerShown: false, //Ocultamos el header
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#15a6bd",
            },
            tabBarStyle: {
              backgroundColor: "#15a6bd",
              borderTopWidth: 0,
              height: 60,
            },
            tabBarIcon({ focused }) {
              return <Icon name="home" />;
            },
            tabBarButton: (
              props //permite mostrar el tab solo si estamos en esta pestaña
            ) => {
              if (
                pathname !== "/" &&
                pathname !== "/Password/password" &&
                pathname !== "/Registro/registro"
              ) {
                return <TouchableOpacity {...props} />;
              }
              return null;
            },
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
              height: 60,
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
          name="DepositMoney/depositMoney"
          options={{
            href: null,
            title: "",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#15a6bd",
            },
            tabBarStyle: {
              backgroundColor: "#15a6bd",
              borderTopWidth: 0,
              height: 60,
            },
            headerLeft: () => (
              <Icon
                name="arrow-back"
                size={30}
                color="#b8f4fd"
                style={{ marginLeft: 10 }}
                onPress={() => router.push("/Home/home")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Transfer/transfer"
          options={{
            href: null,
            title: "",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#15a6bd",
            },
            tabBarStyle: {
              backgroundColor: "#15a6bd",
              borderTopWidth: 0,
              height: 60,
            },
            headerLeft: () => (
              <Icon
                name="arrow-back"
                size={30}
                color="#b8f4fd"
                style={{ marginLeft: 10 }}
                onPress={() => router.push("/Home/home")}
              />
            ),
          }}
        />
      </Tabs>
    </UsuariosContext.Provider>
  );
};

export default HomeTabs;
