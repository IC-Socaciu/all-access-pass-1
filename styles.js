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
    font-family: Roboto;
    background-color: #e9e9e9;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.025em;

  }


  .interview-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border-radius: 1.2rem; */
  margin: auto;
  border-bottom: solid 3px #95091B;



  }



.text-container {
  display: flex;
  padding-left: 20px;
  display: inline-block;
   

}


`;
