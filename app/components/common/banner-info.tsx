import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function BannerInformation() {
  return (
        <div className="banner-info">
            <div className="banner-info__heading">
                <h2>Acerca de</h2>
                <span>El estilo es la manera de decir quien eres sin palabras , reserva hoy con nosotros y siente cómo en casa con todo lo que te ofrecemos, para que te sientas bien , y podamos complacerte en tu día a día .</span>
            </div>
            
            <Row lg={2} md={1} sm={1} xl={2} xxl={2} xs={1} className="g-4 banner-info__item">
                <Col className='banner-info__item--shedule'>
                    <Card>
                        <Card.Header>Horario de apertura</Card.Header>
                        <Card.Body className='schedule'>
                            <div className="schedule__item">
                                <div className="schedule__day">
                                    <span className="schedule__day-name">Lunes</span>
                                    <span className="schedule__day-hours">9:00 a. m. - 8:00 p. m.</span>
                                </div>
                                <div className="schedule__day">
                                    <span className="schedule__day-name">Martes</span>
                                    <span className="schedule__day-hours">Cerrado</span>
                                </div>
                                <div className="schedule__day">
                                    <span className="schedule__day-name">Miércoles</span>
                                    <span className="schedule__day-hours">9:05 a. m. - 8:00 p. m.</span>
                                </div>
                                <div className="schedule__day">
                                    <span className="schedule__day-name">Jueves</span>
                                    <span className="schedule__day-hours">9:00 a. m. - 8:00 p. m.</span>
                                </div>
                                <div className="schedule__day">
                                    <span className="schedule__day-name">Viernes</span>
                                    <span className="schedule__day-hours">9:00 a. m. - 8:00 p. m.</span>
                                </div>
                                <div className="schedule__day">
                                    <span className="schedule__day-name">Sábado</span>
                                    <span className="schedule__day-hours">9:00 a. m. - 8:00 p. m.</span>
                                </div>
                                <div className="schedule__day">
                                    <span className="schedule__day-name">Domingo</span>
                                    <span className="schedule__day-hours">10:00 a. m. - 1:00 p. m.</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='banner-info__item--location'>
                    <Card>
                        <Card.Header>Visit Our Store Location</Card.Header>
                        <div className="location">
                                <a className="father" tabIndex={0} aria-label="location map">
                                <iframe
                                    title="google"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15049.826521019795!2d-70.69813808261716!3d19.435869699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1cff392f5749f%3A0xcd8953f62cf890e1!2sLa%20Barber%C3%ADa!5e0!3m2!1ses-419!2sdo!4v1718987519310!5m2!1ses-419!2sdo"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    data-uw-rm-iframe="gn"
                                ></iframe>
                                
                                </a>
                            </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
