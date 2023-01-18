import { Input } from "../Input/styles";
import { SearchContainer } from "./styles";
import { Title } from "./styles";
import { Subtitle } from "./styles";

function Search() {
  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante</Subtitle>;
      <Input placeholder="Escreva sua proxima leitura" />
    </SearchContainer>
  );
}

export default Search;
