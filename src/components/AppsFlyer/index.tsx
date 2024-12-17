import React, { useEffect } from "react";
import appsFlyer from "react-native-appsflyer";

const AppsFlyer: React.FC = () => {
  useEffect(() => {
    appsFlyer.initSdk(
      {
        devKey: "75Ecej2pGgbRKDQh8vnDbg",
        isDebug: false,
        appId: "6739498757",
        onInstallConversionDataListener: true, //Optional
        onDeepLinkListener: true, //Optional
        timeToWaitForATTUserAuthorization: 10, //for iOS 14.5
      },
      (result) => {
        console.log("deu certo", result);
      },
      (error) => {
        console.error("deu erro", error);
      }
    );

    // Adiciona o listener para o evento de conversão de instalação
    const removeListener = appsFlyer.onInstallConversionData((data) => {
      console.log("Dados de conversão de instalação recebidos:", data);
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
