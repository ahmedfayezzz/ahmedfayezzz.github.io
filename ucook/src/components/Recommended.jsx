import styled from "styled-components";
import Card from "./Card";
import { connect } from "react-redux";
import { fetchRandom } from "./../redux/receipt/random/randomActions";
import { useEffect } from "react";
import { v4 as uuid } from 'uuid';


const Recommended = ({ randomData, fetchRandom }) => {
  useEffect(() => {
    if (randomData.first) {
      for (let i = 0; i < 5; i++) {
        fetchRandom();
      }
    }
  }, []);
  const Cards = randomData.random.map((receipt)=><Card key={uuid()} receipt={receipt}/>);
  // console.log(randomData);
  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
  `;
  return randomData.loading===true ?(
    <h1>loading....</h1>
  )
  :(
    <CardContainer>
      {Cards}
    </CardContainer>
  )
};
const mapStateToProps = (state) => {
  return {
    randomData: state.random,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandom: () => dispatch(fetchRandom()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommended);
