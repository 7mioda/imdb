import styled from '@emotion/styled';


export default (component) => styled(component)`
  height: 95%;
  background-color: ${({ theme: { colors: { primary } } }) => primary};
  border: 1px solid rgba(128, 128, 128, 0.32);
  ul {
    color: ${({ theme: { colors: { tertiary } } }) => tertiary};
    width: 150px;
    padding: 10px;
    li {
    padding: 5px;
    }
  }
  
`;
