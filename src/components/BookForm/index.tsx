import { useState } from 'react';
import api from '../../services/api';

export default function BookForm({ onBookAdded }: { onBookAdded: () => void }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState<'Lido' | 'Não lido'>('Não lido');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('', { title, author, status });
      setTitle(''); setAuthor('');
      onBookAdded();
    } catch (err) {
      alert("Erro ao salvar livro");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} required />
      <input placeholder="Autor" value={author} onChange={e => setAuthor(e.target.value)} required />
      <select value={status} onChange={e => setStatus(e.target.value as any)}>
        <option value="Não lido">Não lido</option>
        <option value="Lido">Lido</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
}