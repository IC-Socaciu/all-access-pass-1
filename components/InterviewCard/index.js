import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function InterviewCard({ id, title, summary, text, image }) {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/articles/${interiewId}`);
  };

  return (
    <>
      <article>
        <InterviewContainer>
          <TitleContainer>{title}</TitleContainer>
          <ImageContainer>
            {/* <img src={image} alt={title} /> */}

            <Image src={image} alt={title} />
          </ImageContainer>
          <SummaryContainer>{summary}</SummaryContainer>
          {/* <p className="text-container">{text}</p> */}
        </InterviewContainer>
      </article>
      <ReadButton>Read more</ReadButton>
    </>
  );
}

const ImageContainer = styled.div`
  max-width: 150px;
  max-height: 250px;
  display: flex;
  float: left;
  margin: auto;
  display: block;
  width: 250px;
  height: 250px;
  text-align: center;
  padding-left: 20px;
`;
const Image = styled.img`
  max-width: 200px;
  max-height: 250px;
  display: flex;
  float: left;
  margin: auto;
  display: block;
  text-align: center;
  padding-left: 20px;
`;
const TitleContainer = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #95091b;
`;

const SummaryContainer = styled.p`
  display: inline;
  width: 70%;
  height: 250px;
  padding-top: 30px;
  text-align: right;
  word-wrap: break-word;
`;
const ReadButton = styled.button`
  width: 120px;
  height: 30px;
  font-weight: 600;
  box-shadow: 2px 2px grey;
  color: #95091b;
  border: solid 2px #95091b;
  &:hover {
    background-color: #099584;
    color: white;
  }
`;
const InterviewContainer = styled.div`
  align-items: center;
  justify-content: right;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  max-height: px;
`;
