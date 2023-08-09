import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { interviews } from "@/public/interviews";
import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";
import ThumbUps from "@/public/thumbs-up-regular.svg";

export default function InterviewArticle() {
  const router = useRouter();
  const interviewId = router.query.interviewId;
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes${interviewId}`);
    if (savedLikes !== null) {
      setLikes(parseInt(savedLikes));
    }
  }, [interviewId]);

  const article = interviews.find((interview) => interview.id == interviewId);
  if (!article) {
    return null;
  }

  const handleLikeClick = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes${interviewId}`, newLikes.toString());
  };

  return (
    <article>
      <TitleContainer>{article?.title}</TitleContainer>
      <ThumbUpContainer>
        <ThumbUpIcon onClick={handleLikeClick} />
        <span>{likes}</span>
      </ThumbUpContainer>
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
  margin-bottom: 120px;
  margin-left: 20px;
`;
const ImageContainer = styled.div`
  max-width: 150px;
  max-height: 250px;
  float: left;
  margin-left: 20px;
  margin-right: 20px;
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
const ThumbUpContainer = styled.button`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const ThumbUpIcon = styled(ThumbUps)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  fill: #95091b;
  margin-left: 20px;
`;
