import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="min-w-[300px] h-[600px] p-4 border rounded-lg shadow-lg bg-gray-100">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-2">
        <h3 className="text-xl font-bold">{article.title}</h3>
        <p className="text-sm text-gray-500">
          By {article.author || "Unknown"}
        </p>
        <p className="mt-2">{article.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
