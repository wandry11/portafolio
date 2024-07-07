import Row from 'react-bootstrap/Row';
import Script from 'next/script';
import Footer_Bottom from '../common/footer-bottom';
import Footer_Section from '@/app/components/common/footer-section';

export default function Footer() {
    return (
        <>
            <footer className="footer" role="contentinfo">
                <Row lg={1} md={1} sm={1} xl={1} xxl={1} xs={1} className="g-4 footer__row">
                    <Footer_Section/>
                    <Footer_Bottom/>
                </Row>
            </footer>
            <Script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" />
        </>
    );
}
