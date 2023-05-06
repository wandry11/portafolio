'use client';
import styles from '../../assets/scss/components/common/_navigation.module.scss'
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';

function Navigation() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const links = [
        {
            label: 'Home',
            route: '/'
        },
        {
            label: 'Portafolio',
            route: '/portafolio'
        },
        {
            label: 'Contact',
            route: '/contact'
        }
    ]

    return (
        <Navbar bg="light" expand="md" className={styles.navbar}>
            <Container>
                <Navbar.Brand href="#home" className={styles.logoTitle}>Wandry Martinez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} className='' />
                <Navbar id="basic-navbar-nav" className='d-none d-md-inline-block'>
                    <Nav className="me-auto ">
                        <ul className={styles.nav}>
                            {links.map(({ label, route }) => (
                                <li key={route} className={styles.item}>
                                    <Link href={route} aria-label={label + ' link'} className={styles.link}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Nav>
                </Navbar>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <div className='offcanvas-container'>
                            <Offcanvas.Title>Wandry Martinez</Offcanvas.Title>
                            <span>Front-End Web Developer</span>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={'navbarMobile'} >
                        <Nav>
                            <ul className={'navbarMobile__list'}>
                                {links.map(({ label, route }) => (
                                    <li key={route} className={'navbarMobile__item'}>
                                        <Link href={route} aria-label={label + ' link'} className={'navbarMobile__link'}>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Navigation;