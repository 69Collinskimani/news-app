const NewsCard = ({ article }) => {
    return (
      <div className="border rounded shadow p-4">
        <img src={article.image_url} alt={article.title} className="w-full h-48 object-cover rounded" />
        <h3 className="text-lg font-bold mt-2">{article.title}</h3>
        <p className="text-sm mt-1">{article.description}</p>
        <p className="text-xs text-gray-500">{article.published_at}</p>
      </div>
    );
  };
  
  export default NewsCard;
  