import styled from '@emotion/styled';


export default (component) => styled(component)`

    background: #ffffff;
    color: #000;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 300px;
    margin: .5rem;
    border-radius: 1px;
    display: inline-block;
    &:hover {
      cursor: pointer;
    -webkit-transform: scale(1.03);
    transform: scale(1.01);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    }
 
    .card__header {
        padding: 0;
        margin: 0;
        height: 367px;
        width: 100%;
        display: block;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    
    .card__content {
       padding: .7rem;
      .card__content__head,
       .card__content__title
       {
          display: table;
          width: 100%;
        }
       .card__content__head {
            .card__content__ratings {
            width: 50px;
            height: 15px;
            background-size: contain;
            display: table-cell;
            text-align: right;
            position: relative;
            margin-top: 5px;
            font-weight: 600;
            span {
              color: #2196F3;
            }
          }
       }
       
       .card__info {
        margin-top: 1em;
        .movie-running-time {
            display: table-cell;
            text-transform: uppercase;
            text-align: center;
            &:last-of-type {
    text-align: right;
}
            &:first-of-type {
              text-align: left;
            }
           }
       }
    }
`;
