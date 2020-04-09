import styled from '@emotion/styled';


export default (component) => styled(component)`
    .drawer {
        height: 100vh;
        width: 280px;
        background-color: ${({ theme: { colors: { secondary } } }) => secondary};
        transform: translateX(-110%);
        z-index: 10;
        transition: .3s  ease-in transform;
        position: absolute;
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
