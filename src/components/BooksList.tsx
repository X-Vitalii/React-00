interface Book {
  id: string;
  name: string;
}

export default function BooksList(books: Book[]) {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>{book.name}</li>
      ))}
    </ul>
  );
}
