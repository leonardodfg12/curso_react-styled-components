import {
  fundoClaro,
  conteudoClaro,
  fundoEscuro,
  conteudoEscuro,
  textoFundoEscuro,
  textoFundoClaro,
} from "../UI/variaveis";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: "",
};

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)",
};
