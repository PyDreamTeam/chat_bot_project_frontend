import styled from "styled-components";

export const WrapperRegister = styled.div`
     width: 100%;
     height: 100vh;
     display: flex;
     justify-content: center;
`;

export const BlockLeft = styled.div`
     width: 27%;
     background: linear-gradient(rgba(80, 112, 245, 0.7), rgba(156, 229, 98, 1));
`;

export const BlockRight = styled.div`
     &,
     & * {
          box-sizing: border-box;
     }
     margin-left: auto;
     margin-right: auto;
     display: flex;
     align-items: center;
     justify-content: center;

     p {
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 150%;
          color: #17181a;
          text-align: left;
          span {
               color: #4466f5;
          }
     }
`;

export const ContentBlock = styled.div`
     display: flex;
     flex-direction: column;
     gap: 16px;
     max-width: 468px;
     width: 100%;

     form {
          max-width: 468px;
          width: 100%;
     }
`;

export const ChangePasswordBlock = styled.div`
     display: flex;
     flex-direction: column;
     text-align: left;
     gap: 16px;
     max-width: 483px;
     align-items: baseline;

     form {
          max-width: 483px;
          width: 100%;
     }
`;
