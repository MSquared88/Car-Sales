import React from 'react';

//componets
import AddedFeature from './AddedFeature';

//redux 
import { connect } from 'react-redux'
import { removeFeature } from "../actions";



const AddedFeatures = props => {

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.state.car.features.length ? (
        <ol type="1">
          {props.state.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    state: state.store
  }
}

export default connect(mapStateToProps, {})(AddedFeatures);
