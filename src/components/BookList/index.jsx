import { BookListStyle } from "./styles";

function BookList({ book }) {
  return (
    <BookListStyle>
      <>
        <p>{book.nome}</p>
        <img src={book.src} alt="livro" />
      </>
    </BookListStyle>
  );
}

export default BookList;
