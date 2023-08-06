import { interviews } from "@/public/interviews";
import { styled } from "styled-components";
import Link from "react-router-dom";

export default function SearchResults({ searchTerm }) {
  const results = interviews.filter((interview) =>
    interview.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (!searchTerm || !results.length) {
    return <p>No results</p>;
  }

  return (
    <StyledResult>
      {results.map((interview) => (
        <li key={interview.id}>
          <h3>{interview.title}</h3>
          <PreviewText>{interview.summary}</PreviewText>
          <StyledTags>
            <h3>Tags:</h3>
            {interview.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </StyledTags>
        </li>
      ))}
    </StyledResult>
  );
}

const PreviewText = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const StyledResult = styled.ul`
  max-width: 80%;
  max-height: 250px;
  border: 1px solid black;
`;
const StyledTags = styled.ul`
  padding-bottom: 5ex;
`;
