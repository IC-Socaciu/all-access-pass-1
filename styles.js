import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  @media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
  body {
    margin: 0;
    font-family: system-ui;
    background-color: #e9e9e9;
  }
  .interview-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.2rem;
  margin: 10px;
  border: solid 3px #95091B;
}
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: darkred;
}
.image-container {
  display: flex;
  float: left;
  padding-bottom: 5px;
  margin: auto;
  display: block;
  width: 250px;
  height: 250px;
}
.summary-container {
  float: right;
  display: block;

}
.text-container {
  float: left;
  display: block;

}

`;
