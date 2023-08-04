import { interviews } from "@/public/interviews";

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
    <ul>
      {results.map((interview) => (
        <li key={interview.id}>
          <h3>{interview.title}</h3>
          <p>{interview.text}</p>
          <ul>
            {interview.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
