import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --button-color: #451420;
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
    background-color: #FAFAFA;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;

  }
  .interview-container {
    
align-items: center;
justify-content: center;
display: flex;

    margin-top: 2rem;


}

  .interview-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 1.2rem;
  margin: auto;
  border: solid 3px #95091B;
margin-right: 30px;
margin-top: 30px;


}
.preview-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #95091B;

}
.image-container {
  display: flex;
  float: left;
  margin: auto;
  display: block;
  width: 250px;
  height: 250px;
  text-align: center;
  padding-left: 20px;
  
      
}
.summary-container {
  display: inline;
  width: 70%;
  height: 250px;
  padding-top: 30px;
  text-align: center;
  margin-left: auto;
    margin-right: auto;
    word-wrap: break-word;
    

}
.text-container {
  display: flex;
  padding-left: 20px;
  display: inline-block;
  margin-left: auto;
    margin-right: 30px;
margin-left: auto;
padding-top: 20px;
}


`;
