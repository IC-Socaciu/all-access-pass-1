import styled from "styled-components";
import Link from "next/link";
import Footer from "../Footer";
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
  margin-right: 20px;
  width: 25%;
`;
const Image = styled.img`
  max-width: 250px;
  max-height: 250px;
`;
const TitleContainer = styled.h2`
  text-align: center;
  color: #95091b;
  line-height: 1.4;
  letter-spacing: 0.025em;
  margin: 0 auto;
`;

const SummaryContainer = styled.div`
  text-align: left;
  word-break: normal;
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
  /* padding: 2rem 0; */
  padding: 3em;

  box-sizing: border-box;
  height: max-content;
  max-width: 100%;
`;
