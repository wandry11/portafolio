'use client';
import Image from 'react-bootstrap/Image';

export default function Sectionperfil() {
    return (
        <>
            <div className={'section__header'}>
                <h1 className={'section__title'}>Wandry Martinez</h1>
                <span className={'subtitle'}>Front-End Web Developer</span>
            </div>
            <div className={'section__image'}>
                <Image src={"https://medhelper.bio/wandry.jpg"} roundedCircle alt='' title='' className={'section__img'} />
            </div>
        </>
    )
}