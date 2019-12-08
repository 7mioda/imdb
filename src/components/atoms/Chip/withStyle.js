import styled from '@emotion/styled';


export default (component) => styled(component)`
   background-color: ${({ theme: { colors: { secondary } } }) => secondary};
   border-radius: 20px;
   padding: .3rem .7rem;
   color: ${({ theme: { colors: { yellow } } }) => yellow};
   display: inline-block;
`;
