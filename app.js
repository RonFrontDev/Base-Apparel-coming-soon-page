function App() {
    return (
        <>
        <Grid/>
        </>
    )
}

function Grid() {
    return (
        <div className="grid">
            <Logo/>
            <Hero/>
            <TextArea/>
            <Form/>
        </div>
    )
}

function Logo() {
    return (
        <div className="logo__container">
            <img 
            className="logo"
            src="images/logo.svg" alt="logo"/>
        </div>
    )
}

function Hero() {
    return (
        <div className="hero__container">
            <img className="hero" src="images/hero-mobile.jpg" alt="hero image" />
        </div>
    )
}

function TextArea() {
    return (
        <div className="text__container">
            <h1 className="text__headline">We're</h1>
            <h2 className="text__subheadline">coming soon</h2>
            <p className="text"> Hello fellow shoppers! We're currently building our new fashion store. 
                Add your email below to stay up-to-date with announcements and our launch deals</p>
        </div>
    )
}

function Form() {
    return (
        <form className="form" action="">
            <label className="form__label" htmlFor=""></label>
            <input className="form__input" type="text" placeholder="Email Adress" />
            <button className="form__button" type="submit"><img className="form__icon" src="images/icon-arrow.svg" alt="" /></button>
        </form>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

