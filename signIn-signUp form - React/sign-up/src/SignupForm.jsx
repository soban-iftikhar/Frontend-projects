function SignupForm() {
  return (
    <div className="form-wrapper">
      <section className="welcome">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time.
          Watching scripted tutorials is great but understanding how developers
          think is invaluable.
        </p>
      </section>

      <section className="right">
        <button className="subscription">
          <strong>Try it free for 7 days</strong> then $20/mo. thereafter
        </button>

        <form className="form" id="signupform">
          <div className="form-field">
            <input type="text" id="fname" name="fname" placeholder="First Name" />
          </div>

          <div className="form-field">
            <input type="text" id="lname" name="lname" placeholder="Last Name" />
          </div>

          <div className="form-field">
            <input type="text" id="email" name="email" placeholder="Email" />
          </div>

          <div className="form-field">
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>

          <button className="trial" type="button" >
            Claim your free trial
          </button>

          <p className="terms">
            By clicking the button, you are agreeing to our <a href="#">Terms and Services</a>
          </p>
          <p className="terms">
            Already have an account? <a href="signInform.html">Sign In</a>
          </p>
        </form>
      </section>
    </div>
  );
}

export default SignupForm;
