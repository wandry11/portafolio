'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'react-bootstrap/Image';

const projects = [
    {
        id: 1,
        name: 'Store Bigcommerce',
        description: 'With this tool you wil be able to create commits following the conventional commits standard. This project was made with Go.',
        image: 'https://via.placeholder.com/250x150',
        link: 'https://wshopofficiall.com/',
        button: 'Visit Store'
    },
    {
        id: 2,
        name: 'Task App',
        description: 'With this tool you wil be able to create commits following the conventional commits standard. This project was made with Go.',
        image: 'https://via.placeholder.com/250x150',
        link: 'https://github.com/wandry11',
        button: 'Repository'
    },
    {
        id: 3,
        name: 'App presupuestos',
        description: 'With this tool you wil be able to create commits following the conventional commits standard. This project was made with Go.',
        image: 'https://via.placeholder.com/250x150',
        link: 'https://github.com/wandry11',
        button: 'Repository'
    },
    {
        id: 4,
        name: 'Portafolio',
        description: 'This project is a store created in React. Contains a add task template, update tasks, create tasks, and remove task. I also implemented a connection to an API.',
        image: 'https://via.placeholder.com/250x150',
        link: 'https://github.com/wandry11',
        button: 'Repository'
    }
]

const Projects = () => {
    return (
        <div className='projects__container container'>
            <h1 className='projects__title'>projects</h1>
            <div className='projects__description'>
                <p>
                    A definition is a statement of the meaning of a term. Definitions can be classified into two large categories: intensional definitions, and extensional definitions. Another important category of definitions is the class of ostensive definitions, which convey the meaning of a term by pointing out examples.
                </p>
                <p>
                    A definition is a statement of the meaning of a term. Definitions can be classified into two large categories: intensional definitions, and extensional definitions. Another important category of definitions is the class of ostensive definitions, which convey the meaning of a term by pointing out examples.
                </p>
                <p>
                    A definition is a statement of the meaning of a term. Definitions can be classified into two large categories: intensional definitions, and extensional definitions. Another important category of definitions is the class of ostensive definitions, which convey the meaning of a term by pointing out examples.
                </p>
            </div>
            <ul className='projects__list'>
                {projects.map((data) => (
                    <li className='projects__item' key={data.id}>
                        <div className='projects__item--top'>
                            <div className='projects__item-header'>
                                <h2 className='title'>{data.name}</h2>
                            </div>
                            <div className='projects__item-image'>
                                <div className='image-container'>
                                    <Image src={data.image} alt={data.name} title={data.name} className={'img'} />
                                </div>
                            </div>
                            <div className='projects__item-summary'>
                                <p>{data.description}</p>
                            </div>
                        </div>
                        <div className='projects__item--bottom'>
                            <Link href="#!" aria-label='' target="_blank">{data.button}</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;
