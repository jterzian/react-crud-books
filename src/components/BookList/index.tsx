import { IBook } from '../../@types/book';
import BookItem from '../BookItem';

export default function BookList({ books, onDeleteBook }: { books: IBook[], onDeleteBook: (id: string) => void }) {
  return (
    <div style={{ marginTop: '20px' }}>
      {books.length === 0 ? (
        <p style={{ color: '#888' }}>Sua estante está vazia. Adicione um livro acima!</p>
      ) : (
        books.map(book => (
          // O segredo aqui é passar a chave única (_id) para o React
          <BookItem key={book._id} book={book} onDelete={onDeleteBook} />
        ))
      )}
    </div>
  );
}