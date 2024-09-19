import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Image } from "react-native";

import StackMain from "./StackMain/StackMain";
import { getHome } from "utils/functions";
import DataHomeContext from "context/useHomeContext";

const Router: React.FC = () => {
  const { setDataHome } = useContext(DataHomeContext);
  const [isLoadData, setIsLoadData] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoadData(true);
      await getHome(setDataHome);
      setIsLoadData(false);
    })();
  }, []);

  return (
    <NavigationContainer>
      {isLoadData ? (
        <Image
          style={styles.imgInitial}
          source={require("../../assets/intialImg.jpg")}
        />
      ) : (
        <StackMain />
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
