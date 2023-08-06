import { interviews } from "@/public/interviews";
import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function SearchResults({ searchTerm }) {
  const router = useRouter();
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
          <StyledTitle>{interview.title}</StyledTitle>
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
  max-width: 100%;
  max-height: 300px;
  margin-left: 10px;
  margin-right: 10px;
  border: solid 3px #95091b;
  border-radius: 1.2rem;
`;
const StyledTags = styled.ul`
  padding-bottom: 20px;
`;
const StyledTitle = styled.h3`
  list-style-type: none;
  color: #95091b;
`;
