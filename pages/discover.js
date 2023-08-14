import styled from "styled-components";
import useSWR from "swr";
import { useCallback } from "react";

const URL = `https://binaryjazz.us/wp-json/genrenator/v1/genre/`;

export default function Discover() {
  const { data, error, mutate } = useSWR(URL, async (URL) => {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  });

  const handleClick = useCallback(() => {
    mutate();
  }, [mutate]);

  if (!data) {
    return <div>Loading ...</div>;
  }

  return (
    <MusicBox>
      <DiscoverTitle>Discover!</DiscoverTitle>
      <DiscoverText>Looking for a new style of music?</DiscoverText>
      <StyleSuggestion className="musicGenre">{data}</StyleSuggestion>
      <GenerateNewButton onClick={handleClick}>
        Get New Genre
      </GenerateNewButton>{" "}
    </MusicBox>
  );
}

const MusicBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 50px;
  border: solid 2px #451420;
  border-radius: 0.25em;
`;
const DiscoverTitle = styled.h2`
  color: #451420;
`;
const DiscoverText = styled.p``;
const StyleSuggestion = styled.h4`
  color: #451420;
`;

const GenerateNewButton = styled.button`
  background-color: #fafafa;
  color: #451420;
  border: 2px solid #451420;
  height: 30px;
  &:hover {
    background-color: #451420;
    color: white;
  }
`;
