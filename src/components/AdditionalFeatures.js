import React from 'react';
import AdditionalFeature from './AdditionalFeature';

//redux
import { connect } from 'react-redux'
import { buyItem } from "../actions";

// dipsatch an action here to add an item

const AdditionalFeatures = props => {
  const buyItem = item => {
    props.buyItem(item)
  };


  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state.store.store
  }
}

export default connect(mapStateToProps, {buyItem})(AdditionalFeatures);
