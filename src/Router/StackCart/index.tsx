import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksCart } from "Router/routes";
import HeaderApp from "components/HeaderApp";

import Cart from "Views/Cart";

const StackCartNavigator = createStackNavigator();

export default function StackCart() {
  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes("stacksCollege-") ? <HeaderApp /> : null;
  }

  return (
    <StackCartNavigator.Navigator
      screenOptions={{
        header: ({ route }) => {
          return isShowHeaderApp(route.name);
        },
      }}
      initialRouteName={stacksCart.initial}
    >
      <StackCartNavigator.Screen name={stacksCart.initial} component={Cart} />
    </StackCartNavigator.Navigator>
  );
}
