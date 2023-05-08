import Image from 'react-bootstrap/Image';

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
export default function Technologies() {
    return (
        <div className={'tecnologyes__container'}>
            <h2 className={'tecnologyes__title'}>Tecnologyes</h2>
            <div className={'tecnologyes__icons'}>
                {tecnologyes.map((data) => (
                    <div key={data.label} className={'tecnologyes__icon'}>
                        <h3 className={'tecnologyes__title_icon'}>{data.label}</h3>
                        <Image src={data.icon} alt={data.label} title={data.label} />
                    </div>
                ))}
            </div>
        </div>
    )
}