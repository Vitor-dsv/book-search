import React from 'react';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import { FcReading } from 'react-icons/fc';

export default function ListOfBook() {
    return (
        <div>
            <div className="header">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>
                        <FcReading size="40px" />
                    </Navbar.Brand>
                    <Navbar.Brand >Book Search</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Books, authors, genres ..." className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}