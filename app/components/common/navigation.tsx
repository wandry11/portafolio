// 'use client';
// import styles from '../../assets/scss/components/common/_navigation.module.scss'
// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Link from 'next/link';
// import Image from 'next/image';

// function Navigation() {
//     const [set, setActiveLink] = useState<any>(false);
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const links = [
//         {
//             label: 'Home',
//             route: '/'
//         },
//         {
//             label: 'Servicios',
//             route: '/#services'
//         },
//         {
//             label: 'Equipo',
//             route: '/#team'
//         },
//         {
//             label: 'Contact',
//             route: '/#contact'
//         }
//     ]

//     return (
//         <Navbar bg="light" expand="md" className={styles.navbar}>
//             <Container>
//                 <Link href="/" className={styles.logoTitle} onClick={((e) => setActiveLink('Home'))}>
//                     <Image src={"/logo-gg.png"} alt='' title='' className={'logo'} width={676} height={764} quality={100}/>
//                     {/* <h1><a href="/">LA BARBERIA</a></h1> */}
//                 </Link>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} className='' />
//                 <Navbar id="basic-navbar-nav" className='d-none d-md-inline-block'>
//                     <Nav className="me-auto ">
//                         <ul className={styles.nav}>
//                             {links.map((data) => (
//                                 <li key={data.label} className={styles.item}>
//                                     <Link href={data.route} aria-label={data.label} className={set === data.label ? styles.link + ' active' : styles.link} onClick={((e) => setActiveLink(data.label))}>
//                                         {data.label}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </Nav>
//                 </Navbar>
//                 <Offcanvas show={show} onHide={handleClose} className={'navbarMobile'}>
//                     <Offcanvas.Header closeButton>
//                         <div className='offcanvas-container'>
//                             <Offcanvas.Title className={'navbarMobile__logoTitle'}>Wandry Martinez</Offcanvas.Title>
//                             <span className='navbarMobile__subtitle'>Front-End Web Developer</span>
//                         </div>
//                     </Offcanvas.Header>
//                     <Offcanvas.Body className={'navbarMobile_body'} >
//                         <Nav>
//                             <ul className={'navbarMobile__list'}>
//                                 {links.map((data) => (
//                                     <li key={data.label} className={'navbarMobile__item'}>
//                                         <Link href={data.route} aria-label={data.label} className={set === data.label ? 'navbarMobile__link' + ' active' : 'navbarMobile__link'} onClick={((e) => setActiveLink(data.label))}>
//                                             {data.label}
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </Nav>
//                     </Offcanvas.Body>
//                 </Offcanvas>
//             </Container>
//         </Navbar>
//     );
// }

// export default Navigation;

'use client';
import styles from '../../assets/scss/components/common/_navigation.module.scss';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';

const links = [
    {
        label: 'Home',
        route: '/',
        icon: HomeIcon
    },
    {
        label: 'Servicios',
        route: '/#servicios',
        icon: DocumentDuplicateIcon
    },
    {
        label: 'Equipo',
        route: '/#equipo',
        icon: UserGroupIcon
    },
    {
        label: 'Contacto',
        route: '/#contacto',
        icon: UserGroupIcon
    }
];

function Navigation() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [activeLink, setActiveLink] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        const path = window.location.pathname + window.location.hash;
        const newPath = path.replace('/#', '');

        const currentLink = links.find(link => {
            const currentPath = `/#${newPath.replace('/', '')}`; 
            return path === link.route || currentPath === link.route;
        });

        if (currentLink) {
            setActiveLink(currentLink.label);
        }else {
            setActiveLink('')
        }
    }, [router]);

    //toDO: Agregar el isdesktop para poder quitar o poner la version mobile

    return (
        <Navbar bg="light" expand="md" className={styles.navbar}>
            <Container>
                <Link href="/" className={styles.logoTitle} onClick={() => setActiveLink('Home')}>
                    <Image src="/logo-gg.png" alt='s' title='s' className='logo' width={676} height={764} quality={100}/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
                <Navbar id="basic-navbar-nav" className='d-none d-md-inline-block'>
                    <Nav className="me-auto">
                        <ul className={styles.nav} aria-label='Desktop navigation'>
                            {links.map((data) => (
                                <li key={data.label} className={styles.item}>
                                    <Link key={data.label} href={data.route} aria-label={data.label} className={pathname === data.route || `/#${pathname.replace('/', '')}` === data.route ? `${styles.link} active` : styles.link} onClick={() => setActiveLink(data.label)}>
                                        <data.icon className="w-6 me-2" />
                                        {data.label}
                                        {/* <p className="hidden md:block">{data.label}</p> */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Nav>
                </Navbar>
                <Offcanvas show={show} onHide={handleClose} className='navbarMobile'>
                    <Offcanvas.Header closeButton>
                        <div className='offcanvas-container'>
                            <Offcanvas.Title className='navbarMobile__logoTitle'>Wandry Martinez</Offcanvas.Title>
                            <span className='navbarMobile__subtitle'>Front-End Web Developer</span>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='navbarMobile_body'>
                        <Nav>
                            <ul className='navbarMobile__list' aria-label='Mobile navigation'>
                                {links.map((data) => (
                                    <li key={data.label} className='navbarMobile__item'>
                                        <Link href={data.route} aria-label={data.label} className={pathname === data.route || `/#${pathname.replace('/', '')}` === data.route ? 'navbarMobile__link active' : 'navbarMobile__link'} onClick={() => setActiveLink(data.label)}>
                                            <data.icon className="w-6 me-2" />
                                            {data.label}
                                            {/* <p className="hidden md:block">{data.label}</p> */}
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
