import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function InterviewCard({ id, title, summary, image }) {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <SummaryContainer>{summary}</SummaryContainer>
      <ReadMore href={`/post/${id}`}>Read more</ReadMore>
      <SeparatorLine />
    </CardContainer>
  );
}

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 50px;
`;

const ImageContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 250px;
`;

const Title = styled.h2`
  text-align: center;
  color: #95091b;
  line-height: 1.4;
  letter-spacing: 0.025em;
  margin: 0 auto 1rem;
`;

const SummaryContainer = styled.div`
  text-align: justify;
  word-break: normal;
  max-width: 80%;
`;

const ReadMore = styled(Link)`
  width: 110px;
  height: 25px;
  box-shadow: 2px 2px grey;
  background-color: #95091b;
  color: white;
  border: solid 2px #95091b;
  position: relative;
  top: 1rem;
  text-align: center;
  &:hover {
    background-color: #099584;
    color: white;
  }
`;

const SeparatorLine = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 1px;
`;

const InterviewCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export function InterviewCardList({ articlesPerPage = 3, articles }) {
  const [currentPage, setCurrentPage] = useState(1);

  // const indexOfLastArticle = currentPage * articlesPerPage;
  // const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  // const currentArticles = articles.slice(
  //   indexOfFirstArticle,
  //   indexOfLastArticle
  // );

  // const totalPages = Math.ceil(articles.length / articlesPerPage);

  const paginatedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );
  console.log("p articles", paginatedArticles);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <InterviewCardContainer>
        Hello
        {paginatedArticles.map((article) => (
          <InterviewCard
            key={article.id}
            id={article.id}
            title={article.title}
            summary={article.summary}
            image={article.image}
          />
        ))}
      </InterviewCardContainer>

      <PaginationContainer>
        <PaginationButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </PaginationButton>
        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationButton
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </>
  );
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  border: 2px solid #95091b;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin: 0.25rem;
  &:hover {
    background-color: #099584;
    color: white;
  }
`;
