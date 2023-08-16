import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
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
  @media only screen and (max-width: 768px) {
    input[type="text"],
    select {
      width: 100%;
    }
    textarea {
      width: 100%;
      height: 150px;
    }
    button {
      margin-bottom: 50px;
    }
  }

}
body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #FAFAFA;
    font-size: 16px;
    line-height: 1.5;
  }
  
  @media screen and (max-width: 650px) {
    .column {
      width: 100%;
      display: block;
    }
  }
  


  .interview-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }

  .interview-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 1.2rem;
    margin: auto;
    border: solid 2px #95091b;
    margin-right: 30px;
    margin-top: 30px;
  }

  .preview-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #95091B;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.2;

    @media screen and (max-width: 650px) {
      font-size: 1.2rem;
    }
  }

  .image-container {
    display: flex;
    float: left;
    margin: auto;
    width: 250px;
    height: 250px;
    text-align: center;
    padding-left: 20px;

    @media screen and (max-width: 650px) {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  .summary-container {
    width: 70%;
    height: 250px;
    padding-top: 30px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    word-wrap: break-word;

    @media screen and (max-width: 650px) {
      width: 100%;
      height: auto;
      padding: 20px;
      font-size: 1.2rem;
    }
  }

  .text-container {
    display: inline-block;
    padding-left: 20px;
    display: inline-block;
    margin-left: auto;
    margin-right: 30px;
    margin-left: auto;
    padding-top: 20px;
  }
`;
