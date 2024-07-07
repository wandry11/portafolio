'use client'
import styles from '@/app/assets/scss/components/pages/_home.module.scss';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import HeroCarrousel from './components/hero/hero-carrousel';
import SliderWithTabs from './components/carousel/sliderWithTabs';
import CardSlider from './components/card/cardSlider';
import BannerInformation from './components/common/banner-info';
import Sectionperfil from './components/sectionPerfil';
import Cualitys from './components/cualitys';
import Technologies from './components/tecnologyes';
import Stats from './components/stats';

export default function Page() {
  return (
    <div className={`flex min-h-screen flex-col p-6 ${styles.home}`}>
      <div className={'home__container container'}>
        <h1>Dashboard</h1>
                {/* <section className={'section'}>
                    <Sectionperfil />
                </section>
                <section className={'cualitys'}>
                    <Cualitys />
                </section>
                <section className={'tecnologyes'}>
                    <Technologies />
                </section>
                <section className={'stats'}>
                    <Stats />
                </section> */}
            </div>
    </div>
  );
}
