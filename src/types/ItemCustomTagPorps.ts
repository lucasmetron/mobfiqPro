import { RGBAProps } from "types/RGBAProps";

export interface ItemCustomTagProps {
  Id?: string; //esse Id é gerado pelo backend e precisa ser deletar ao enviar para o backend
  Active: boolean; //se a tag está ou não ativa
  BackgroundColor: null | RGBAProps; //cor de fundo quando o tipo é texto
  BeginTime: null | string; //data de inicio do agendamento
  EndTime: null | string; //data de fim do agendamento
  CollectionId: string | null; //id da coleção que receberá a tag
  Image: string | null; //imagem que será exibida quando o tipo da tag for imagem
  Position: number; //posição da tag. Ver as posições na doc link https://docs.google.com/document/d/1syHgInbP3BoFiBlt2vlpnZS1Z1FRidKyWt9A_PQuWhY/edit#heading=h.2kaw54rk8nnn
  Priority: number; //para entender melhor veja a doc, mas na aplicação sempre estou passando 1 https://docs.google.com/document/d/1syHgInbP3BoFiBlt2vlpnZS1Z1FRidKyWt9A_PQuWhY/edit#heading=h.2kaw54rk8nnn
  PromotionName: null | string; //nome da promoção que precisar ser igual ao que está na VTEX
  Text: string; //Texto exibido quando o tipo da tag é texto
  Type: number; //tipo da tag, se é imagem ou texto
}
