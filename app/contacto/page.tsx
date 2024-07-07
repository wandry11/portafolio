'use client'

import BannerInformation from "../components/common/banner-info";
import Social_Media from "../components/common/social-icons";
import Formit from "../components/form/form";
import useIsMobile from "../components/hooks/useIsMobile";


export default function Contact() {
    const isMobile = useIsMobile(991);
    return (
        <main className={'contact'}>
            <div className="contact__container container">
                <section className={'contact__section'} id={'contact_us'}>
                    <Formit />
                    <div className={'contact__head'}>
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                        </p>

                        {!isMobile ? <Social_Media /> : null}
                        {/* <BannerInformation /> */}
                    </div>
                </section>

                <div className={'banner-info md-none'}>
                    <BannerInformation />
                </div>
            </div>
        </main>
    )
}
