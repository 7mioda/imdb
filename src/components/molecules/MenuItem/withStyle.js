import styled from '@emotion/styled';

export default (component) => styled(component)`
  position: relative;
  height: 100%;
  width: ${({ width }) => width || 'auto'};
  text-align: center;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  cursor: pointer;
  margin: 0 10px;
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    display: inline-block;
    height: 2px;
    width: 0;
    background: ${({ theme: { colors: { yellow } } }) => yellow};
    transition: width ease-in-out 0.7s;
  }
  &:hover:after {
    width: 100%;
  }
  .menu-item__title {
    font-family: inherit;
    height: 100%;
    width: 100%;
    border: none;
    color: ${({ theme: { colors: { tertiary } } }) => tertiary};
    text-align: center;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    font-size: 1rem;
  }
  .menu-item__dropdown {
    position: absolute;
    top: 104%;
    background: ${({ theme: { colors: { secondary } } }) => secondary};
    width: auto;
    padding: 0 20px;
    text-align: left;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 5px;
    border-style: none solid solid !important;
    border-width: medium 1px 1px !important;
  }
  
    .drop-enter {
      max-height: 0;
      overflow: hidden;
    }
    .drop-enter.drop-enter-active {
      max-height: 500px;
      transition: max-height 1000ms ease-in;
    }
    
    .drop-leave {
      max-height: 500px;
    }
    
    .drop-leave.drop-leave-active {
      max-height: 0;
      overflow: hidden;
      transition: max-height 1000ms ease-in;
    }
  
  
  @media only screen and (max-width: 750px) {
    display: block;
    position: relative;
    min-height: 50px;
    padding: 0;
    width: 100%;
    &:after {
      display: none;
    }
    .menu-item__dropdown {
      display: block;
      position: static;
      width: 100%;
      box-shadow: none;
      border-style: none;
    }
    .menu-item__title {
      position: relative;
      color: rgb(72, 72, 72);
      height: 50px;
    }
    .menu-item__title:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    display: inline-block;
    height: 2px;
    width: 0;
    background: ${({ theme: { colors: { pink } } }) => pink};
    transition: width ease-in-out 0.7s;
    }
    .menu-item__title:hover:after {
      width: 100%;
    }
  }
`;
