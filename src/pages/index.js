import React from 'react';
  
const Home = () => {
  return (
<div class="row mb-2 text-center d-flex flex-column justify-content-center align-items-center profile">
    <div class="col-md-6">
      <div class="profile-border row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col-auto">
          <img class="rounded mx-auto d-block" src="images/profile.jpg" width="300" height="450" focusable="false" />
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Zdravo</strong>
          <h3 class="mb-0">Moje ime je Darko Markan</h3>
          <div class="mb-1 text-muted">ja sam <span class="pro">pro</span>gramer</div>
          <p class="card-text mb-auto paragraph-txt">Još odmalena zavoleo sam video igre na računaru i odlučio da se školujem u tom smeru. Jako sam želeo da u budućnosti radim sa računarima ali nisam znao konkretno šta želim da radim. Nakon završenih škola radio sam razne poslove ali nikad nisam našao dovoljno vremena i dovoljno jaku motivaciju da nastavim da se edukujem u tom smeru. Kako je vreme prolazilo i kada sam osnovao svoju porodicu, odlučio sam da nastavim da jurim svoj san i da se bavim računarima.</p>
          <a class="nav-link" href="/omeni">PROČITAJ VIŠE</a>
        </div>
    
      </div>
    </div>
  </div>

  );
};
  
export default Home;