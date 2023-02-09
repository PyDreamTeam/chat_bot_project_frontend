import styled from "styled-components";

export const Text = styled.span<{color:string; type:string}>`
  ${(props: { type: string; color: string; }) => {
    switch (props.type) {
        case "head":
            return `
                font-family:Times New Roman;
                font-size:16px;
                color:${props.color};
            `;
        case "body":
            return `
                font-family:Times New Roman;
                font-size:16px;
                color:${props.color};
            `;
        default:
            return `
            font-family:Times New Roman;
            font-size:16px;
            color:${props.color};
        `;
    }
}}
`;