import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksMore } from "Router/routes";
import HeaderApp from "components/HeaderApp";
import More from "Views/More";
import CentralAtend from "Views/CentralAtend";
import Favorites from "Views/Favorites";

const StackMore = createStackNavigator();

export default function Tabs() {
  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes("stacksMore-") ? <HeaderApp /> : null;
  }

  return (
    <StackMore.Navigator
      screenOptions={{
        header: ({ route }) => {
          return isShowHeaderApp(route.name);
        },
      }}
      initialRouteName={stacksMore.initial}
    >
      <StackMore.Screen name={stacksMore.initial} component={More} />
      <StackMore.Screen
        name={stacksMore.centralAtend}
        component={CentralAtend}
      />
      <StackMore.Screen name={stacksMore.favorites} component={Favorites} />
    </StackMore.Navigator>
  );
}
