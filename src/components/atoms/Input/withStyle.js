import styled from '@emotion/styled';

export default (component) => styled(component)`
  position: relative;
  width: ${({ width }) => width || '100%'};
  box-sizing: border-box;
  
  input {
    border: 1px solid rgba(128, 128, 128, 0.32);
    width: 90%;
    height: ${({ height }) => height || '100%'};
    border-radius: 5px;
    color: ${({ theme: { colors: { tertiary } } }) => tertiary};
    background-color: ${({ theme: { colors: { primary } } }) => primary};
    padding: ${({ padding }) => padding || '0 20px'};
    font-family: inherit;
  }
  .highlighted {
  }
  .highlighted:focus {
    border: 1px solid rgba(128, 128, 128, 0.9);
  }
  .rounded {
    border-radius: 40px;
    padding: ${({ padding }) => padding || '0 30px'};
  }
  .prefix {
    position: absolute;
    height: 100%;
    width: 10%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  .suffix {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 10%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
`;