import styled from '@emotion/styled';

export default (component) => styled(component)`
.tgl {
  display: none;
  &,
  &:after,
  &:before,
  & *,
  & *:after,
  & *:before,
  & + .tgl-btn {
    &::selection {
      background: none;
    }
  }

  + .tgl-btn {
    outline: 0;
    display: block;
    width: 1.8em;
    height: 0.7em;
    position: relative;
    cursor: pointer;
    user-select: none;
    &:after,
    &:before {
      position: relative;
      display: block;
      content: "";
      width: 50%;
      height: 100%;
    }

    &:after {
      left: 0;
    }

    &:before {
      display: none;
    }
  }

  &:checked + .tgl-btn:after {
    left: 50%;
  }
}

.tgl-light {
  + .tgl-btn {
    background-color: #9fd6ae;
    border-radius: 2em;
    padding: 2px;
    transition: all 0.4s ease;
    &:after {
      border-radius: 50%;
      background: ${({ theme: { colors: { primary } } }) => primary};
      transition: all 0.2s ease;
    }
  }

  &:checked + .tgl-btn {
    background: #9fd6ae;
  }
}

`;
