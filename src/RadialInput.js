import React from 'react';
import styled from 'styled-components';

const Radial = styled.input`
  margin: 10px;
`;

const InputContainer = styled.div`
  input {
    opacity: 1;
    cursor: pointer;
  }
`;

const RadialInput = (props) => {
  return (
    <InputContainer>
      {props.children}
      {props.values.map((value) => {
        return (
          <>
            <label for={props.name + value}>{value}</label>
            <Radial
              type="radio"
              id={props.id}
              name={props.name}
              value={value}
            />
          </>
        );
      })}
    </InputContainer>
  );
};

export default RadialInput;
