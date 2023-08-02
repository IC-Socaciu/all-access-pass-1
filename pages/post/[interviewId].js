import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { interviews } from "@/public/interviews";
import Markdown from "markdown-to-jsx";

export default function InterviewArticle() {
  const router = useRouter();
  const interviewId = router.query.interviewId;
  const article = interviews.find((interview) => interview.id == interviewId);
  if (!article) {
    return null;
  }
  return (
    <article>
      <TitleContainer>{article?.title}</TitleContainer>
      <ImageContainer>
        <Image src={article?.image} alt={article?.title} />
      </ImageContainer>
      <TextContainer>
        <Markdown>{article?.text}</Markdown>
      </TextContainer>
    </article>
  );
}

const TextContainer = styled.div`
  padding-left: 20px;
  margin-top: 0;
  word-break: normal;
`;
const ImageContainer = styled.div`
  max-width: 150px;
  max-height: 250px;

  float: left;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const TitleContainer = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #95091b;
  line-height: 1.4;
  margin-top: 0;
`;
