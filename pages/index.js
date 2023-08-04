import Heading from "@/Header";
import InterviewCard from "@/components/InterviewCard";
import { interviews } from "@/public/interviews";
import SearchInput from "@/components/Search/SearchInput";
import SearchResults from "@/components/Search/SearchResults";
import { useState } from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(term) {
    setSearchTerm(term);
  }
  return (
    <main>
      <SearchInput searchTerm={searchTerm} onSearch={handleSearch} />
      <Heading>all access pass</Heading>
      {searchTerm ? (
        <SearchResults searchTerm={searchTerm} />
      ) : (
        <ul>
          {interviews.map((interview) => (
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
      )}
    </main>
  );
}
