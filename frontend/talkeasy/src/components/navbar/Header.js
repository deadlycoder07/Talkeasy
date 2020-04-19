import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav}  from 'react-bootstrap';
import {Navbar,FormControl,Form,Button} from 'react-bootstrap';
import 'antd/dist/antd.css';


class Header extends React.Component {

    render() {
        return (
            <div className="menu">
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Talkeasy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="login">Login</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
          </div>
        );
    }
}
export default Header;