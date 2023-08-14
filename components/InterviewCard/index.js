import Link from "next/link";
import styled from "styled-components";

export default function InterviewCard({ id, title, summary, image }) {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <SummaryContainer>{summary}</SummaryContainer>
      <ReadMore href={`/post/${id}`}>Read more</ReadMore>
      <SeparatorLine />
    </CardContainer>
  );
}
export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 50px;
`;

export const ImageContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 250px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #95091b;
  line-height: 1.4;
  letter-spacing: 0.025em;
  margin: 0 auto 1rem;
`;

export const SummaryContainer = styled.div`
  text-align: justify;
  word-break: normal;
  max-width: 80%;
`;

export const ReadMore = styled(Link)`
  width: 110px;
  height: 25px;
  box-shadow: 2px 2px grey;
  background-color: #fafafa;
  color: #95091b;
  border: solid 2px #95091b;
  position: relative;
  top: 1rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #95091b;
    color: #fafafa;
  }
`;

export const SeparatorLine = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 1px;
`;
