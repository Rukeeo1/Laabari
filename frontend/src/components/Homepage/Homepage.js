import React, { useState, useEffect } from 'react';
import { graphql, compose } from 'react-apollo';
import { movieQuery } from '../../queries/queries';
import '../Homepage/Homepage.css';
import Card from './Card';

function Hompage(props) {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    setMovies(props.movieQuery.movies);
  });

  //fetch movie//import query//store in state and append to homepage..
  return (
    <>
      <section className="mb-5">
        <div className="homepage">
          <div
            id="video-carousel-example"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            {/* <!--Indicators--> */}
            <ol className="carousel-indicators">
              <li
                data-target="#video-carousel-example"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#video-carousel-example" data-slide-to="1">
                jkjh
              </li>
              <li data-target="#video-carousel-example" data-slide-to="2" />
            </ol>
            {/* <!--/.Indicators-->
          <!--Slides--> */}
            <div
              className="carousel-inner"
              role="listbox"
              style={{ height: '550px' }}
            >
              <div className="carousel-item active">
                <video
                  className="video-fluid"
                  autoPlay
                  loop
                  muted
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain'
                  }}
                >
                  <source
                    src="https://mdbootstrap.com/img/video/Tropical.mp4"
                    //  src="https://www.youtube.com/watch?v=HdaMi62RT_M&t=1s"
                    frameBorder="0"
                    allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"
                    type="video/mp4"
                  />
                </video>
                {/* <video
                  // width="560"
                  // height="315"
                  className="video-fluid"
                  src="https://www.youtube.com/embed/2N80qcVvzUU"
                  frameBorder="0"
                  allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                /> */}
              </div>
              <div className="carousel-item">
                <video className="video-fluid" autoPlay loop muted>
                  <source
                    src="https://mdbootstrap.com/img/video/forest.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="carousel-item">
                <video className="video-fluid" autoPlay loop muted>
                  <source
                    src="https://mdbootstrap.com/img/video/Agua-natural.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            {/* <!--/.Slides-->
          <!--Controls--> */}
            <a
              className="carousel-control-prev"
              href="#video-carousel-example"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#video-carousel-example"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
            {/* <!--/.Controls--> */}
          </div>
        </div>
        {/* // <!--Carousel Wrapper--> */}
      </section>
      <div className="container test">
        <Card movies={movies} />
      </div>
    </>
  );
}

// export default Hompage;
export default compose(graphql(movieQuery, { name: 'movieQuery' }))(Hompage);
