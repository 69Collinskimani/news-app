import { useParams } from "react-router-dom";
import ArticleDetails from "../components/ArticleDetails";

const ArticlePage = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((item) => item.uuid === id);

  return (
    <div>
      {article ? <ArticleDetails article={article} /> : <p>Article not found!</p>}
    </div>
  );
};

export default ArticlePage;
