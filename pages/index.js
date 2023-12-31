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

            {currentPage < totalPages && (
              <PageNavBtn onClick={() => setCurrentPage(currentPage + 1)}>
                Next Page
              </PageNavBtn>
            )}
            {currentPage > 1 && (
              <PageNavBtn
                onClick={() => setCurrentPage(currentPage - 1)}
                style={{ marginTop: "10px" }}
              >
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
`;
const PageNavBtn = styled.button`
  width: 110px;
  height: 25px;
  background-color: #fafafa;
  border: solid 2px #95091b;
  border-radius: 0.25em;
  color: #95091b;
  display: block;
  margin: 0 auto;
  transition: background-color 0.3s;
  &:hover {
    background-color: #95091b;
    color: #fafafa;
  }
`;
