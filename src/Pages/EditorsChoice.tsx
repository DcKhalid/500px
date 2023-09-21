import React from "react";
import styled from "styled-components";
import pic from "../Assets/desktop_portfolio.fdf6ee3e.png";
import { BsTrophy } from "react-icons/bs";
import pics from "../Assets/DM.png";
import pics2 from "../Assets/editors1@1x.ac707a42.png"
import pics3 from "../Assets/editors3@1x.c969da9e.png"
import pics4 from "../Assets/editors2@1x.7995ca4d.png" 
import pics5 from "../Assets/editors4@1x.56d457a3.png"


import Pic1 from "../Assets/editors5@1x.91177de2.png"
import Pic2 from "../Assets/editors6@1x.028bc393.png"
import Pic3 from "../Assets/editors7@1x.47799a66.png"
import Pic4 from "../Assets/editors8@1x.126c6fb9.png"
import { LiaAwardSolid } from "react-icons/lia";

const EditorsChoice = () => {
  return (
    <div>
    <Holder>
      <Container>
        <Textcontent>
          <Ick>
            <LiaAwardSolid />
          </Ick>
          <H1>Editors' Choice</H1>
        </Textcontent>
        <Img src={pics} />
      </Container>
      <SecondContainer>
        <Box>
          <Tx>
            <h1>The best of the best.</h1>
            <p>
            Our editors are always on the lookout for jaw dropping content for you to discover and stay inspired. Check back weekly to see what’s new.
            </p>
          </Tx>
          <Button>View Editors' Choice</Button>
        </Box>
        <Box2>        
            <Img2 src={pics2}/>
            <Img2 src={pics3}/>
            <Img2 src={pics4}/>
            <Img2 src={pics5}/>
        </Box2>
        <Box3>
        <Img2 src={Pic1}/>
        <Img2 src={Pic2}/>
        <Img2 src={Pic3}/>
        <Img2 src={Pic4}/>
        </Box3>
      </SecondContainer>
    </Holder>
    </div>
  );
};

export default EditorsChoice ;

const Img2 = styled.img`
  object-fit: contain;
  padding: 0 5px;
`

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
  margin-top: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  p{
  margin-top: -10px;
    }
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
  margin-left: 35%;
  font-size: 20px;
  border-radius: 40px;
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

`;

const Box3 = styled.div`
  height: 60vh;
  width: 98%;
  align-items: normal;
  /* background-color: brown; */
  align-self: center;
  justify-self: center;
  /* background-color: greenyellow; */
  @media screen and (max-width: 360px) {
    width: 90%;
    height: 60%;
    margin-left: 13%;
  }
`;

const Box2 = styled.div`
  height: 50vh;
  margin-top:-400px;
  width: 98%;
  align-items: normal;
  /* background-color: blue; */
  align-self: center;
  justify-self: center;
  /* background-color: greenyellow; */
  @media screen and (max-width: 360px) {
    width: 90%;
    height: 60%;
    margin-left: 13%;
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
  height: 1100px;
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