import styled from '@emotion/styled';

export default (component) => styled(component)`
    padding: 8px 0 0 8px;
    height: 80px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    background-color: transparent;
    &:hover {
        background-color: ${({ theme: { colors: { primary } } }) => primary};
        cursor: pointer;
    }
    
    .search-item__img {
      vertical-align: top;
       display: inline-block;
       width: 18%;
       max-width: 60px;
    }
    
    .search-item__content {
       vertical-align: top;
       display: inline-block;  
       font-weight: 400;
       h3 {
          padding-top: 5px;
          text-transform: capitalize;
          font-size: 1rem;
          
       }
       h4 {
          color: #b9b9b9;
          padding-top: 5px;
          font-size: .87rem;
       }  
    }
    
`;
