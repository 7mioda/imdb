import styled from '@emotion/styled';


export default (component) => styled(component)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 60px;
    color: ${({ theme: { colors: { tertiary } } }) => tertiary};
    min-height: 100vh;
`;
