import { OffcanvasMyInfo } from 'components/offcanvasMyInfo';
import { FC } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { pathRoutes } from 'shared/routes.ts';

export const Header: FC = () => {
  return (
    <Navbar bg={'primary'} expand={'true'} variant={'dark'}>
      <Container className={'justify-content-end'}>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} className={''} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`} />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <OffcanvasMyInfo />
            <Nav className={'mt-4'}>
              <Nav.Item>
                <Nav.Link to={pathRoutes.main()} as={Link}>Home</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link to={pathRoutes.me()} as={Link}>About me</Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
