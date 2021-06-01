import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ title, routes = [] }) => (
  <Navbar bg='dark' variant='dark'>
    <Navbar.Brand>{title}</Navbar.Brand>
    <Nav className='mr-auto'>
      {routes
        .filter(({ header = true }) => header)
        .map((route) => (
          <Link key={route.path} className='nav-link' to={route.path}>
            {route.name}
          </Link>
        ))}
    </Nav>
  </Navbar>
);

export default NavBar;
