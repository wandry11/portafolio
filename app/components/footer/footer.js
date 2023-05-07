import styles from '../../assets/scss/components/common/_footer.module.scss';
import Script from 'next/script';

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className="footer__container container">
                    <section className={styles.section}>
                        <div className={styles.description}>
                            <h3 className={styles.title}>By Wandry Martinez</h3>
                            <p><i>Nexjs</i></p>
                        </div>
                        <div className="footer__social">
                            redes sociales
                        </div>
                    </section>
                </div>
            </footer>
            <Script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" />
        </>

    )
}
