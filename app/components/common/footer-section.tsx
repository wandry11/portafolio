'use client'

import Row from 'react-bootstrap/Row';
import Footer_Info from './footer-info';
import useIsMobile from '../hooks/useIsMobile';
import Social_Media from './social-icons';
import Link from 'next/link';

const navigationLinks = [
    { label: 'Servicios', route: '/#servicios' },
    { label: 'Equipo', route: '/#equipo' },
    { label: 'Contactanos', route: '/contacto' },
]

const pagesLinks = [
    { label: 'Reservar Servicio', route: '/servicios' },
    { label: 'Location', route: '/contacto' },
]

export default function Footer_Section() {
    const isMobile = useIsMobile(800);

    return (
        <div className="footer-info footer__footer-info">
            <div className="footer-content container">
                <Row lg={4} md={4} sm={1} xl={1} xxl={4} xs={1} className="footer-info">
                    <div className='footer-info-col footer-info-col--pages'>
                        <div className='pages'>
                            <article className="footer-info-col footer-info-col--small">
                                <h3 className="footer-list__heading">Navigation</h3>
                                <ul className="footer-list__list">
                                    {navigationLinks.map((data) => (
                                        <li key={data.label} className="footer-list__item">
                                            <Link href={data.route} aria-label={data.label} className="footer-list__link">
                                                {data.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </article>

                            <article className="footer-info-col footer-info-col--small">
                                <h3 className="footer-list__heading">Pages</h3>
                                <ul className="footer-list__list">
                                    {pagesLinks.map((data) => (
                                        <li key={data.label} className="footer-list__item">
                                            <Link href={data.route} aria-label={data.label} className="footer-list__link">
                                                {data.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </div>

                        {!isMobile ? <Social_Media /> : null}
                    </div>

                    <div className="footer-info-col footer-info-col--small footer-info-col footer-info-col--contact">
                        <Footer_Info />
                    </div>
                </Row>
            </div>
        </div>
    );
}
