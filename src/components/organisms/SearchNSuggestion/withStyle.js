import styled from '@emotion/styled';


export default (component) => styled(component)`
  height: 95%;
  background-color: ${({ theme: { colors: { primary } } }) => primary};
  border: 1px solid rgba(128, 128, 128, 0.32);
  z-index: 2;
  ul {
    color: ${({ theme: { colors: { tertiary } } }) => tertiary};
    width: 150px;
    li {
    padding: 1rem 0;
    span {
      display: flex;
      justify-content: flex-start;
      align-content: center;
      align-items: center;
          img {
            margin-right: 5px;
            
          }
    }
    }
  }
  
`;
