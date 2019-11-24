import styled from '@emotion/styled';


export default styled.div`
    color: ${({ theme: { color: { primary } } }) => primary};
    background-color: ${({ theme: { background: { primary } } }) => primary};
    font-family: ${({ theme: { fontFamily } }) => fontFamily};
    width: 100%;
    height: 100vh;
`;
