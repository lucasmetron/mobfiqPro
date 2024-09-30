import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksHome } from "Router/routes";
import HeaderApp from "components/HeaderApp";
import Home from "Views/Home";
import SearchScreen from "Views/SearchScreen";
import Plp from "Views/Plp";

const Stack = createStackNavigator();

export default function StackHome() {
  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes("stacksHome-") ? <HeaderApp /> : null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route }) => {
          return isShowHeaderApp(route.name);
        },
      }}
      initialRouteName={stacksHome.initial}
    >
      <Stack.Screen name={stacksHome.initial} component={Home} />
      <Stack.Screen name={stacksHome.search} component={SearchScreen} />
      <Stack.Screen name={stacksHome.plp} component={Plp} />
    </Stack.Navigator>
  );
}
