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
            <div
              class="col-md-3 col-sm-12 pt-2 pb-2 mr-4"
              style={{ backgroundColor: 'lavender' }}
            >
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
            <div
              class="col-md-5 col-sm-12 pt-2 pb-2 mr-4"
              style={{ backgroundColor: 'orange' }}
            >
              <div class="movie-info">
                <div>
                  <h1>Alita: Battle Angel</h1>
                  <h2>2019</h2>
                  <h3>Action / Adventure / Sci-fi / Thriller</h3>
                  <p class="hidden-xs hidden-sm">
                    <em class="pull-left">Available in:</em>
                    <button class="my-primary">3D.BluRay</button>
                    <button class="my-primary">720p.BluRay</button>
                    <button class="my-primary">1080p.BluRay</button>
                    <button class="my-primary">720p.WEB</button>
                  </p>
                </div>
                <div>
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
              style={{ backgroundColor: 'lavender', wordWrap: 'break-word' }}
            >
              .colaksdjf;klsdjfa;dsknvdvklanf;kdfjaksd;fajsdf;klas
              djfakdsljfa;lkdfjdaf;klasdj
              fakdsljfaaslkdn;knsdfjklaf;adksjfa;fjkd sfdsf
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoDetails;
