'use client';
import styles from './assets/scss/components/pages/_home.module.scss';
import Image from 'react-bootstrap/Image';

const skils = [
    {
        label: 'Self-learner'
    },
    {
        label: 'Team-player'
    },
    {
        label: 'Problem-solver'
    },
    {
        label: 'Knowledge in Backend and Frontend'
    },
    {
        label: 'Intermediate knowledge in database management & server management'
    },
    {
        label: 'Windows and Linux administration'
    },
    {
        label: 'bilingual (Spanish and English)'
    },


]

const tecnologyes = [
    {
        label: 'Html5',
        url: 'https://nextjs.org/',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
    },
    {
        label: 'Css3',
        url: 'https://nextjs.org/',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
    },
    {
        label: 'Sass',
        url: 'https://nextjs.org/',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg',
    },
    {
        label: 'javascript',
        url: 'https://nextjs.org/',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
    },
    {
        label: 'PHP',
        url: 'https://nextjs.org/',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg',
    },
    {
        label: 'React',
        url: 'https://nextjs.org/',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
    },
    {
        label: 'NextJs',
        url: 'https://nextjs.org/',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg',
    },
    {
        label: 'Next.js',
        url: 'https://nextjs.org/',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg',
    },
    {
        label: 'Graphql',
        url: 'https://nextjs.org/',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
    },
    {
        label: 'Express',
        url: 'https://nextjs.org/',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg',
    },
    {
        label: 'Git',
        url: 'https://nextjs.org/',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg',
    },
    {
        label: 'Mysql',
        url: 'https://nextjs.org/',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg',
    },
    {
        label: 'Invision',
        url: 'https://nextjs.org/',
        icon: 'https://camo.githubusercontent.com/41ab02bf30be980cab9460dd7b66768cf39a51159a231712a7edb035e0410df0/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f696e766973696f6e6170702f696e766973696f6e6170702d69636f6e2e737667',
    }
]

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container + ' container'}>
                <section className={styles.section}>
                    <div className={styles.section__header}>
                        <h1 className={styles.section__title}>Wandry Martinez</h1>
                        <span className={styles.subtitle}>Front-End Web Developer</span>
                    </div>
                    <div className={styles.section__image}>
                        <Image src={"https://medhelper.bio/wandry.jpg"} roundedCircle alt='' title='' className={styles.section__img} />
                    </div>
                </section>
                <section className={styles.cualitys}>
                    <div className={styles.profile}>
                        <h2 className={styles.prodile__title}>Personal Profile</h2>
                        <p>
                            i am a person who loves computer science, from a very
                            young age I fell in love with computer programming I
                            started with my first computer language at 12 years old,
                            it was c# and now with Web Technologies. Also, I have knowledge
                            of customer support because I have been working in the family
                            business since a very young age.
                        </p>
                        <p>
                            I also like photography and all audio visual material,
                            so much so that in my free time I dedicate myself to edit, take and / or manipulate
                            videos and photographs, knowing how to use Photoshop and Premiere, and on the other hand,
                            I use a little Illustrator, Corel Draw, After effects and Audition.
                        </p>
                    </div>
                    <div className={styles.skill}>
                        <h2 className={styles.skill__title}>Skills</h2>
                        <ul className={styles.skill__list} role='navigation'>
                            {skils.map((data) => (
                                <li key={data.label} className={styles.skill__item}>
                                    {data.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className={styles.tecnologyes}>
                    <div className={styles.tecnologyes__container}>
                        <h2 className={styles.tecnologyes__title}>Tecnologyes</h2>
                        <div className={styles.tecnologyes__icons}>
                            {tecnologyes.map((data) => (
                                <div key={data.label} className={styles.tecnologyes__icon}>
                                    <h3 className={styles.tecnologyes__title_icon}>{data.label}</h3>
                                    <Image src={data.icon} alt={data.label} title={data.label} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className={styles.stats}>
                    <h3 align="left">Badges</h3>
                    <b>My GitHub Stats</b>
                    <div className={styles.stats__container}>
                        <div width="100%" className={styles.stats__item}>
                            <Image
                                src="https://github-readme-stats.vercel.app/api?username=wandry11&show_icons=true&hide=&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&show_icons=true"
                                alt="wandry11's GitHub stats"
                                align="left"
                                // width='50%'
                                title="wandry11's GitHub stats" />
                            <Image
                                src="https://github-readme-streak-stats.herokuapp.com/?user=wandry11&stroke=ffffff&background=1c1917&ring=0891b2&fire=0891b2&currStreakNum=ffffff&currStreakLabel=0891b2&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true"
                                // width='50%'
                                title="wandry11's GitHub stats"
                                alt=''

                            />
                            <Image
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=wandry11&langs_count=10&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&locale=en&custom_title=Top%20%Languages"
                                alt="Top Languages"
                                title="Top Languages"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
