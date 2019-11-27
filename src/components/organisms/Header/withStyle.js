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
    .Header__search {
      width: 60%;
    }
    
    .header__menu {
      height: 100%;
    }
`;
