import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import appsFlyer from "react-native-appsflyer";
import { campaignProductSelected } from "./functions";

const AppsFlyer: React.FC = () => {
  const navigation: any = useNavigation();

  // Start AppsFlyer SDK
  useEffect(() => {
    //DeepLink
    appsFlyer.onDeepLink((deepLinkData) => {
      const deepLinkValue = deepLinkData?.data;

      if (deepLinkValue !== null && deepLinkValue?.deep_link_value) {
        //campaign of product selected
        if (
          deepLinkValue?.deep_link_value &&
          deepLinkValue?.deep_link_value.includes("mobfiqpro://product/")
        ) {
          campaignProductSelected(deepLinkValue, navigation);
        }

        //another campaingns bellow
        //...
      } else {
        console.warn("Deep link value not found.");
      }
    });

    //Start appsflyer
    appsFlyer.initSdk(
      {
        devKey: "75Ecej2pGgbRKDQh8vnDbg",
        isDebug: true,
        appId: "6739498757",
        onInstallConversionDataListener: true, // Optional
        onDeepLinkListener: true, // Optional
        timeToWaitForATTUserAuthorization: 10, // for iOS 14.5
      },
      (result) => {
        console.log("SDK initialized successfully:", result);
      },
      (error) => {
        console.error("SDK initialization failed:", error);
      }
    );

    //Add listener for the installation conversion event
    const removeListener = appsFlyer.onInstallConversionData((data) => {
      console.log("Install Conversion Data received:", data);
    });

    //Remove the listener when unmounting the component
    return () => {
      if (removeListener) {
        removeListener();
      }
    };
  }, []);

  return null;
};

export default AppsFlyer;
