import styled from "styled-components";
import Image from "next/image";

export default function Heading() {
  return (
    <Container>
      <Bunny src="/year-of-rabbit.png" alt="Bunny" width={20} height={20} />
      <WebsiteTitle>all access pass</WebsiteTitle>
    </Container>
  );
}

const WebsiteTitle = styled.h1`
  text-align: center;
  color: #95091b;
  margin-top: 5px;
`;
const Bunny = styled(Image)`
  margin-right: 20px;
  margin-top: 12px;
  filter: invert(100%);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
