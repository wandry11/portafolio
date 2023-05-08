'use client';
import styles from '../../assets/scss/components/common/_navigation.module.scss'
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';

function Navigation() {
    const [set, setActiveLink] = useState(false);
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
                <Navbar.Brand href="#home" className={styles.logoTitle}>Portafolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} className='' />
                <Navbar id="basic-navbar-nav" className='d-none d-md-inline-block'>
                    <Nav className="me-auto ">
                        <ul className={styles.nav}>
                            {links.map((data) => (
                                <li key={data.label} className={styles.item}>
                                    <Link href={data.route} aria-label={data.label} className={set === data.label ? styles.link + ' active' : styles.link} onClick={((e) => setActiveLink(data.label))}>
                                        {data.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Nav>
                </Navbar>
                <Offcanvas show={show} onHide={handleClose} className={'navbarMobile'}>
                    <Offcanvas.Header closeButton>
                        <div className='offcanvas-container'>
                            <Offcanvas.Title className={'navbarMobile__logoTitle'}>Wandry Martinez</Offcanvas.Title>
                            <span className='navbarMobile__subtitle'>Front-End Web Developer</span>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={'navbarMobile_body'} >
                        <Nav>
                            <ul className={'navbarMobile__list'}>
                                {links.map((data) => (
                                    <li key={data.label} className={'navbarMobile__item'}>
                                        <Link href={data.route} aria-label={data.label} className={set === data.label ? 'navbarMobile__link' + ' active' : 'navbarMobile__link'} onClick={((e) => setActiveLink(data.label))}>
                                            {data.label}
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