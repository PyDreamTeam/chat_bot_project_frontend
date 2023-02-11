import styled, {css} from "styled-components";
import FilteredPropsInputField from "./FilteredPropsInputField";

type Props = {
    className: string,
    error: string;
    valid: boolean;
}
export const Input = styled(FilteredPropsInputField) <Props>`
height: 64px;
  background: #F4F5F6;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: ${props=>(props.type==='checkbox'?'18px':'100%')};
  margin-top: 0.5rem;
  padding: 16px;

  &:focus,
  &:active {
    background: #F4F5F6;
    //box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px 3px;
    border: none;
    outline: none;
  }

  /* Autocomplete styles in Chrome*/

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background: #F4F5F6;
    border: none;
    box-shadow: 0 0 0px 1000px #F4F5F6 inset;
    -webkit-box-shadow: 0 0 0px 1000px #F4F5F6 inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({valid}: Props) =>
          valid &&
          css`
            border: 1px solid rgb(0, 156, 38);

            &:focus,
            &:active {
              border: 1px solid rgb(0, 156, 38);
              box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px, rgb(177, 247, 160) 0px 0px 0px 3px;
              outline: none;
            }

            /* Autocomplete styles in Chrome*/

            &:-webkit-autofill,
            &:-webkit-autofill:hover,
            &:-webkit-autofill:focus {
              border: 1px solid rgb(0, 156, 38);
            }
          `}

  ${({error}: Props) =>
          error &&
          css`
            border: 1px solid rgb(191, 49, 12);
            outline: none;

            &:focus,
            &:active {              
              border: 1px solid rgb(191, 49, 12);
              outline: none;
            }

            /* Autocomplete styles in Chrome*/

            &:-webkit-autofill,
            &:-webkit-autofill:hover,
            &:-webkit-autofill:focus {
              border: 1px solid rgb(191, 49, 12);
            }
          `}
`;

export const StyledInlineErrorMessage = styled.div`
  color: #F53527;
  display: block;

  // padding: 0.5rem 0.75rem;
  // margin-top: 0.5rem;
  white-space: pre-line;
`;