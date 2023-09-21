import React from "react";
import styled from "styled-components";
import pic from "../Assets/desktop_portfolio.fdf6ee3e.png";
import { BsTrophy } from "react-icons/bs";
import pics from "../Assets/DM.png";
import { VscBriefcase } from "react-icons/vsc";

const Portfolio = () => {
  return (
    <div>
    <Holder>
      <Container>
        <Textcontent>
          <Ick>
            <VscBriefcase />
          </Ick>
          <H1>Portfolio</H1>
        </Textcontent>
        <Img src={pics} />
      </Container>
      <SecondContainer>
        <Box>
          <Tx>
            <h1>Designed and built for photographers</h1>
            <p>
            Create your own high-quality website in minutes. Portfolios allows you to share your work externally so you can build your own brand and market yourself as a professional photographer
            </p>
          </Tx>
        </Box>
        <Box2>        
            <img src={pic} />
            <Button>Get Started</Button>
        </Box2>
      </SecondContainer>
    </Holder>
    </div>
  );
};

export default Portfolio;

const H1 = styled.div`
  font-weight: bold;
  font-size: 60px;
  color: white;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  text-align: center;
`;

const Ick = styled.div`
  background-color: #45457c;
  color: white;
  margin-top: 70px;
  margin-left: 45%;
  display: flex;
  justify-content: center;
  border-radius: 70%;
  align-items: center;
  font-size: 80px;
  height: 15vh;
  display: flex;
  width: 8%;
  @media screen and (max-width: 412px) {
    width: 20%;
    height: 50%;
    font-size: 40px;
    align-items: center;
}
`;

const Textcontent = styled.div`
  height: 25%;
  width: 100%;
  position: absolute;
  p {
    color: white;
    float: right;
  }
  /* @media screen and (max-width: 500px) {
    width: 100%;
    height: 20%;
  } */
`;

const Tx = styled.div`
  margin-top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  h1{
    text-align: center;
  }
`;

const Img = styled.img`
  height: 45vh;
  width: 100%;
  object-fit: cover;
  @media screen and (max-width: 500px) {
    width: 100%;
}
`;

const Button = styled.button`
  background-color: #000000;
  color: white;
  padding: 15px 50px;
  margin-left: 20%;
  font-size: 20px;
  border-radius: 40px;
  border: none;
  font-weight: bold;
  margin-top: -250px;
  align-self: center;
  justify-self: center;

`;

const Box2 = styled.div`
  height: 60vh;
  margin-top:-500px;
  width: 40%;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  /* background-color: greenyellow; */
  @media screen and (max-width: 360px) {
    width: 90%;
    height: 60%;
    margin-left: 13%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Box = styled.div`
  margin-top: 10px; 
  height: 60%;
  width: 70%;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const SecondContainer = styled.div`
  height: 700px;
  width: 100%;
  /* background-color: aqua; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Container = styled.div`
  height: 45vh;
  width: 100%;
  background-color: burlywood;
`;
const Holder = styled.div`
  /* background-color: pink; */
  flex-wrap: wrap;
  @media screen and (max-width: 360px) {
    width: 100%;
  }
`;