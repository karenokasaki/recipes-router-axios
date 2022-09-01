import { Navbar, NavItem, Nav, NavbarText, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar color="dark" dark>
      <NavbarText>85WD</NavbarText>
      <Nav>
        <NavItem>
          <Link to="/" className="nav-link">
            Receitas
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/favoritos" className="nav-link">
            Favoritos
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/treino-axios" className="nav-link">
            Axios
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
