import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNews } from "../api/newsApi";

const NewsDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const newsData = await fetchNews();
      if (newsData && newsData[id]) {
        setArticle(newsData[id]);
      } else {
        setArticle(null);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  const { title, description, content, author, urlToImage } = article;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {urlToImage && (
          <img
            src={urlToImage}
            alt={title}
            className="w-full h-64 object-cover object-center"
          />
        )}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          {author && <p className="text-gray-600 text-sm mb-2">By {author}</p>}
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="mb-4">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
