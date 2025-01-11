import { useState, useEffect } from "react";
import { fetchNews } from "../services/newsAPI";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchNews({ query })
      .then(setArticles)
      .catch(console.error);
  }, [query]);

  const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  fetchNews({ query })
    .then(setArticles)
    .catch(setError)
    .finally(() => setLoading(false));
}, [query]);

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={setQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {articles.map((article) => (
          <NewsCard key={article.uuid} article={article} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
