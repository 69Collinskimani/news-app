const ArticleDetails = ({ article }) => {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold">{article.title}</h2>
        <img src={article.image_url} alt={article.title} className="w-full h-64 object-cover rounded mt-4" />
        <p className="text-lg mt-4">{article.content}</p>
        <p className="text-sm text-gray-500 mt-2">By {article.author}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mt-4 block"
        >
          Read Original Article
        </a>
      </div>
    );
  };
  
  export default ArticleDetails;
  