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
  margin-right: 20px;
  float: left;
  width: 25%;
  padding-left: 20px;
`;
const Image = styled.img`
  max-width: 250px;
  max-height: 250px;
  /* display: flex; */
  /* float: left; */
  /* margin: auto; */
  /* display: block; */
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: space-evenly; */
  /* list-style-type: none; */
  /* height: 100%; */
  /* overflow: hidden; */
  /* width: 100%; */
`;
const TitleContainer = styled.h2`
  /* display: flex; */
  /* flex-direction: column; */
  /* padding: 5px; */
  text-align: center;
  color: #95091b;
  line-height: 1.4;
  letter-spacing: 0.025em;
  margin: 0 auto;
`;

const SummaryContainer = styled.div`
  /* flex: 1; */
  height: 250px;
  text-align: left;
  word-break: normal;

  /* word-wrap: break-word; */
  /* margin-left: 20px; */
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
  /* align-items: center; */
  /* display: flex; */
  /* justify-content: start; */
  /* margin: 5 rem auto 0 auto; */
  /* display: flex; */
  /* flex-direction: row; */
  padding: 2rem 0;
  box-sizing: border-box;
  height: max-content;
  /* width: 100%; */
  /* height: 280px; */
  /* border-radius: 10px; */
`;
