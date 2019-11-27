import styled from '@emotion/styled';


export default (component) => styled(component)`
  position: relative;
  .search__suggestion {
      position: absolute;
      top: 101%;
      width: 100%;
      background-color: ${({ theme: { colors: { secondary } } }) => secondary};
      z-index: 1;
  }
`;
