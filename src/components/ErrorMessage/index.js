import React from 'react';
import { Message, Wrapper } from './ErrorMessage.style';

const ErrorMessage = ({ message }) => {
  return (
    <Wrapper>
      <Message>{message}</Message>
    </Wrapper>
  );
};

export default ErrorMessage;
