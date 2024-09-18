import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksMain } from "Router/routes";
import Tabs from "Router/Tabs";
import Teste from "Views/Teste";

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
    </StackMainCreator.Navigator>
  );
}
