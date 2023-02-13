import styled, {css} from "styled-components";

type Props = {
    SignInButton?: string;
    SignUpButton?: string;
}

export const Button = styled.button <Props>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  padding: 18px;
  border-radius: 20px;
  cursor: pointer;
  ${({SignInButton}: Props) =>
          SignInButton &&
          css`
            padding: 10px 12px;
            border: 1px solid #4466F5;
            background: transparent;
            color: #4466F5;
          `}

  ${({SignUpButton}: Props) =>
          SignUpButton &&
          css`
            padding: 10px 12px;
            background: #4466F5;
            border: 1px solid #4466F5;
            color: #FFFFFF;
          `}`
;

export const Submit = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background-color: #4466F5;
  border: none;
  border-radius: 20px;
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: rgb(232, 243, 255) !important;
  padding: 0.5rem 1rem;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    border-radius: 20px;
    border: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;