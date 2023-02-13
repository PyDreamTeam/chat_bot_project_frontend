import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 400px;
  background: #000000;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const FooterBox = styled.footer`
  max-width: 1440px;
  height: 400px;
  background: #000000;
  display: flex;
  padding: 90px 0 0;
  gap: 404px;
`;

export const LogoSvg = styled.svg`
  fill: #FFFFFF;
  transition: 0.3s;
    &:hover{
      fill: powderblue;
    }
`