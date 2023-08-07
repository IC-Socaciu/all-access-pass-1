import styled from "styled-components";

export default function Events() {
  return (
    <StyledSection>
      <StyledEvents>
        <ul>
          <li>
            <StyledTime>
              <h2>12</h2>
              <p>October</p>
            </StyledTime>
            <StyledDetails>
              <h3>Stables</h3>
              <p>The Fiddlers</p>
              <p>Frongasse 9, 53121 Bonn</p>
              <p>20:00</p>
              <a href="https://www.songkick.com/de/concerts/41025203-stables-at-fiddlers">
                Buy tickets
              </a>
            </StyledDetails>
          </li>
          <li>
            <StyledTime>
              <h2>12</h2>
              <p>September</p>
            </StyledTime>
            <StyledDetails>
              <h3>REMBRANDT TRIO - Netherland Jazz Classical</h3>
              <p>Harmonie Bonn</p>
              <p>Frongasse 28-30, 53121 Bonn</p>
              <p>19:00</p>
              <a href="https://www.beethovenfest.de/de/programm-tickets/rembrandt-trio/163">
                Buy tickets
              </a>
            </StyledDetails>
          </li>
          <li>
            <StyledTime>
              <h2>12</h2>
              <p>August</p>
            </StyledTime>
            <StyledDetails>
              <h3>IAN PAICE (DEEP PURPLE) - feat. Purpendicular</h3>
              <p>Harmonie Bonn</p>
              <p>Frongasse 28-30, 53121 Bonn</p>
              <p>20:00</p>
              <a href="https://shop.derticketservice.de/harmonie-bonn-tickets/details/?evid=2697725&referer_info=&tId=&forwardingTicket=">
                Buy tickets
              </a>
            </StyledDetails>
          </li>
        </ul>
      </StyledEvents>
    </StyledSection>
  );
}
const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  margin-bottom: 50px;
`;
const StyledEvents = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`;
const StyledTime = styled.div`
  position: relative;
  padding: 20px;
  background: #95091b;
  box-sizing: border-box;
  width: 30%;
  height: 100%;
  float: left;
  text-align: center;
  transition: 0.5s;
`;

const StyledDetails = styled.p`
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
  width: 70%;
  height: 100%;
  float: left;
`;
