import "@components/Hero.css"


interface HeroProps {
    img: string;
    text: string;
}


const Hero = ({img, text}: HeroProps) => {

    return (
        <section className="hero_section">
            <h1 className="hero_text">
                {text}
            </h1>
            <img className="hero_img" src={img} alt="hero_img"/>
        </section>
    )
}


export default Hero