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

export default function Cualitys() {
    return (
        <>
            <div className={'profile'}>
                <h2 className={'profile__title'}>Personal Profile</h2>
                <p>
                    I'm a person who loves computer science, from a very
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
            <div className={'skill'}>
                <h2 className={'skill__title'}>Skills</h2>
                <ul className={'skill__list'} role='navigation'>
                    {skils.map((data) => (
                        <li key={data.label} className={'skill__item'}>
                            {data.label}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}