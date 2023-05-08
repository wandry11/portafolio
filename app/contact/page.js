import Formit from "../components/form";


export default function Contact() {
    return (
        <main className={'contact'}>
            <div className="contact__container container">
                <section className={'contact__section'} id={'contact_us'}>
                    <Formit />
                    <div className={'contact__head'}>
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}
