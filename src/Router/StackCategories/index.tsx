import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stacksCategories } from "Router/routes";
import HeaderApp from "components/HeaderApp";
import Categories from "Views/Categories";

const StackCategoriesNavigator = createStackNavigator();

export default function StackCategories() {
  function isShowHeaderApp(nameRoute: string) {
    return nameRoute.includes("stacksCollege-") ? <HeaderApp /> : null;
  }

  return (
    <StackCategoriesNavigator.Navigator
      screenOptions={{
        header: ({ route }) => {
          return isShowHeaderApp(route.name);
        },
      }}
      initialRouteName={stacksCategories.initial}
    >
      <StackCategoriesNavigator.Screen
        name={stacksCategories.initial}
        component={Categories}
      />
    </StackCategoriesNavigator.Navigator>
  );
}
