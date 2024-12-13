import React, { useContext } from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import StackHome from "./StackHome/StackHome";
import { tabsRoutes } from "./routes";
import { color } from "../styles/pallete";
import HeaderApp from "../components/HeaderApp";
import StackMore from "./StackMore/StackMore";
import { deleteTypeNavigatorFromString } from "utils/functions";
import { fontsName } from "styles/fonts";
import StackProfile from "./StackProfile";
import StackCategories from "./StackCategories";
import StackCart from "./StackCart";
import useCartContext from "context/useCartContext";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const { productsInCart } = useContext(useCartContext);

  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes("tab-") ? <HeaderApp /> : null;
  }

  return (
    <Tab.Navigator
      initialRouteName={tabsRoutes.home.name}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case tabsRoutes.home.name:
              return (
                <Entypo
                  name={tabsRoutes.home.icon}
                  size={Dimensions.get("window").height * 0.025}
                  color={color}
                />
              );

            case tabsRoutes.profile.name:
              return (
                <Entypo
                  name={tabsRoutes.profile.icon}
                  size={Dimensions.get("window").height * 0.025}
                  color={color}
                />
              );

            case tabsRoutes.cateogires.name:
              return (
                <Entypo
                  name={tabsRoutes.cateogires.icon}
                  size={Dimensions.get("window").height * 0.025}
                  color={color}
                />
              );

            case tabsRoutes.cart.name:
              return (
                <View style={styles.cartBox}>
                  {productsInCart.length > 0 && (
                    <View style={styles.qtdItensInCartBox}>
                      <Text style={styles.qtdItensInCartText}>
                        {productsInCart.length}
                      </Text>
                    </View>
                  )}

                  <MaterialIcons
                    name={tabsRoutes.cart.icon}
                    size={Dimensions.get("window").height * 0.025}
                    color={color}
                  />
                </View>
              );

            case tabsRoutes.more.name:
              return (
                <MaterialIcons
                  name={tabsRoutes.more.icon}
                  size={Dimensions.get("window").height * 0.025}
                  color={color}
                />
              );

            default:
              return (
                <Entypo
                  name={""}
                  size={Dimensions.get("window").height * 0.025}
                  color={color}
                />
              );
          }
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginTop: -2,
          fontFamily: fontsName.text,
        },
        tabBarActiveTintColor: color.interface.blue1,
        tabBarInactiveTintColor: color.interface.darkgray3,
        tabBarStyle: {
          backgroundColor: color.interface.white,
          paddingBottom: 5,
          paddingTop: 5,
          borderColor: color.interface.backgroundColor,
          height: Dimensions.get("window").height * 0.07,
          borderTopColor: color.interface.backgroundColor,
        },

        headerSafeAreaInsets: { top: 0, left: 0, right: 0, bottom: 0 },
        headerShown: false,
        tabBarLabel: deleteTypeNavigatorFromString(route.name),
        header: ({ route }) => {
          return isShowHeaderApp(route.name);
        },
        headerStyle: {
          backgroundColor: "#f4511e", // Ajuste a cor de fundo
        },
      })}
    >
      <Tab.Screen name={tabsRoutes.home.name} component={StackHome} />
      <Tab.Screen name={tabsRoutes.profile.name} component={StackProfile} />
      <Tab.Screen
        name={tabsRoutes.cateogires.name}
        component={StackCategories}
      />
      <Tab.Screen name={tabsRoutes.cart.name} component={StackCart} />
      <Tab.Screen name={tabsRoutes.more.name} component={StackMore} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  cartBox: {
    position: "relative",
  },

  qtdItensInCartBox: {
    position: "absolute",
    top: -10,
    right: -20,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.interface.red,
  },

  qtdItensInCartText: {
    fontSize: 10,
    color: color.interface.white,
  },
});
