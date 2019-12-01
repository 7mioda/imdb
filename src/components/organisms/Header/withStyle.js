import styled from '@emotion/styled';

export default (component) => styled(component)`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: ${({ theme: { colors: { secondary } } }) => secondary};
    align-items: center;
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    color: ${({ theme: { colors: { tertiary } } }) => tertiary};
    .menu {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        max-width: 1280px;
       .test {
          margin-left: 10px;
       }
      .header__search {
          width: 60%;
      }
      .header__menu {
         height: 100%;
      }
      .header__drawer__btn {
        display: none;
      }
    }
    
    
    @media only screen and (max-width: 700px) {
        .menu {
            justify-content: flex-start;
            .header__drawer__btn {
              display: block;
              margin: 0 25px;
              width: 25px;
              height: 40px;
              border-style: none;
              outline: none;
              cursor: pointer;
              background: center / contain no-repeat url("/icons/menu-button.svg");
            }
            .header__menu,
            .header__search {
              display: none;
            }
        }
    }
`;
