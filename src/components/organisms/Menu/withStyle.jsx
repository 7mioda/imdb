import styled from '@emotion/styled';


export default (component) => styled(component)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    vertical-align: middle;
    text-transform: capitalize;
    color: #474747;
    font-weight: 400;
    background: transparent;
    transition: all .5s ease-in;
  
  .left {
    justify-content: flex-start;
  }
  
  .right {
    justify-content: flex-end;
  }
  .center {
    justify-content: center;
  }
  @media only screen and (max-width: 750px) {
    .menu{
      display: block;
      height: auto;
      background: #fff;
      color: rgb(72, 72, 72);
    }
  }
`;
