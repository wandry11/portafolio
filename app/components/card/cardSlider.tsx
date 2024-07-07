'use client';

import  { useState, useEffect, useRef } from 'react';
import { Card, Col, Row, Image } from 'react-bootstrap';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

interface CarData {
    title: string;
    image: string;
    description: string;
}

const dataFromAPI = [
    { 
        title: 'Braudy',
        image: 'https://placehold.co/150',
        description: 'ceo de la empre.',
    },
    { 
        title: 'Balery',
        image: 'https://placehold.co/150',
        description: 'ceo de la empre',
    },
    { 
        title: 'Paloma',
        image: 'https://placehold.co/150',
        description: 'ceo de la empre',
    },
    { 
        title: 'Example 1',
        image: 'https://placehold.co/150',
        description: 'ceo de la empre',
    },
    { 
        title: 'Example 2',
        image: 'https://placehold.co/150',
        description: 'ceo de la empre',
    },
    // { 
    //     title: 'Example 3',
    //     image: 'https://placehold.co/150',
    //     description: 'ceo de la empre',
    // },
];

function CardSlider() {
    const [cardData, setCardData] = useState<CarData[]>([]);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [sliderInitialized, setSliderInitialized] = useState<boolean>(false);
    const sliderRef = useRef<Slider | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };

        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 1200);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    useEffect(() => {
        setCardData(dataFromAPI);
    }, []);

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1, // Default setting for the smallest screens
        slidesToScroll: 1,
        // mobileFirst: true, // Enable mobile-first approach
        initialSlide: currentSlide,
        responsive: [
        {
            breakpoint: 425,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
            }
        },
        {
            breakpoint: 525,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
            }
        },
        {
            breakpoint: 575,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
            }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            
            }
        },
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            
            }
        }
        ],
        afterChange: (current) => {
        if (sliderInitialized) {
            setCurrentSlide(current);
        }
        }
    };

    useEffect(() => {
        setSliderInitialized(true);
    }, []);

    const handleAfterChange = (current: number) => {
        if (sliderInitialized) {
            setCurrentSlide(current);
        }
    };

    return (
        <div className='our-team'>
            <div className="our-team__heading">
                <h2>Equipo</h2>
                <span>Mas que equipo en la barberia todo somos familia.</span>
            </div>
            {isMobile ? (
                <Slider {...settings} ref={sliderRef} afterChange={handleAfterChange}>
                    {cardData.map((card, idx) => (
                        <a href="#!" key={idx} className='our-team__container our-team__container--slider' aria-label={card.title}>
                            <Card className='our-team__card our-team__card--slider'>
                                <div className='our-team__card-figure'>
                                    <Image src={card.image} roundedCircle alt='' title='' />
                                </div>
                                <Card.Body className='our-team__card-body'>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    ))}
                </Slider>
            ) : (
                <Row lg={4} md={3} sm={2} xl={4} xxl={5} xs={2} className="g-4 our-team__item">
                    {cardData.map((card, idx) => (
                        <a href="#!" key={idx} aria-label={card.title}>
                            <Col className='our-team__container'>
                                <Card className='our-team__card our-team__card--card'>
                                    <div className='our-team__card-figure'>
                                        <Image src={card.image} roundedCircle alt='' title='' />
                                    </div>
                                    <Card.Body className='our-team__card-body'>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>{card.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </a>
                    ))}
                </Row>
            )}
            {/* <div className="our-team__btn">
                <Link href="/equipo" className='btn btn-primary'>
                    <span>Ver Mas</span>
                </Link>
            </div> */}
        </div>
    );
}

export default CardSlider;
