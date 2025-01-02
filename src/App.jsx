import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ArticleDetails from './components/ArticleDetails';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onArticleSelect={setSelectedArticle} />} />
        <Route path="/article" element={<ArticleDetails article={selectedArticle} />} />
      </Routes>
    </Router>
  );
}

