import { useRouter } from "next/router";
import { interviews } from "@/public/interviews";
import Link from "next/link";

import Footer from "@/components/Footer";
import {
  StyledResult,
  StyledTitle,
  PreviewText,
  StyledTags,
} from "@/components/Search/SearchResults/styles";

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
          <Link href={`/post/${interview.id}`}>
            <StyledTitle>{interview.title}</StyledTitle>
          </Link>
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
