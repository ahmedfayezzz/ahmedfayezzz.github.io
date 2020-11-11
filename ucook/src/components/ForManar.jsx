import styled from "styled-components";
import heartBackground from "../images/heartBackground.gif";
const DIV = styled.div`
  background-image:url('src/images/heartBackground.gif');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items:center;
  /* margin:auto 0; */
  width:100vw;
  height:100vh;
`;
const H1 = styled.h1`
  color: red;
  font-size: 3rem;
  font-weight:700
`;

const IMG = styled.img``;
const ForManar = () => {
  return (
    <DIV>
      <H1>I LOVE YOU</H1>
      {/* <img src={heart} alt="" /> */}
    </DIV>
  );
};

export default ForManar;
