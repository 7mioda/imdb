import styled from '@emotion/styled';


export default styled.div`
    color: ${({ theme: { colors: { primary } } }) => primary};
    background-color: ${({ theme: { colors: { primary } } }) => primary};
    font-family: ${({ theme: { fontFamily: { primary } } }) => primary};
    width: 100%;
    height: 1000px;
    .scheme-pref-btn {
      position: absolute;
      top: 5px;
      left: 5px;
      z-index: 1;
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
