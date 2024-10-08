import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksMain } from "Router/routes";
import Tabs from "Router/Tabs";
import Teste from "Views/Teste";
import ProductSelected from "Views/ProductSelected";

const StackMainCreator = createStackNavigator();

export default function StackMain() {
  return (
    <StackMainCreator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={stacksMain.tabs}
    >
      <StackMainCreator.Screen name={stacksMain.tabs} component={Tabs} />
      <StackMainCreator.Screen name={stacksMain.teste} component={Teste} />
      <StackMainCreator.Screen
        name={stacksMain.productSelected}
        component={ProductSelected}
      />
    </StackMainCreator.Navigator>
  );
}
