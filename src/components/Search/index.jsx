import { Input } from "../Input/styles";
import { SearchContainer } from "./styles";
import { Title } from "./styles";
import { Subtitle } from "./styles";

import booksDatabase from "./booksDatabase";
import BookList from "../BookList";

function Search({ inputSearch, setInputSearch }) {
  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante</Subtitle>
      <Input
        placeholder="Escreva sua proxima leitura"
        onBlur={(event) => {
          const text = event.target.value.trim().toLowerCase();

          const filteredBook = booksDatabase.filter((book) =>
            book.nome.toLowerCase().includes(text)
          );

          if (filteredBook.length === 0 || text === "") {
            setInputSearch([]);
          } else {
            setInputSearch(filteredBook);
          }
        }}
      />
      <ul>
        {inputSearch.map((book) => (
          <BookList key={book.id} book={book} />
        ))}
      </ul>
    </SearchContainer>
  );
}

export default Search;
