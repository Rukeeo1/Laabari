import React, { useState, useEffect } from 'react';
import '../video-details/css/VideoDetails.css';
import axios from 'axios';

function VideoDetails(props) {
  const [movie, setMovie] = useState('');

  const movieId = props.match.params['id'];

  useEffect(() => {
    getMovie();
  }, []);

  function getMovie() {
    axios
      .get(`http://localhost:3001/api/movies/${movieId}`)
      .then(response => {
        setMovie(response.data);
       
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  console.log(movie)
  if (!movie) {
    return '';
  }


  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 pt-2 pb-2 mr-4">
              <img
                // src="https://img.yts.lt/assets/images/movies/alita_battle_angel_2019/medium-cover.jpg"
                src={movie.poster}
                className="imageone img-responsive"
                alt="agirl"
              />
              <button className="torrent-modal-download button-green-download2-big hidden-xs hidden-sm playbutton">
                <span />
                Play
              </button>
            </div>
            <div className="col-md-5 col-sm-12 pt-2 pb-2 mr-4">
              <div className="movie-info">
                <div>
                  <h1>{movie.title}</h1>
                  <h2>{movie.year}</h2>
                  <h2>Action / Adventure / Sci-fi / Thriller</h2>
                  <p className="hidden-xs hidden-sm">
                    <em className="pull-left">Available in:</em>
                    <button className="my-primary video-quality-btn">
                      3D.BluRay
                    </button>
                    <button className="my-primary video-quality-btn">
                      720p.BluRay
                    </button>
                    <button className="my-primary video-quality-btn">
                      1080p.BluRay
                    </button>
                    <button className="my-primary video-quality-btn">
                      720p.WEB
                    </button>
                  </p>
                </div>
                <div className="synopsis-body">
                  <h2>Synopsis</h2>
                  {/* <p>
                    Alita is a creation from an age of despair. Found by the
                    mysterious Dr. Ido while trolling for cyborg parts, Alita
                    becomes a lethal, dangerous being. She cannot remember who
                    she is, or where she came from. But to Dr. Ido, the truth is
                    all too clear. She is the one being who can break the cycle
                    of death and destruction left behind from Tiphares. But to
                    accomplish her true purpose, she must fight and kill. And
                    that is where Alita's true significance comes to bear. She
                    is an angel from heaven. She is an angel of death.
                  </p> */}
                  <p>{movie.synopsis}</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-12 pt-2 pb-2 mr-4"
              id="movie-related"
              style={{ wordWrap: 'break-word' }}
            >
              <p>Similar Movies</p>
              <a
                href="https://yts.lt/movie/an-angel-at-my-table-1990"
                title="An Angel at My Table (1990)"
              >
                <img
                  src="https://img.yts.lt/assets/images/movies/An_Angel_at_My_Table_1990/medium-cover.jpg"
                  alt="An Angel at My Table (1990) download"
                />
              </a>
              <a
                href="https://yts.lt/movie/an-angel-at-my-table-1990"
                title="An Angel at My Table (1990)"
              >
                <img
                  src="https://img.yts.lt/assets/images/movies/Dark_Angel_1990/medium-cover.jpg"
                  alt="An Angel at My Table (1990) download"
                />
              </a>
              <a
                href="https://yts.lt/movie/an-angel-at-my-table-1990"
                title="An Angel at My Table (1990)"
              >
                <img
                  src="https://img.yts.lt/assets/images/movies/the_face_of_an_angel_2014/medium-cover.jpg"
                  alt="An Angel at My Table (1990) download"
                />
              </a>
              <a
                href="https://yts.lt/movie/an-angel-at-my-table-1990"
                title="An Angel at My Table (1990)"
              >
                <img
                  src="https://img.yts.lt/assets/images/movies/angel_town_1990/medium-cover.jpg"
                  alt="An Angel at My Table (1990) download"
                />
              </a>
            </div>
          </div>
        </div>

        <div id="screenshots" className="row">
          <div className="screenshot">
            <a
              className="youtube cboxElement"
              href="https://www.youtube.com/embed/QvHv-99VfcU?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3"
              id="playTrailer"
            >
              <span className="btn-play-trailer" />
            </a>
            <a
              className="screenshot-group imghov cboxElement"
              href="https://img.yts.lt/assets/images/movies/alita_battle_angel_2019/large-screenshot1.jpg"
            >
              <img
                src="https://img.yts.lt/assets/images/movies/alita_battle_angel_2019/medium-screenshot1.jpg"
                alt="some"
              />
            </a>
          </div>
          <div className="screenshot">
            <a
              className="youtube cboxElement"
              href="https://www.youtube.com/embed/QvHv-99VfcU?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3"
              id="playTrailer"
            >
              <span className="btn-play-trailer" />
            </a>
            <a
              className="screenshot-group imghov cboxElement"
              href="https://img.yts.lt/assets/images/movies/alita_battle_angel_2019/large-screenshot1.jpg"
            >
              <img
                src="https://img.yts.lt/assets/images/movies/alita_battle_angel_2019/medium-screenshot2.jpg"
                alt="some"
              />
            </a>
          </div>
          <div className="screenshot">
            <a
              className="youtube cboxElement"
              href="https://www.youtube.com/embed/QvHv-99VfcU?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3"
              id="playTrailer"
            >
              <span className="btn-play-trailer" />
            </a>
            <a
              className="screenshot-group imghov cboxElement"
              href="https://img.yts.lt/assets/images/movies/alita_battle_angel_2019/large-screenshot1.jpg"
            >
              <img
                src="https://img.yts.lt/assets/images/movies/alita_battle_angel_2019/medium-screenshot3.jpg"
                alt="some"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoDetails;
