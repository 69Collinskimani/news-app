import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../services/newsAPI';
import SearchBar from '../components/SearchBar';
import NewsCard from '../components/NewsCard';

export default function HomePage({ onArticleSelect }) {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchArticles().then(setArticles).catch(console.error);
  }, []);

  const handleSearch = () => {
    fetchArticles(searchTerm).then(setArticles).catch(console.error);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <NewsCard key={article.uuid} article={article} onClick={() => onArticleSelect(article)} />
        ))}
      </div>
    </div>
  );
}
