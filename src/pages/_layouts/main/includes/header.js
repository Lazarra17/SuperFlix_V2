import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown,Button, FormGroup, FormControl, ControlLabel,Form,Col,InputGroup } from "react-bootstrap";
import profile from "../../../../assets/images/icon-white.png";
import profileIcon from "../../../../assets/temp_imgs/profile-icon.png";
import { HeaderWrapper } from "../styles";

import { signOutRequest } from "../../../../store/modules/auth/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Header = (props) => {
  let activeBasePath = props.location.pathname.split("/");
  activeBasePath = activeBasePath[1] || "dashboard";

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log("...user", user);

  const onLogout = () => {
    dispatch(signOutRequest());
  };
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
          </Nav>
          <Nav>
          
          <form class="form-inline my-2 my-lg-0">
          <Form.Row className="align-items-center">
            
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                Username
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl id="inlineFormInputGroup" placeholder="Search..." className="search-field" />
              </InputGroup>
            
            </Col>

            <Button type="submit" className="mb-2 mr-4 mu-4">
              Submit
            </Button>
          </Form.Row>

          </form>
          




            <NavDropdown
              className="profile-section"
              title={
                <div>
                  <img
                    className="thumbnail-image"
                    src={profileIcon}
                    alt="profile"
                    height="40"
                  />{" "}
                  {user.first_name}
                </div>
              }
              id="nav-dropdown"
            >
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Help Center</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={onLogout}>Sign out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
