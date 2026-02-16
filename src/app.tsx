import { useEffect, useState } from 'react';
import api from './services/api';
import { IBook } from './@types/book';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

export default function App() {
  // Estado para armazenar a lista de livros vinda da API
  const [books, setBooks] = useState<IBook[]>([]);

  // Função para buscar os livros no crudcrud
  const loadBooks = async () => {
    try {
      const res = await api.get('');
      setBooks(res.data);
    } catch (err) {
      console.error("Erro ao carregar livros da API:", err);
    }
  };

  // Função para deletar um livro pelo ID e atualizar a lista
  const deleteBook = async (id: string) => {
    try {
      await api.delete(`/${id}`);
      loadBooks(); // Recarrega a lista após deletar
    } catch (err) {
      alert("Erro ao deletar o livro. Verifique se o endpoint ainda é válido.");
    }
  };

  // useEffect que dispara a busca de livros assim que o componente é montado
  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>📚 Catálogo de Livros</h1>
      
      {/* Formulário para adicionar novos livros */}
      <BookForm onBookAdded={loadBooks} />
      
      <hr style={{ margin: '20px 0', border: '0', borderTop: '1px solid #eee' }} />
      
      {/* Listagem dos livros cadastrados */}
      <BookList books={books} onDeleteBook={deleteBook} />
    </div>
  );
}