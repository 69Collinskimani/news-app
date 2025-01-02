export default function ArticleDetails({ article }) {
    if (!article) return <p>No article selected.</p>;
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">"2024 on media"</h1>
        <p className="text-gray-600 mb-2">By {article.author || 'Collins kimani'}</p>
        <img src="public/news 1.jpg" alt="Genz on media" className="w-full rounded my-4" />
        <p className="mb-4">{article.content}</p>
        <a href="https://www.businessdailyafrica.com/bd/corporate/technology/2024-social-media-power-on-politics-governance-hit-climax-4874170" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Read Original Article
        </a>
      </div>
    );
  }
  