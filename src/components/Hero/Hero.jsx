import './Hero.css'

function Hero(){
    return (
        <section className='hero'>
            <div className="hero-content">
                <h1>Let us find your <span>Forever Food</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit exercitationem ea ipsa eveniet?</p>

                <div className="hero-buttons">
                    <button className='hero-btn primary'>Search Now</button>
                    <button className='hero-btn secondary'>Know More</button>
                </div>
            </div>
        </section>
    )
}

export default Hero