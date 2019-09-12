import React from 'react';

//components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

//redux 
import { connect } from 'react-redux'
import { removeFeature, buyItem } from "./actions";


const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total state={props.state}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    state: state.store
  }
}


export default connect(mapStateToProps, {buyItem, removeFeature})(App);
