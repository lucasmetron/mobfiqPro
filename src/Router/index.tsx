import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackMain from "./StackMain/StackMain";

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <StackMain />
    </NavigationContainer>
  );
};

export default Router;
