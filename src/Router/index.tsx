import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Image } from "react-native";
import * as Linking from "expo-linking";

import StackMain from "./StackMain/StackMain";
import { getHome } from "utils/functions";
import DataHomeContext from "context/useHomeContext";
import AppsFlyer from "components/AppsFlyer";
import { stacksMain } from "./routes";

const prefix = Linking.createURL("/");

const Router: React.FC = () => {
  const { setDataHome, isLoadData, setIsLoadData } =
    useContext(DataHomeContext);

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        product: `${stacksMain.productSelected}/:productId`,
      },
    },
  };

  useEffect(() => {
    (async () => {
      setIsLoadData(true);
      await getHome(setDataHome);
      setIsLoadData(false);
    })();
  }, []);

  return (
    <NavigationContainer linking={linking}>
      {isLoadData ? (
        <Image
          style={styles.imgInitial}
          source={require("../../assets/intialImg.jpg")}
        />
      ) : (
        <>
          <AppsFlyer />
          <StackMain />
        </>
      )}
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  imgInitial: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
});
