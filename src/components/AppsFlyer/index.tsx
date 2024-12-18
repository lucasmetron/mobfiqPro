import React, { useEffect } from "react";
import appsFlyer, { UnifiedDeepLinkData } from "react-native-appsflyer";

const AppsFlyer: React.FC = () => {
  // Start a listener for deep link
  useEffect(() => {
    appsFlyer.onDeepLink((deepLinkData: any) => {
      console.log("Deep Link Data:", deepLinkData);

      // Verifica as propriedades disponíveis no objeto retornado
      const deepLinkValue =
        deepLinkData?.deepLinkValue || deepLinkData?.deepLinkParameters?.screen;

      if (deepLinkValue) {
        console.log("Navigate to screen:", deepLinkValue);
        // Exemplo: navegação para a tela com base no deep link
      } else {
        console.warn("Deep link value not found.");
      }
    });
  }, []);

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
