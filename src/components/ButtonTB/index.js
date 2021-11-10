import { Wrapper } from './ButtonTB.styles';

import React from 'react';

const ButtonTB = ({ text, callback, color, hoverColor }) => {
  return (
    <Wrapper color={color} hoverColor={hoverColor} onClick={callback}>
      {text}
    </Wrapper>
  );
};

export default ButtonTB;
