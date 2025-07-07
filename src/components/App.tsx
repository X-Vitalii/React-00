// src/components/App.tsx

import Product from './Product';
import Mailbox from './Mailbox';
import BooksList from './BooksList';
import books from '../books.json';

export default function App() {
  return (
    <>
      <div>
        <h1>Books of the week</h1>
        <ul>
          {books.map(bookData => {
            return (
              <li key={bookData.id}>
                <BooksList book={bookData} />
              </li>
            );
          })}
        </ul>
      </div>
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
        {[1, 2, 3].map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </>
  );
}
