import styled from '@emotion/styled';

export default (component) => styled(component)`
    position: relative;
    width: 100%;
    padding: 1rem;
    max-width: 1280px;
    .movie__heading {
      width: 100%;
      height: 30vw;
      background:  url(${({ show: { backdrop_path: backdropPath } }) => `https://image.tmdb.org/t/p/original/${backdropPath}`}) top / cover no-repeat;
      clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
    }
    .movie__description {
       padding: 0 2rem;
       display: inline-block;
       float: left;
           .movie__poster {
                  width: 20%;
                  display: inline-block;
                  float: left;
                  img {
                    width: 100%;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
                    margin-bottom: 10px;
                  }
                  transform: translateY(-50%);
                          .movie__genres {      
                                  * {
                                    margin-right: 5px;
                                    margin-bottom: 5px;
                                  }
                            }
          }
          .movie__description__content {
              display: inline-block;
              float: right;
              width: 75%;
              padding: 1% 2%;
             .movie__title {
              vertical-align: center;
              h1 {
                font-size: 3rem;
                display: inline-block;
                margin-right: 5px;
                }
               h4 {
                  font-size: 1.7rem;
                  font-weight: 300;
                  padding: 10px 0;
                }
                .movie__vote {
                    color: ${({ theme: { colors: { yellow } } }) => yellow};
                }
          }
        .movie__overview {
          padding: 1rem;
          line-height: 25px;
       }  
          }
    }
    
    @media only screen and (max-width: 650px) {
        .movie__heading {
            display: none;
        }
        
        .movie__description {
            padding: 0 .5rem;
            .movie__poster {
               width: 100%;
               transform: translateY(0);
              }
              .movie__description__content {
                width: 100%;
                .movie__title {
              vertical-align: center;
              h1 {
                font-size: 1.7rem;
                display: inline-block;
                margin-right: 5px;
                }
               h4 {
                  font-size: 1rem;
                  font-weight: 300;
                  padding: 10px 0;
                }
              }
         }
    }
`;
