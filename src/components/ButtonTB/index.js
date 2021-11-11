import React from 'react';
// Styles
import { Wrapper } from './ButtonTB.styles';

const ButtonTB = ({ text, callback, color, hoverColor }) => {
  return (
    <Wrapper color={color} hoverColor={hoverColor} onClick={callback}>
      {text}
    </Wrapper>
  );
};

export default ButtonTB;
