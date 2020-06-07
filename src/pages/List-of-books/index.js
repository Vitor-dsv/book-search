import React, { useState } from 'react';

import { Navbar, Nav, Form, FormControl, Button, Card, Row, Col } from 'react-bootstrap';

import { FcReading } from 'react-icons/fc';

import api from '../../services/api';

import moment from 'moment';

export default function ListOfBook() {

    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    function searchForBook(e) {
        e.preventDefault();

        moment.locale('pt-br');

        if (search) {
            api.get(search)
                .then(response => {                 
                    setBooks(response.data.items);
                });
        }
    }

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
                            <FormControl type="text" placeholder="Books, authors, genres ..." className="mr-xs-2"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                style={{ 'marginRight': '10px' }}
                            />
                            <Button onClick={searchForBook} variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="container">
                <Row style={{ 'marginTop': '20px' }}>
                    {books.map(book => (
                        <Col xs="4" key={book.id}>
                            <Card border='dark'
                                style={{ 'marginBottom': '20px', 'width': '20rem', 'height': '38rem' }}>
                                <Card.Img style={{ 'width': '100%', 'height': '65%' }}
                                    src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : 'https://amarribo.org.br/wp-content/themes/wpbrasil-odin-3fa0943-child/assets/images/sem_imagem.jpg'} fluid />
                                <Card.Body>
                                    <Card.Title>{book.volumeInfo.title ? book.volumeInfo.title : ''}</Card.Title>
                                    <Card.Text>
                                        <strong>author(a)</strong>
                                        <p>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown Author'}</p>

                                        <strong>date of publication</strong>
                                        <p>{book.volumeInfo.publishedDate ? moment(book.volumeInfo.publishedDate).format('LLLL') : 'No Publication Date'}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row >
            </div >
        </div >
    );
}