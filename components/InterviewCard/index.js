import styled from "styled-components";
import Link from "next/link";

export default function InterviewCard({ id, title, summary, text, image }) {
  return (
    <>
      <article>
        <InterviewContainer>
          <TitleContainer>{title}</TitleContainer>
          <ImageContainer>
            <Image src={image} alt={title} />
          </ImageContainer>
          <SummaryContainer>{summary}</SummaryContainer>
        </InterviewContainer>
      </article>
      <ReadLink href={`/post/${id}`}>Read more</ReadLink>
    </>
  );
}

const ImageContainer = styled.div`
  display: flex;
  margin-right: 20px;
  float: left;
`;
const Image = styled.img`
  max-width: 250px;
  max-height: 250px;
  display: flex;
  float: left;
  margin: auto;
  display: block;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
`;
const TitleContainer = styled.h2`
  /* display: flex;
  flex-direction: column; */
  padding: 5px;
  text-align: center;
  color: #95091b;
  line-height: 1.4;
  letter-spacing: 0.025em;
  margin: 0 auto;
`;

const SummaryContainer = styled.p`
  flex: 1;
  height: 250px;
  text-align: center;
  word-wrap: break-word;
  margin-left: 20px;
`;
const ReadLink = styled(Link)`
  width: 110px;
  height: 25px;
  box-shadow: 2px 2px grey;
  color: #95091b;
  border: solid 2px #95091b;
  position: relative;
  right: 80px;
  top: 100px;
  &:hover {
    background-color: #099584;
    color: white;
  }
`;
const InterviewContainer = styled.div`
  align-items: center;
  justify-content: right;
`;
