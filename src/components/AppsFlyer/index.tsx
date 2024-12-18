import React, { useEffect } from "react";
import appsFlyer from "react-native-appsflyer";

const AppsFlyer: React.FC = () => {
  // Start AppsFlyer SDK
  useEffect(() => {
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

    // Adiciona o listener para o evento de conversão de instalação
    const removeListener = appsFlyer.onInstallConversionData((data) => {
      console.log("Install Conversion Data received:", data);
    });

    // Remove o listener ao desmontar o componente
    return () => {
      if (removeListener) {
        removeListener();
      }
    };
  }, []);

  return null;
};

export default AppsFlyer;
