import { IBook } from '../../@types/book';

export default function BookItem({ book, onDelete }: { book: IBook; onDelete: (id: string) => void }) {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '15px', 
      margin: '10px 0', 
      display: 'flex', 
      justifyContent: 'space-between', 
      borderRadius: '8px', 
      background: '#fff',
      textAlign: 'left'
    }}>
      <div>
        <strong style={{ fontSize: '1.1rem' }}>{book.title}</strong>
        <p style={{ margin: '5px 0', color: '#666' }}>Autor: {book.author} | Status: <strong>{book.status}</strong></p>
      </div>
      <button 
        onClick={() => book._id && onDelete(book._id)} 
        style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer' }}
      >
        Excluir
      </button>
    </div>
  );
}