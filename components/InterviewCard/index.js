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

export function InterviewCardList({ perPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const filteredArticles = articles.filter(
    (article) => article.page === String(currentPage)
  );

  const numPages = Math.ceil(articles.length / perPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numPages));
  };

  const handleFirstPage = () => {
    setPage(1);
  };

  const handleLastPage = () => {
    setPage(numPages);
  };

  return (
    <>
      <InterviewCardContainer>
        {filteredArticles.map((article) => (
          <InterviewCard
            key={article.id}
            id={article.id}
            title={article.title}
            summary={article.summary}
            image={article.image}
          />
        ))}
      </InterviewCardContainer>

      {numPages > 1 && (
        <PaginationContainer>
          <PaginationButton onClick={handleFirstPage} disabled={page === 1}>
            {"<<"}
          </PaginationButton>
          <PaginationButton onClick={handlePrevPage} disabled={page === 1}>
            Prev
          </PaginationButton>
          {Array.from({ length: numPages }, (_, i) => (
            <PaginationButton
              key={i}
              active={i + 1 === page}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </PaginationButton>
          ))}
          <PaginationButton
            onClick={handleNextPage}
            disabled={page === numPages}
          >
            Next
          </PaginationButton>
          <PaginationButton
            onClick={handleLastPage}
            disabled={page === numPages}
          >
            {">>"}
          </PaginationButton>
        </PaginationContainer>
      )}
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
  background-color: greenyellow;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin: 0.25rem;
`;
