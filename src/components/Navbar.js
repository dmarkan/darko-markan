import React from "react";
  
const Navbar = () => {
  return (
    <>
      <nav id="home" class="navbar navbar-expand-lg navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
  <img src="images/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top" /> Darko Markan</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/websites">websites</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/apps">apps</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/contact">contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};
  
export default Navbar;