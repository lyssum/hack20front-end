import React from 'react';

const userstats = (props) => {
  return(
    <div>
      <p>{props.age}</p>
      <p>{props.height}</p>
      <p>{props.weight}</p>
  </div>
  );
};

export default userstats;