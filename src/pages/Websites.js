import React from "react";
  
const Websites = () => {
  return (
    <div class="container my-5 websites-margin">
    <h1>Websajtovi</h1>
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">Escape The Night</h1>
        <p class="lead">Websajt koji sam napravio za android igru Escape The Night. Sajt je rađen korišćenjem Javascript jezika, Node JS i EJS.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <a class="nav-link" href="https://escapethenight.herokuapp.com" target="_blank">POSETI SAJT</a>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="images/etn.png" alt="" width="720" />
      </div>
    </div>
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg websites-margin">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">Tuscan</h1>
        <p class="lead">Ovaj websajt je posvećen android igri Tuscan. Ceo sajt je urađen u React-u, a za backend stranu je korišćen Node JS.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <a class="nav-link" href="https://tuscan-website.herokuapp.com" target="_blank">POSETI SAJT</a>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="images/tuscan.png" alt="" width="720" />
      </div>
    </div>
  </div>
  );
};
  
export default Websites;