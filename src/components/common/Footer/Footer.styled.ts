import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #000000;
`;

export const FooterBox = styled.footer`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 90px 148px 143px 88px;  
  margin: auto;
`;

export const LogoSvg = styled.svg`
  fill: #FFFFFF;
  transition: 0.3s;

  &:hover {
    fill: powderblue;
  }
`