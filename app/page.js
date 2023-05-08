'use client';
import styles from './assets/scss/components/pages/_home.module.scss';
import Cualitys from './components/cualitys';
import Sectionperfil from './components/sectionPerfil';
import Stats from './components/stats';
import Technologies from './components/tecnologyes';

export default function Home() {
    return (
        <main className={styles.home}>
            <div className={'home__container container'}>
                <section className={'section'}>
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
                </section>
            </div>
        </main>
    )
}
