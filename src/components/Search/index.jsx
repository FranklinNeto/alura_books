import { Input } from "../Input/styles";
import { SearchContainer } from "./styles";
import { Title } from "./styles";
import { Subtitle } from "./styles";
import { useState } from "react";
import booksDatabase from "./booksDatabase";

function Search() {
  const [inputSearch, setInputSearch] = useState([]);
  console.log(inputSearch);

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante</Subtitle>;
      <Input
        placeholder="Escreva sua proxima leitura"
        onBlur={(event) => {
          const text = event.target.value.trim().toLowerCase();

          const filteredBook = booksDatabase.filter((book) =>
            book.nome.toLowerCase().includes(text)
          );
          setInputSearch(filteredBook);
        }}
      />
    </SearchContainer>
  );
}

export default Search;
