// import { Image } from 'react-bootstrap';
import Social_Media from './social-icons';
import useIsMobile from '../hooks/useIsMobile';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer_Info() {
    const isMobile = useIsMobile(800);

    return (
        <>
            <article className="footer-info-col--address" data-section-type="footer-webPages">
                <h3 className="footer-list__heading">Our Company</h3>
                <ul className="footer-info-list">
                    <li className="footer-info-list--image">
                        {/* <Image src="https://placehold.co/100" roundedCircle alt="" className='img'/> */}
                        <Image src={"/logo-gg.png"} alt='' title='' className={'footer-info-list--logo'} width={150} height={150} quality={100}/>
                    </li>
                    <li className="footer-info-list--address">
                        <address>Av. Menelio Almonte, Santiago de los Caballeros</address>
                    </li>
                    <li className="footer-info-list--information">
                        <h4>Contact Us</h4>
                        <p className="phone">
                            <Link href="tel:8296389600">8296389600</Link>
                        </p>
                        <p className="email">
                            <Link href="mailto:info@labarberia.com">info@labarberia.com</Link>
                        </p>
                    </li>
                </ul>
            </article>

            {isMobile ? <Social_Media/> : null}
        </>
    );
}
