import styled from "styled-components";

export const WrapperRegister = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const BlockLeft = styled.div`
  width: 27%;
  background: linear-gradient(rgba(80, 112, 245, 0.7), rgba(156, 229, 98, 1));
`;

export const BlockRight = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
  p {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #17181A;
    padding-bottom: 18px;
    span {
      color: #4466F5;
    }
    
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 468px;
  
  form {
    max-width: 468px;
    width: 100%;
  }
`