import React from "react";
  
const About = () => {
  return (
    <div class="row mb-2 text-center d-flex flex-column justify-content-center align-items-center profile paragraph-txt about">
    <div class="col-md-6">
      <div class="col-auto">
      <h1>
       O meni
      </h1>
      <p>
      Još odmalena zavoleo sam video igre na računaru i odlučio da se školujem u tom smeru. Jako sam želeo da u budućnosti radim sa računarima ali nisam znao konkretno šta želim da radim. Nakon završenih škola radio sam razne poslove ali nikad nisam našao dovoljno vremena i dovoljno jaku motivaciju da nastavim da se edukujem u tom smeru. Kako je vreme prolazilo i kada sam osnovao svoju porodicu, odlučio sam da nastavim da jurim svoj san i da se bavim računarima.
      </p>
      <p>
      2020. godine sam se zainteresovao za dizajniranje web sajtova, manipulacijom sajtovima, pravljenjem aplikacija i video igara i tako zavoleo programiranje. Iako samouk, završio sam dva kursa za Front End dizajnera i Full Stack developera kako bih upotpunio svoje znanje. Trenutno i dalje učim programiranje i želja mi je da postanem Front End Web Developer i da nadjem posao u toj struci.
      </p>
      <h1>
       Obrazovanje
      </h1>
      <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top obrazovanje-img" src="images/srednja.png" width="100%" height="225" focusable="false" />
            <div class="card-body">
              <p class="card-text">Tehnička škola Petar Drapšin - 2006.</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">Mašinski tehničar za kompjutersko konstruisanje</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top obrazovanje-img" src="images/visa.png" width="100%" height="225" focusable="false" />
            <div class="card-body">
              <p class="card-text">Visoka škola elektrotehnike i računarstva strukovnih
              studija -
              2010.</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">Inženjer za elektronsko poslovanje</small>
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  );
};
  
export default About;