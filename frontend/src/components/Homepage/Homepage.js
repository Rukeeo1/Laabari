import React from 'react';
import Navbar from '../navbar/Navbar';
import '../Homepage/Homepage.css';
import Card from './Card';

function Hompage() {
  return (
    <>
      <section className="mb-5">
        <div className="homepage">
          <div
            id="video-carousel-example"
            className="carousel slide carousel-fade"
            data-ride="carousel"
            //   className="xxxx"
          >
            <Navbar />
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
                {/* <video
                className="video-fluid"
                autoplay
                loop
                muted
                style={{ height: '100%', width: '100%', objectFit: 'contain' }}
              >
                <source
                  // src="https://mdbootstrap.com/img/video/Tropical.mp4"
                  src="https://www.youtube.com/watch?v=ppGA3iMhdGs"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  type="video/mp4"
                />
              </video> */}
                <video
                  // width="560"
                  // height="315"
                  className="video-fluid"
                  src="https://www.youtube.com/embed/2N80qcVvzUU"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <div className="carousel-item">
                <video className="video-fluid" autoplay loop muted>
                  <source
                    src="https://mdbootstrap.com/img/video/forest.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="carousel-item">
                <video className="video-fluid" autoplay loop muted>
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
      <div>
        {/* <Card /> */}
      </div>
      <div className="container test">
        <Card />
        {/* <div className="card card-deck" style={{width:"300px"}}>
          <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" />
          <div className="card-img-overlay">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">about the movie i want to tell </p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
        <div className="card card-deck" style={{width:"300px"}}>
          <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" />
          <div className="card-img-overlay">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
        <div className="card card-deck" style={{width:"300px"}}>
          <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" />
          <div className="card-img-overlay">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div> */}
      </div>
      hello world
    </>
  );
}

export default Hompage;
