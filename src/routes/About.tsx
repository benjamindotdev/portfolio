import { useSpring, animated } from '@react-spring/web'

export const About = () => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })

    const hobbies =[
        {
            name: "PC Building",
            icon: "🧑🏽‍🏭️"
        },
        {
            name: "Mechanical keyboards",
            icon: "⌨️"
        },
        {
            name: "Indoor cycling",
            icon: "🚵🏽"
        }
    ]
    const history = [
        { item: "Self-taught web developer with passion for completing courses and learning new things"},
        { item: "Experienced in both vanilla Javascript ES5 & ES6, as well as frameworks such as React & Vue"},
        { item: "Proven communication and leadership skills through 15 year career as a teacher and soccer coach."},
        { item: "Ability to work both on location and remotely, with experience of working across time zones"}
    ]

    return (
        <animated.section id="about" className="about" style={{...springs}}>
            <article className="about-content">
                <div className="about-left">
                    <img src="images/Ben&Colby.jpg" className="about-hero" alt="Benjamin"/>
                    <div className="about-hobbies">
                        <h2 className="hobbies-title">HOBBIES</h2>
                        <div className='hobbies-wrapper'>
                            {hobbies.map(hobby => (<div className='hobby-wrapper'>
                                <p className="hobbies-emoji">{hobby.icon}</p>
                                <p className='hobbies-text'>{hobby.name}</p>
                        </div>))}
                        </div>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-history">
                        <h2 className='history-title'>HISTORY</h2>
                        <ul className="history-ul">
                            {history.map((item) =>( <li className='history-li'>{item.item}</li>))}
                        </ul>
                    </div>
                </div>
            </article>
        </animated.section>
    );
}