'use client';
import Image from 'react-bootstrap/Image';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const links = [
    {
        label: 'Instagram',
        route: '#!',
        class: 'profile_social__instagram',
        icon: FaInstagram
    },
    {
        label: 'LinkedIn',
        route: '#!',
        class: 'profile_social__linkedin',
        icon: FaGithub
    },
    {
        label: 'GitHub',
        route: '#!',
        class: 'profile_social__github',
        icon: FaLinkedin
    },
];

export default function Section_Perfil() {
    return (
        <>
            <div className='profile__image'>
                <Image src="https://placehold.co/150" roundedCircle alt='' title='' className='profile__img' />
            </div>
            <div className='profile__header'>
                <div className='profile__item profile__item--header'>
                    <h1 className='profile__title'>Wandry Martinez</h1>
                    <p className='subtitle'>Full Stack Developer</p>
                </div>

                <div className='profile__item profile__item--social'>
                    <ul className='profile_social flex flex-row justify-between p-0' aria-label='navigation'>
                        {links.map((data) => (
                            <li key={data.label} className={data.class}>
                                <Link key={data.label} href={data.route} aria-label={data.label} className='flex flex-row justify-between text-white me-2' >
                                    <data.icon className="w-5 me-1 text-white" />
                                    {data.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}