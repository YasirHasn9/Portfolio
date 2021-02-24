import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Container, Navbar } from "./styled.navigation";

import { Link } from "react-router-dom";
export function Navigation() {
  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Navbar>
              <div className="logo">
                <p>YH</p>
              </div>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/project">Project</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Navbar>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
