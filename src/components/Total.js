import React from 'react';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.state.car.price + props.state.additionalPrice}</h4>
    </div>
  );
};

export default Total;
