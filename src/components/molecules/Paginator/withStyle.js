import styled from '@emotion/styled';


export default (component) => styled(component)`
     
     display: inline-block;
    .active {
        background-color: ${({ theme: { colors: { yellow } } }) => yellow};;
        color: white;
      }
    button {
      cursor: pointer;
      color: ${({ theme: { colors: { yellow } } }) => yellow};
      background-color: ${({ theme: { colors: { primary } } }) => primary};
      border-radius: 5px;
      float: left;
      padding: 5px 7px;
      transition: background-color .3s;
      border: 1px solid #ddd;
      text-align: center;
      min-width: 32px;
      margin: 0 4px;
      &:hover:not(.active) {
        background-color: red;
      }
    }
`;
