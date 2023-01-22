import { CardRecomendationStyle } from "./styles";
import { TitleStyle } from "../Title/styles";
import { Subtitulo } from "./styles";
import { Descricao } from "./styles";
import { ImgLivro } from "./styles";
import { Button } from "./styles";

function CardRecomendation({ titulo, subtitulo, descricao, img }) {
  return (
    <CardRecomendationStyle>
      <div>
        <TitleStyle cor="#EB9B00" tamanhoFonte="16px" alinhamento="left">
          {titulo}
        </TitleStyle>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <ImgLivro src={img} />
        <Button>Saiba mais</Button>
      </div>
    </CardRecomendationStyle>
  );
}

export default CardRecomendation;
