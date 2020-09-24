import React from 'react';

const RadialInput = (props) => {
  return (
    <>
      {props.children}
      {props.values.map((value) => {
        return (
          <>
            <input type="radio" id={props.id} name={props.name} value={value} />
            <label for={value}>{value}</label>
          </>
        );
      })}
    </>
  );
};

export default RadialInput;
