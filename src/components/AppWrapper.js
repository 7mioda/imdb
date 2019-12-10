import styled from '@emotion/styled';


export default styled.div`
    color: ${({ theme: { colors: { primary } } }) => primary};
    background-color: ${({ theme: { colors: { primary } } }) => primary};
    font-family: ${({ theme: { fontFamily: { primary } } }) => primary};
    width: 100%;
    .scheme-pref-btn {
      position: absolute;
      right: 0;
      top: 16px;
      z-index: 1;
      transform: rotate(90deg);
    }
    .fade-enter {
      opacity: 0;
      z-index: 1;
    }
    .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 250ms ease-in;
    }

`;
