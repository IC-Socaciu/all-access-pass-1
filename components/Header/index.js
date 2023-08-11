import styled from "styled-components";

export default function Heading() {
  return (
    <Container>
      <Bunny src="/year-of-rabbit.png" alt="Bunny" />
      <WebsiteTitle>all access pass</WebsiteTitle>
    </Container>
  );
}

const WebsiteTitle = styled.h1`
  text-align: center;
  color: #95091b;
  margin-top: 5px;
`;
const Bunny = styled.img`
  height: 20px;
  margin-right: 20px;
  margin-top: 12px;
  filter: invert(100%);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
