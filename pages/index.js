import InterviewCard from "@/components/InterviewCard";
import { interviews } from "@/public/interviews";
import SearchInput from "@/components/Search/SearchInput";
import SearchResults from "@/components/Search/SearchResults";
import { useState } from "react";
import Footer from "@/components/Footer";
import styled from "styled-components";

const INTERVIEWS_PER_PAGE = 3;
export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(interviews.length / INTERVIEWS_PER_PAGE);
  const paginatedInterviews = interviews.slice(
    (currentPage - 1) * INTERVIEWS_PER_PAGE,
    currentPage * INTERVIEWS_PER_PAGE
  );
  console.log("total pages", totalPages);
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

            <button onClick={() => setCurrentPage(currentPage + 1)}>
              next page
            </button>
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
