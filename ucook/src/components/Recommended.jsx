import styled from 'styled-components';
import Card from './Card';
const Recommended = () => {
  const CardContainer=styled.div`
    display:flex;

  `
  return ( 
    <CardContainer>
      <Card/>
      <Card/>
    </CardContainer>
  );
}
 
export default Recommended