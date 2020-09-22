import React from 'react';
// import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Content = styled.div`
  text-align: center;
  margin-top: 10px;
  p{
    font-weight: bold;
  }
`;
export default () => (
  <div>
    <p
      css={{
        background: "pink",
        color: "blue"
      }}
    >
      this page is using emotion.
      <Content>
        this page is using emotion.
      </Content>
    </p>
  </div>
)