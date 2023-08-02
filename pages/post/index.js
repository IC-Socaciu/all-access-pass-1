import Link from "next/link";
import InterviewCard from "@/components/InterviewCard";
import styled from "styled-components";

export default function Interviews() {
  return (
    <>
      <article>
        <InterviewContainer>
          <TitleContainer>{title}</TitleContainer>
          <ImageContainer>
            {/* <img src={image} alt={title} /> */}

            <Image src={image} alt={title} />
          </ImageContainer>
          <TextContainer>{text}</TextContainer>
        </InterviewContainer>
      </article>
    </>
  );
}

const TextContainer = styled.p`
  justify-content: right;
`;
