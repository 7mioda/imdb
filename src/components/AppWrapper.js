import styled from '@emotion/styled';


export default styled.div`
    color: ${({ theme: { color: { primary } } }) => primary};
    background-color: ${({ theme: { background: { primary } } }) => primary};
    font-family: ${({ theme: { fontFamily } }) => fontFamily};
    width: 100%;
    height: 100vh;
    .scheme-pref-btn {
      position: absolute;
      top: 0;
      right: 0;
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
