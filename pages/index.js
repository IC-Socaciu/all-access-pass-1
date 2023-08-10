import InterviewCard from "@/components/InterviewCard";
import { interviews } from "@/public/interviews";
import SearchInput from "@/components/Search/SearchInput";
import SearchResults from "@/components/Search/SearchResults";
import { useState } from "react";
import Footer from "@/components/Footer";
import styled from "styled-components";

const INTERVIEWS_PER_PAGE = 2;
export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(interviews.length / INTERVIEWS_PER_PAGE);
  const paginatedInterviews = interviews.slice(
    (currentPage - 1) * INTERVIEWS_PER_PAGE,
    currentPage * INTERVIEWS_PER_PAGE
  );
  function handleSearch(term) {
    setSearchTerm(term);
  }
  return (
    <>
      <StyledMain>
        <SearchInput searchTerm={searchTerm} onSearch={handleSearch} />
        {searchTerm ? (
          <SearchResults searchTerm={searchTerm} />
        ) : (
          <>
            <ul>
              {paginatedInterviews.map((interview) => (
                <li className="interview-card" key={interview.id}>
                  <InterviewCard
                    id={interview.id}
                    title={interview.title}
                    summary={interview.summary}
                    text={interview.text}
                    image={interview.image}
                  />
                </li>
              ))}
            </ul>

            {currentPage === 1 && (
              <PageNavBtn onClick={() => setCurrentPage(2)}>
                Next Page
              </PageNavBtn>
            )}
            {currentPage === 2 && (
              <>
                <PageNavBtn onClick={() => setCurrentPage(1)}>
                  Previous Page
                </PageNavBtn>
                <PageNavBtn onClick={() => setCurrentPage(3)}>
                  Next Page
                </PageNavBtn>
              </>
            )}
            {currentPage === 3 && (
              <PageNavBtn onClick={() => setCurrentPage(2)}>
                Previous Page
              </PageNavBtn>
            )}
          </>
        )}
      </StyledMain>
      <Footer currentPath="/" />
    </>
  );
}

const StyledMain = styled.main`
  margin-bottom: 200px;
`;
const PageNavBtn = styled.button`
  width: 110px;
  height: 25px;
  background-color: #95091b;
  color: white;
  display: block;
  margin: 0 auto;
  &:hover {
    background-color: #099584;
    color: white;
  }
`;
