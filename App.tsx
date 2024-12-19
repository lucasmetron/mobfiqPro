import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
// import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";

import { color } from "styles/pallete";
import Router from "Router";
import { DataHomeProvider } from "context/useHomeContext";
import { HeaderDefaultProvider } from "context/useHeaderDefaultContext";
import { ProductsListProvider } from "context/useProductsList";
import { ProductSelectedProvider } from "context/useProductSelected";
import { FavoritesProvider } from "context/useFavoritesContext";
import { CartProvider } from "context/useCartContext";
import AppsFlyer from "components/AppsFlyer";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    MobfiqFont: require("./assets/fonts/mobfiq-font.ttf"),
  });

  // const onLayputRootView = useCallback(async () => {
  //   await SplashScreen.hideAsync();
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={["top", "bottom", "left", "right"]}
        // onLayout={onLayputRootView}
      >
        <FavoritesProvider>
          <CartProvider>
            <ProductSelectedProvider>
              <ProductsListProvider>
                <HeaderDefaultProvider>
                  <DataHomeProvider>
                    <Router />
                    <StatusBar
                      style="dark"
                      backgroundColor={color.interface.backgroundColor}
                    />
                    <Toast position="top" topOffset={70} />
                  </DataHomeProvider>
                </HeaderDefaultProvider>
              </ProductsListProvider>
            </ProductSelectedProvider>
          </CartProvider>
        </FavoritesProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.interface.white,
  },
});
