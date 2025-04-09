import './Main.css'

function Main() {
    return (
        <section className="info-section">
            <div className="info-image">
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="house" />
            </div>
            <div className="info-text">
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae!
                    Quidem esse nam numquam odio deleniti, beatae, magni dolores provident
                    quaerat totam. Eos rerum aperiam architecto eius quis quibusdam fugit dicta.
                </p>
                <button className="info-btn">Get In Touch</button>
            </div>
        </section>
    )
}

export default Main