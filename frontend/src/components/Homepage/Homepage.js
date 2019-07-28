import React from 'react';
import Navbar from '../navbar/Navbar';
import '../Homepage/Homepage.css';

function Hompage() {
  return (
    <>
      {/* <Navbar/> */}

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
          <div className="carousel-inner" role="listbox" style={{height:"550px"}}>
            <div className="carousel-item active">
              <video className="video-fluid" autoplay loop muted style={{height:"100%", width:"100%", objectFit:"contain"
            }}>
                <source
                  src="https://mdbootstrap.com/img/video/Tropical.mp4"
                  type="video/mp4"
                />
              </video>
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
    </>
    // <!--Carousel Wrapper-->
  );
}

export default Hompage;
