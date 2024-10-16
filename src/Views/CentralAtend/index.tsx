import React, { useLayoutEffect, useState } from "react";

import * as S from "./styles";
import { data as dataAboutContats } from "./data";

export default function CentralAtend() {
  const [data, setData] = useState(dataAboutContats);

  useLayoutEffect(() => {}, []);

  return (
    <S.container contentContainerStyle={{ gap: 10 }}>
      {data.length > 0 &&
        data.map((item, i) => (
          <S.dataBox key={i}>
            <S.titleData>{item.mainTitle}</S.titleData>
            <S.infos>
              <S.line />
              <S.box>
                <S.titleInfos>{item.subTitle}</S.titleInfos>
                <S.textInfos>{item.tel}</S.textInfos>
                <S.textInfos>{item.info}</S.textInfos>
              </S.box>

              <S.line />
            </S.infos>
          </S.dataBox>
        ))}
    </S.container>
  );
}
