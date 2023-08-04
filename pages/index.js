import Heading from "@/Header";
import InterviewCard from "@/components/InterviewCard";
import { interviews } from "@/public/interviews";
import SearchInput from "@/components/Search/SearchInput";
import SearchResults from "@/public/interviews";
import { useState } from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(term) {
    setSearchTerm(term);
  }
  return (
    <main>
      <SearchInput />
      <SearchResults searchTerm={searchTerm} />
      <Heading>all access pass</Heading>
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
    </main>
  );
}
