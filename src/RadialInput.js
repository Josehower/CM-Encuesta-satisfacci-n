import React from 'react';

const RadialInput = (props) => {
  return (
    <>
      {props.children}
      {props.values.map((value) => {
        return (
          <>
            <label for={props.name + value}>{value}</label>
            <input
              type="radio"
              id={props.id}
              name={props.name + value}
              value={value}
            />
          </>
        );
      })}
    </>
  );
};

export default RadialInput;
