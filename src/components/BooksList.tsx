import type { Book } from '../types/Book';

interface BookProps {
  book: Book;
}

export default function BooksList({ book: { id, name } }: BookProps) {
  return (
    <div>
      <p>id: {id}</p>
      <p>name: {name}</p>
    </div>
  );
}
