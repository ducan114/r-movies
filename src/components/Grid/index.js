import React from 'react';
import CommentList from './CommentList/CommentList';
//Styles
import { Wrapper, Content } from './Grid.style';

const Grid = ({ header, children }) => (
    <div>
        <CommentList/>
        <Wrapper>
          <h1>{header}</h1>
          <Content>{children}</Content>
        </Wrapper>
    </div>
);

export default Grid;
