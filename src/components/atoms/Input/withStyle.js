import styled from '@emotion/styled';

export default (component) => styled(component)`
  position: relative;
  width: ${({ width }) => width || '100%'};
  box-sizing: border-box;
  border: 1px solid rgba(128, 128, 128, 0.32);
  display: flex;
  background-color: ${({ theme: { colors: { primary } } }) => primary};
  
  
  input {
    padding: 0 1rem;
    border-style: none;
    height: ${({ height }) => height || '100%'};
    color: ${({ theme: { colors: { tertiary } } }) => tertiary};
    font-family: inherit;
    background-color: inherit;
    flex-grow: 1;
    outline: none;
  }
  .rounded {
    border-radius: 40px;
    padding: ${({ padding }) => padding || '0 30px'};
  }
  .prefix {
    top: 50%;
  }
  .suffix {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
