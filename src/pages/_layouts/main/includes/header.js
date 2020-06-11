import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import profile from "../../../../assets/images/icon-white.png";
const Header = (props) => {
  let activeBasePath = props.location.pathname.split("/");
  activeBasePath = activeBasePath[1] || "dashboard";

  return (
    <>
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
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default withRouter(Header);
