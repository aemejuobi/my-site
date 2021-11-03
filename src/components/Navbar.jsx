import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";

export default function App() {
    // const [showNavColor, setShowNavColor] = useState(false);
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    // const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
      
    <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <Link to="/"><MDBNavbarBrand>My Site</MDBNavbarBrand></Link>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavColorSecond(!showNavColorSecond)}>
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            {/* <Router> */}

              <MDBNavbarItem>
                <Link to="/projects"><MDBNavbarLink>Projects</MDBNavbarLink></Link>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <Link to="/about"><MDBNavbarLink>About</MDBNavbarLink></Link>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <Link to="/contact"><MDBNavbarLink>Contact</MDBNavbarLink></Link>
              </MDBNavbarItem>

              {/* <Switch>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/about">
                  <About/>
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch> */}

            {/* </Router> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}