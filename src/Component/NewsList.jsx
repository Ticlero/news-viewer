import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getAllNewsData from "../Modules/getNewsData";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

function NewsList({ category }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllNewsData(category);
        setData(response.data.articles);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  if (!loading) {
    return <NewsListBlock>Now Loading...</NewsListBlock>;
  }

  return (
    <NewsListBlock>
      {data.map((item) => (
        <NewsItem key={item.url} article={item}></NewsItem>
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
