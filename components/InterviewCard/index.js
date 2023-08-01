import styled from "styled-components";

export default function InterviewCard({ id, title, summary, text, image }) {
  return (
    <article>
      <div>
        <h2 className="title-container">{title}</h2>
        <ImageContainer>
          {/* <img src={image} alt={title} /> */}

          <Image src={image} alt={title} />
        </ImageContainer>
        <p className="summary-container">{summary}</p>
        {/* <p className="text-container">{text}</p> */}
      </div>
    </article>
  );
}

const ImageContainer = styled.div`
  max-width: 150px;
  max-height: 250px;
`;
const Image = styled.img`
  max-width: 200px;
  max-height: 250px;
`;
