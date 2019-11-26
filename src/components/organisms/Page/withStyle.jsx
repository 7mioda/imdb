import styled from '@emotion/styled';


export default (component) => styled(component)`
  padding-top: 60px;
  color: ${({ theme: { colors: { tertiary } } }) => tertiary};
`;
