import styled from 'styled-components';

export const Text = styled.div<{ fontFamily: string; fontSize:string; color: string; fontWeight:string }>`
    font-family:${props=>props.fontFamily};
    font-size:${props=>props.fontSize};
    color:${props=>props.color};
    font-weight:${props=>props.fontWeight};
`;