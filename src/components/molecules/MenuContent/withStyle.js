import styled from '@emotion/styled';


export default (component) => styled(component)`
      width: 600px;
      display: flex;
      flex-wrap: wrap;
      align-items: start;
      padding: 10px;
      .menu-content__item {
          padding: 20px 10px;
          width: calc(30% + 40px);
          .menu-content__box_title {
            display: flex;
              .menu-content__title {
                  color: ${({ theme: { colors: { tertiary } } }) => tertiary};
                  font-weight: 500;
                  font-size: 1.2rem;
                  margin-left: .5rem;
              }
          }
          
          .menu-content__list {
            margin-left: 1.5rem;
            li {
                color: ${({ theme: { colors: { tertiary } } }) => tertiary};
                font-weight: 300;
                margin-top: .9rem;
                font-size: .9rem;
                &:hover {
                  text-decoration: underline;
                }
            }
          }
      }
      
      
`;
