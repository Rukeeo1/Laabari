import React from 'react';
import '../video-details/css/VideoDetails.css';

function VideoDetails() {
  return (
    <>
      <div class="container-fluid">
        {/* <h1>Three equal width columns</h1>
        <p>
          Note: Try to add a new div with class="col" inside the row class -
          this will create four equal-width columns.
        </p> */}
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-12 pt-2 pb-2 mr-4">
              <img
                src="https://img.yts.lt/assets/images/movies/alita_battle_angel_2019/medium-cover.jpg"
                class="imageone img-responsive"
                alt="agirl"
              />
              <button class="torrent-modal-download button-green-download2-big hidden-xs hidden-sm playbutton">
                <span />
                Play
              </button>
            </div>
            <div class="col-md-5 col-sm-12 pt-2 pb-2 mr-4">
              <div class="movie-info">
                <div>
                  <h1>Alita: Battle Angel</h1>
                  <h2>2019</h2>
                  <h2>Action / Adventure / Sci-fi / Thriller</h2>
                  <p class="hidden-xs hidden-sm">
                    <em class="pull-left">Available in:</em>
                    <button class="my-primary video-quality-btn">
                      3D.BluRay
                    </button>
                    <button class="my-primary video-quality-btn">
                      720p.BluRay
                    </button>
                    <button class="my-primary video-quality-btn">
                      1080p.BluRay
                    </button>
                    <button class="my-primary video-quality-btn">
                      720p.WEB
                    </button>
                  </p>
                </div>
                <div className="synopsis-body">
                  <h2>Synopsis</h2>
                  <p>
                    Alita is a creation from an age of despair. Found by the
                    mysterious Dr. Ido while trolling for cyborg parts, Alita
                    becomes a lethal, dangerous being. She cannot remember who
                    she is, or where she came from. But to Dr. Ido, the truth is
                    all too clear. She is the one being who can break the cycle
                    of death and destruction left behind from Tiphares. But to
                    accomplish her true purpose, she must fight and kill. And
                    that is where Alita's true significance comes to bear. She
                    is an angel from heaven. She is an angel of death.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-sm-12 pt-2 pb-2 mr-4"
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
          <div class="screenshot">
            <a
              class="youtube cboxElement"
              href="https://www.youtube.com/embed/QvHv-99VfcU?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3"
              id="playTrailer"
            >
              <span class="btn-play-trailer" />
            </a>
            <a
              class="screenshot-group imghov cboxElement"
              href="https://img.yts.lt/assets/images/movies/alita_battle_angel_2019/large-screenshot1.jpg"
            >
              <img
                src="https://img.yts.lt/assets/images/movies/alita_battle_angel_2019/medium-screenshot1.jpg"
                alt="some"
              />
            </a>
          </div>
          <div class="screenshot">
            <a
              class="youtube cboxElement"
              href="https://www.youtube.com/embed/QvHv-99VfcU?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3"
              id="playTrailer"
            >
              <span class="btn-play-trailer" />
            </a>
            <a
              class="screenshot-group imghov cboxElement"
              href="https://img.yts.lt/assets/images/movies/alita_battle_angel_2019/large-screenshot1.jpg"
            >
              <img
                src="https://img.yts.lt/assets/images/movies/alita_battle_angel_2019/medium-screenshot2.jpg"
                alt="some"
              />
            </a>
          </div>
          <div class="screenshot">
            <a
              class="youtube cboxElement"
              href="https://www.youtube.com/embed/QvHv-99VfcU?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3"
              id="playTrailer"
            >
              <span class="btn-play-trailer" />
            </a>
            <a
              class="screenshot-group imghov cboxElement"
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
