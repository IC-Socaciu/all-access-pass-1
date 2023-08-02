import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { interviews } from "@/public/interviews";

export default function InterviewArticle() {
  const router = useRouter();
  const interviewId = router.query.interviewId;
  const article = interviews.find((interview) => interview.id == interviewId);
  console.log(interviewId);
  return (
    <article>
      <TitleContainer>{article?.title}</TitleContainer>
      <ImageContainer>
        <Image src={article?.image} alt={article?.title} />
      </ImageContainer>
      <TextContainer>{article?.text}</TextContainer>
    </article>
  );
}

const TextContainer = styled.div`
  /* justify-content: right; */
  /* display: flex; */
  /* padding-left: 20px; */
  /* display: inline-block; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  padding-left: 20px;
  margin-top: 0;
  word-break: normal;
`;
const ImageContainer = styled.div`
  max-width: 150px;
  max-height: 250px;
  /* display: flex; */
  float: left;
  /* margin: auto; */
  /* display: block; */
  /* width: 250px; */
  /* height: 250px; */
  /* text-align: center; */
`;
const Image = styled.img`
  /* max-width: 200px;
  max-height: 250px; */
  /* display: flex; */
  /* float: left; */
  /* margin: auto; */
  /* display: block; */
  /* text-align: center; */
  max-width: 100%;
  max-height: 100%;
`;
const TitleContainer = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #95091b;
  line-height: 1.4;
  /* margin: 0; */
  margin-top: 0;
`;
