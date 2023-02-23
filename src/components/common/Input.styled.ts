import styled, { css } from "styled-components";
import FilteredPropsInputField from "./FilteredPropsInputField";

type Props = {
     className: string;
     error: string;
     valid: boolean;
};

export const Input = styled(FilteredPropsInputField)<Props>`
     height: 64px;
     background: #f4f5f6;
     border-radius: 20px;
     border: none;
     font-size: 1rem;
     line-height: 1.5rem;
     font-style: normal;
     font-weight: 400;
     width: ${(props) => (props.type === "checkbox" ? "18px" : "100%")};
     margin-top: 0.5rem;
     padding: 16px;

     &:focus,
     &:active {
          background: #f4f5f6;
          border: none;
          outline: none;
     }

     &:-webkit-autofill,
     &:-webkit-autofill:hover,
     &:-webkit-autofill:focus {
          background: #f4f5f6;
          border: none;
          box-shadow: 0 0 0 1000px #f4f5f6 inset;
          -webkit-box-shadow: 0 0 0 1000px #f4f5f6 inset;
          transition: background-color 5000s ease-in-out 0s;
          -webkit-text-fill-color: black;
     }

     ${({ valid }: Props) =>
          valid &&
          css`
               border: 1px solid rgb(0, 156, 38);

               &:focus,
               &:active {
                    border: 1px solid rgb(0, 156, 38);
                    box-shadow: rgb(106, 237, 97) 0 0 2px 1px, rgb(177, 247, 160) 0 0 0 3px;
                    outline: none;
               }

               &:-webkit-autofill,
               &:-webkit-autofill:hover,
               &:-webkit-autofill:focus {
                    border: 1px solid rgb(0, 156, 38);
               }
          `}

     ${({ error }: Props) =>
          error &&
          css`
               border: 1px solid rgb(191, 49, 12);
               outline: none;

               &:focus,
               &:active {
                    border: 1px solid rgb(191, 49, 12);
                    outline: none;
               }

               &:-webkit-autofill,
               &:-webkit-autofill:hover,
               &:-webkit-autofill:focus {
                    border: 1px solid rgb(191, 49, 12);
               }
          `}
`;

export const StyledInlineErrorMessage = styled.div`
     color: #f53527;
     display: block;
     white-space: pre-line;
`;

export const FooterInput = styled(FilteredPropsInputField)<Props>`
     background: none;
     border: none;
     font-family: "Inter";
     font-style: normal;
     font-weight: 700;
     font-size: 16px;
     line-height: 19px;
     color: #e1e2e6;

     &:focus,
     &:active {
          border: none;
          outline: none;
     }
`;
