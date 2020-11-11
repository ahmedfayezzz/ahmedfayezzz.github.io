import { useEffect } from 'react';
import { connect } from 'react-redux';
import { filterByArea } from '../redux/';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContainer from './CardsContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center'
  },
}));
const AreaDetails = (props) => {
  const classes=useStyles()
  const name=props.match.params.name
  
  const filterArea = props.filterArea;
  const areaData = props.areaData;
  useEffect(()=>{
    filterArea(name)
  },[])
  console.log(areaData)
  return areaData.loading===true ?(
    <div className={classes.root}>
      <CircularProgress size='4rem'/>
    </div>
  )
  :( 
    <CardContainer name={name} recipes={areaData.recipes.meals}/>
  );
}
const mapStateToProps = (state) => {
  return {
    areaData: state.areaFilter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filterArea: (area) => dispatch(filterByArea(area)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(AreaDetails);