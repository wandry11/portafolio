import Image from 'react-bootstrap/Image';

export default function Stats() {
    return (
        <>
            <h3>Badges</h3>
            <b>My GitHub Stats</b>
            <div className={'stats__container'}>
                <div className={'stats__item'}>
                    <Image
                        src="https://github-readme-stats.vercel.app/api?username=wandry11&show_icons=true&hide=&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&show_icons=true"
                        alt="wandry11's GitHub stats"
                        title="wandry11's GitHub stats" />
                    <Image
                        src="https://github-readme-streak-stats.herokuapp.com/?user=wandry11&stroke=ffffff&background=1c1917&ring=0891b2&fire=0891b2&currStreakNum=ffffff&currStreakLabel=0891b2&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true"
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
        </>
    )
}