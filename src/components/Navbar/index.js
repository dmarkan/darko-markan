import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/" activeStyle>
            home
          </NavLink>
          <NavLink to="/about" activeStyle>
            about
          </NavLink>
          <NavLink to="/websites" activeStyle>
            websites
          </NavLink>
          <NavLink to="/apps" activeStyle>
            apps
          </NavLink>
          <NavLink to="/contact" activeStyle>
            contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;