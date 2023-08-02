import Link from "next/link";
import InterviewCard from "@/components/InterviewCard";
import styled from "styled-components";
import { interviews } from "@/public/interviews";
import { useRouter } from "next/router";

export default function Interviews() {
  const router = useRouter();
  const interviewId = router.query.interviewId;
  const article = interviews.find((interview) => interview.id === interviewId);
  return (
    <>
      <article>
        <InterviewContainer>
          <TitleContainer>{article.title}</TitleContainer>
          <ImageContainer>
            {/* <img src={image} alt={title} /> */}

            <Image src={article.image} alt={title} />
          </ImageContainer>
          <TextContainer>{article.text}</TextContainer>
        </InterviewContainer>
      </article>
    </>
  );
}

const TextContainer = styled.p`
  justify-content: right;
`;
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
`;
const Image = styled.img`
  max-width: 200px;
  max-height: 250px;
  display: flex;
  float: left;
  margin: auto;
  display: block;
  text-align: center;
`;
const TitleContainer = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #95091b;
  line-height: 1.4;
  margin: 0;
`;

const SummaryContainer = styled.p`
  display: inline;
  width: 70%;
  height: 250px;
  padding-top: 30px;
  text-align: right;
  word-wrap: break-word;
`;
const InterviewContainer = styled.div`
  align-items: center;
  justify-content: right;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  max-height: px;
`;
