import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import InterviewCard from "@/components/InterviewCard";

export default function InterviewArticle() {
  const router = useRouter();
  const interviewId = router.query.interviewId;

  return (
    <>
      <article>
        <InterviewContainer>
          <TitleContainer>{title}</TitleContainer>
          <ImageContainer>
            <Image src={image} alt={title} />
          </ImageContainer>
          <TextContainer>{text}</TextContainer>
        </InterviewContainer>
      </article>
      <button>
        <Link href="/">⬅️ Home</Link>
      </button>
    </>
  );
}

const TextContainer = styled.p`
  display: flex;
  display: inline-block;
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

const InterviewContainer = styled.div`
  align-items: center;
  justify-content: right;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  max-height: px;
`;
