import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksProfile } from "Router/routes";
import HeaderApp from "components/HeaderApp";
import Profile from "Views/Profile";
import EntryWithAccessCode from "Views/EntryWithAccessCode";
import ForgotPassword from "Views/ForgotPassword";
import CreateAcount from "Views/CreateAcount";

const StackProfileNavigator = createStackNavigator();

export default function StackProfile() {
  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes("stacksProfile-") ? <HeaderApp /> : null;
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

      <StackProfileNavigator.Screen
        name={stacksProfile.entryAccessCode}
        component={EntryWithAccessCode}
      />

      <StackProfileNavigator.Screen
        name={stacksProfile.forgotPassword}
        component={ForgotPassword}
      />

      <StackProfileNavigator.Screen
        name={stacksProfile.createAcounte}
        component={CreateAcount}
      />
    </StackProfileNavigator.Navigator>
  );
}
