import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksProfile } from "Router/routes";
import HeaderApp from "components/HeaderApp";
import Profile from "Views/Profile";

const StackProfileNavigator = createStackNavigator();

export default function StackProfile() {
  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes("stacksContent-") ? <HeaderApp /> : null;
  }

  return (
    <StackProfileNavigator.Navigator
      screenOptions={{
        header: ({ route }) => {
          return isShowHeaderApp(route.name);
        },
      }}
      initialRouteName={stacksProfile.initial}
    >
      <StackProfileNavigator.Screen
        name={stacksProfile.initial}
        component={Profile}
      />
    </StackProfileNavigator.Navigator>
  );
}
