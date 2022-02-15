import React from "react";
const date = new Date();
const year = date.getFullYear();

function Footer() {
    return (
    <footer class="footer py-3 my-4">
    <p class="mb-0 text-center text-muted">Darko Markan © {year}</p>
  </footer>
    )
}

export default Footer;