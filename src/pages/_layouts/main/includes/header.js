import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown,Dropdown } from "react-bootstrap";
import profile from "../../../../assets/images/icon-white.png";
import profileIcon from "../../../../assets/temp_imgs/profile-icon.png";
import { HeaderWrapper } from "../styles";

const Header = (props) => {
  let activeBasePath = props.location.pathname.split("/");
  activeBasePath = activeBasePath[1] || "dashboard";
    
    


  return (
    <HeaderWrapper>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src={profile} alt="" height="35" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="/home"
              active={
                activeBasePath === "home" || activeBasePath === "dashboard"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link href="/tv-shows" active={activeBasePath === "tv-shows"}>
              TV Shows
            </Nav.Link>
            <Nav.Link href="/movies" active={activeBasePath === "movies"}>
              Movies
            </Nav.Link>
            <Nav.Link href="/my-list" active={activeBasePath === "my-list"}>
              My List
            </Nav.Link>
            <Nav.Link href="/profile" active={activeBasePath === "profile"}>
              Profile
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown className="profile-section" title={
                <div>
                    <img className="thumbnail-image" 
                        src={profileIcon}
                        alt="profile"
                        height="40"
                    />
                </div>
      } id="nav-dropdown">
            <NavDropdown.Item >Profile</NavDropdown.Item>
            <NavDropdown.Item >Help Center</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item >Sign out</NavDropdown.Item>
          </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      
    </HeaderWrapper>
  );
};

export default withRouter(Header);
