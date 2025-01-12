import React from "react";
import newsData from "../mockNewsData.json";

const NewsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {newsData.data.map((article) => (
        <div
          key={article.uuid}
          className="border rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 text-sm">{article.snippet}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 block"
            >
              Read more
            </a>
            <p className="text-xs text-gray-500 mt-1">
              Published on: {new Date(article.published_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
