import styled, {css} from "styled-components";

type logoProps = {
    header?: string;
    footer?: string;
}

export const Logo = styled.div <logoProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  ${({header}: logoProps) =>
          header &&
          css`
            color: #17181A;
          `}
  ${({footer}: logoProps) =>
          footer &&
          css`
            color: #FFFFFF;
          `} 
`