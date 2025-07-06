// src/components/App.tsx

import Product from './Product';
import Mailbox from './Mailbox';
import BooksList from './BooksList';

const books = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Query overview' },
];

export default function App() {
  return (
    <>
      <h1>Books of the week</h1>
      <BooksList books={books} />
      <h1>Best selling</h1>
      <Product
        name="Tacos with Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <h1>You INBOX</h1>
      <Mailbox
        username="Vitalii"
        messages={['one', 'two', 'ten']}
        unreadMessages={[]}
      />
      <div>
        {[1, 2, 3].map(item => {
          return <p>{item}</p>;
        })}
      </div>
    </>
  );
}
