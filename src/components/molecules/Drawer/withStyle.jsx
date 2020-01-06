import styled from '@emotion/styled';


export default (component) => styled(component)`
    .drawer {
        position: absolute;
        min-height: 100vh;
        min-width: 280px;
        right: 0;
        background-color: ${({ theme: { colors: { secondary } } }) => secondary};
        transform: translateX(110%);
        z-index: 10;
        transition: .3s  ease-in transform;
        .drawer__btn {
          position: absolute;
          right: 10px;
          top: 10px;
          width: 20px;
          height: 40px;
          border-style: none;
          outline: none;
          cursor: pointer;
          background: center / contain no-repeat url("/icons/close.svg");
        }
    }
    
    .active {
       transform: translateX(0);
    }
    
`;
