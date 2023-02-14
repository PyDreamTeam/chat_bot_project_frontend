import styled from "styled-components";

export const FooterRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  
  h2{
    max-width: 552px;
    height: 84px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 130%;
    color: #FFFFFF;  
    }
`;

export const FooterInputBlock = styled.div`
  color: #E1E2E6;
  max-width: 424px;
  border-bottom: 1px solid #E1E2E6;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`

export const FooterArrowButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`