import { Image, Row } from "react-bootstrap";
import Link from 'next/link';
// import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
// import { FaInstagramSquare, FaInstagram, FaFacebook, FaWhatsapp, FaWhatsappSquare, FaFacebookF, FaFacebookSquare, FaFacebookMessenger} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import React from "react";
const iconsLinks = [
    // {label: 'facebook icon', route: '#!', image: '/logo-facebook.png', icon: faFacebook, class: 'icon__facebook'},
    // {label: 'whatsapp icon', route: '#!', image: '/logo-whatsapp.png', icon: faWhatsapp, class: 'icon__whatsapp'},
    // {label: 'instagram icon', route: '#!', image: '/logo-instagram.png', icon: faInstagram, class: 'icon__instagram'},
    // {label: 'tiktok icon', route: '#!', image: '/logo-tiktok.png', icon: faTiktok, class: 'icon__tiktok'}
    {label: 'facebook icon', route: '#!', image: 'https://placehold.co/50', icon: FaFacebook, class: 'facebook'},
    {label: 'whatsapp icon', route: '#!', image: '/logo-whatsapp.png', icon: FaWhatsapp,  class: 'whatsapp'},
    {label: 'instagram icon', route: '#!', image: 'https://placehold.co/50', icon: FaInstagram,  class: 'instagram'},
    {label: 'tiktok icon', route: '#!', image: 'https://placehold.co/50', icon: FaTiktok, class: 'tiktok'}
]

export default function Social_Media() {
    return (
        <article className="footer-icons">
            <h3 className="footer-list__heading">Social Media</h3>
            <Row lg={4} md={4} sm={4} xl={4} xxl={4} xs={4} className="footer-icons__list">
                {iconsLinks.map((data) => (
                    <li key={data.label} className="footer-icons-items">
                        <Link href={data.route} aria-label={data.label} className="footer-icons--links">
                            {/* <Image src={data.image} roundedCircle alt={data.label} title={data.label} /> */}
                            {React.createElement(data.icon, { className: `${data.class} icon`, title: data.label })}
                            {/* <FontAwesomeIcon icon={data.icon} className={`${data.class} icon`} title={data.label} /> */}
                        </Link>
                    </li>
                ))}
            </Row>
            
            {/* <FaWhatsapp className="icon text-white" /> */}
        </article>
    )
}