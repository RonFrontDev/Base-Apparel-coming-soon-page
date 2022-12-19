const { useState } = React;

function refreshPage() {
    window.location.reload(false);
  }


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
            <h2 className="text__subheadline"><span className="text__break">coming</span>soon</h2>
            <p className="text"> Hello fellow shoppers! We're currently building our new fashion store. 
                Add your email below to stay up-to-date with announcements and our launch deals</p>
                <Form/>
        </div>
    )
}

// function Form() {
//     return (
//         <form id="fv" name="myForm" className="form" action="/action_page.php" onsubmit="return validateForm()" method="post">
//             <label className="form__label" htmlFor=""></label>
//             <input className="form__input" type="text" name="fname" placeholder="Email Adress" />
//             <button className="form__button" type="submit" value="submit"><img className="form__icon" src="images/icon-arrow.svg" alt="" /></button>
//         </form>
//     )
// }



function Form() {
    
        const [email, setEmail] = useState('');
        const [emailError, setEmailError] = useState('');


        const handleSubmit = (event) => {
            event.preventDefault();
              if (!email) {
                setEmailError('Email is required');
              }else {
                setEmailError("Thank you")
              }
              return;
              setEmailError('');
              // Submit the form

            };
          
            return (
              <form className="form" onSubmit={handleSubmit}>
                <label className="form__label" htmlFor="email"></label>
                <input
                    className="form__input"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                {emailError && <p className="form__message">{emailError}</p>}
                <button onClick={refreshPage}  className="form__button" type="submit">Submit</button>
              </form>
            );
}



ReactDOM.createRoot(document.getElementById("root")).render(<App />);

