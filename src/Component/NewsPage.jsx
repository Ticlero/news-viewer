import React from "react";
import NewsList from "./NewsList";
import NewsNav from "./NewsNav";

function NewsPage({ match }) {
  const category = match.params.category || "all";
  return (
    <>
      <NewsNav />
      <NewsList category={category}></NewsList>
    </>
  );
}

export default NewsPage;
