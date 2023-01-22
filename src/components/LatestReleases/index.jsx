import latestBooks from "./LatestRealesesData";
import imagemLivro from "../../download-imagens/livro2.png";
import { LatestRealesesStyle } from "./styles";
import { TitleStyle } from "../Title/styles";
import { NewRealesesStyle } from "./styles";
import CardRecomendation from "../CardRecomendations";

function LatestReleases() {
  return (
    <LatestRealesesStyle>
      <TitleStyle cor={"#EB9B00"} tamanhoFonte={"36px"}>
        ÚLTIMOS LANÇAMENTOS
      </TitleStyle>
      <NewRealesesStyle>
        {latestBooks.map((book) => (
          <img src={book.src} alt="livro" />
        ))}
      </NewRealesesStyle>
      <CardRecomendation
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </LatestRealesesStyle>
  );
}

export default LatestReleases;
