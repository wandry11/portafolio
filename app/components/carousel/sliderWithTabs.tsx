'use client';

import { useState, useRef, useEffect } from 'react';
import styles from '../../assets/scss/components/carousel/_carouselwithtabs.module.scss';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import CardService from '../card/cardServices';

interface Service {
  time: string;
  detail: string;
  title?: string;
  header?: string;
}

interface Tab {
  title?: string;
  content: Service[];
}

const tabs: Tab[] = [
  { title: 'Recortes', content: [
      { time: '1', detail: 'Solo hombres', title: 'recorte fácil', header: 'Recortes' },
      { time: '11:00 AM', detail: 'Solo hombres' },
      { time: '12:00 PM', detail: 'Solo hombres' },
    ]  
  },
  { title: 'Recortes VIP', content: [
    { time: '1', detail: 'Solo hombres', title: 'recorte fácil' },
  ] },
  { title: 'Serv. Uñas', content: [
    { time: '1', detail: 'Solo hombres', title: 'recorte fácil' },
  ] },
  { title: 'Car Wash', content: [
    { time: '1', detail: 'Solo hombres', title: 'recorte fácil' },
  ] },
  { title: 'Cafeteria', content: [
    { time: '1', detail: 'Solo hombres', title: 'recorte fácil' },
  ] },
];

interface SliderWithTabsProps {
  button?: boolean;
  header?: boolean;
}

const SliderWithTabs = ({ 
  button = true, 
  header = true,

}: SliderWithTabsProps) => {



  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [sliderInitialized, setSliderInitialized] = useState<boolean>(false);
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ],
    afterChange: (current: number) => {
      if (sliderInitialized) {
        setCurrentSlide(current);
      }
    }
  };

  useEffect(() => {
    setSliderInitialized(true);
  }, []);

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
    setCurrentSlide(index);
  };

  const handleAfterChange = (current: number) => {
    if (sliderInitialized) {
      setCurrentSlide(current);
    }
  };

  return (
    <div className={"carouselwithtabs text-white"}>
      {header ? 
        <div className="carouselwithtabs__heading">
          {/* <div className='asdsa'>
              <h2>Servicios</h2>
              <a href="" className='btn btn-primary'>
                <span>Hacer una Reserva</span>
            </a>
            </div> */}
          <h2 className='carouselwithtabs__title'>Servicios</h2>
          <span className='carouselwithtabs__subtitle'>El estilo es la manera de decir quien eres sin palabras.</span>
        </div>
      : null}

      <div className={`carouselwithtabs__slider-container ${currentSlide !== null ? 'slider-active' : ''}`} >
        <Slider {...settings} className="tabs-slider" ref={sliderRef} afterChange={handleAfterChange}>
          {tabs.map((tab, index) => (
            <a key={index} onClick={() => goToSlide(index)} href='#!'>
              <h3 className='carouselwithtabs__slider-container--title'>{tab.title}</h3>
            </a>
          ))}
        </Slider>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${index === currentSlide ? 'active d-block' : 'd-none'}`}
              onClick={() => goToSlide(index)}
            >
              {tab.title}

              <div className={`tab-content ${index === currentSlide ? 'active d-block' : 'd-none'}`}>
                {tab.content.map((service, i) => (
                  <CardService key={i} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {button ?
        <div className="carouselwithtabs__btn">
          <Link href="/servicios" className='btn btn-primary' aria-label='Hacer una Reserva'>
            <span>Hacer una Reserva</span>
          </Link>
      </div> : null}
    </div>
  );
}

export default SliderWithTabs;
