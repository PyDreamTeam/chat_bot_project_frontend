import styled from "styled-components";

export const Button = styled.button <{ type: string; primary: string; }>`
  background: ${props => props.primary ? "#4466F5" : "black"};
  
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: white;
  padding: 18px;
  gap: 10px;
  width: 100%;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;
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