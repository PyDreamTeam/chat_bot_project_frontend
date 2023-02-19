import styled from "styled-components";


export const LabelsBox = styled.div `
  width: 440px;
  height:auto;

  display: flex;
  flex-direction: column;
  justify-content:space-between;
`;


export const Label = styled.label<{ htmlFor:string }>`
  ${(props: { htmlFor:string }) => {
    switch (props.htmlFor) {
      case "checkbox":
        return `
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap:8px;
            p{
              margin:0;
            }
            input{
              max-width: 440px;
              margin:0px;
              styleName: 16pt -T2 -Text_2- Regular;
              font-family: Inter;
              font-size: 16px;
              font-weight: 400;
              line-height: 24px;
              letter-spacing: 0em;
              text-align: left;
            }
          `;
      default:
        return `
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap:8px;
          p{
            margin:0;
            padding: 0;
          }
          input{
            margin:0px;
            max-width: 440px;
          }
        `;
    }
  }}
`;