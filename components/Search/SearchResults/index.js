import { interviews } from "@/public/interviews";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import Footer from "@/components/Footer";

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
    <StyledResult as="ul">
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
      <Footer currentPath={router.asPath} />
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
  border-radius: 1.2rem;
  text-decoration: none;
  list-style-type: none;
`;
const StyledTags = styled.ul`
  padding-bottom: 20px;
  text-decoration: none;
`;
const StyledTitle = styled.h3`
  text-decoration: none;
  color: #95091b;
`;
