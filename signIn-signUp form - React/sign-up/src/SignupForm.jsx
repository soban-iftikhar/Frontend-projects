import { useState } from "react";

function Form() {
  const [isSignup, setIsSignup] = useState(true);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({fname: "", lname: "", email: "", password: "" });

  const getStoredUsers = () => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  };


  const validateForm = () => {
    let newErrors = {};

    if (isSignup) {
      if (!formData.fname.trim())
        newErrors.fname = "First Name cannot be empty";

      if (!formData.lname.trim())
        newErrors.lname = "Last Name cannot be empty";
    }

    if (!formData.email.trim())
      newErrors.email = "Email cannot be empty";
    else if (formData.email.includes(" "))
      newErrors.email = "Email should not contain spaces";

    if (!formData.password.trim())
      newErrors.password = "Password cannot be empty";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const updateFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!validateForm())
      return;

    const users = getStoredUsers();

    if (isSignup) {
      if (users.some((user) => user.email === formData.email)) {
        setErrors({ ...errors, email: "Email already registered!" });
        return;
      }
      const updatedUsers = [...users, formData];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      alert("Signup successful! Please login.");

      setIsSignup(false);
      setFormData({ fname: "", lname: "", email: "", password: "" });

    } else {
      const foundUser = users.find((user) => user.email === formData.email);
      if (!foundUser) {
        alert("No user found.");
      }
      else if (foundUser.password !== formData.password) {
        alert("Incorrect password.");
      }
      else {
        alert(`Welcome back ${foundUser.fname}!`);
      }
    }
  }

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

        <form className="form" onSubmit={submitForm}>
          {isSignup && (
            <>
              <div className={`form-field ${errors.fname ? "error" : ""}`}>
                <input type="text" name="fname" placeholder="First Name" value={formData.fname} onChange={updateFormData} />
                {errors.fname && <p className="error-message">{errors.fname}</p>}
              </div>

              <div className={`form-field ${errors.lname ? "error" : ""}`}>
                <input type="text" name="lname" placeholder="Last Name" value={formData.lname} onChange={updateFormData} />
                {errors.lname && <p className="error-message">{errors.lname}</p>}
              </div>
            </>
          )}

          <div className={`form-field ${errors.email ? "error" : ""}`}>
            <input type="text" name="email" placeholder="Email" value={formData.email} onChange={updateFormData} />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className={`form-field ${errors.password ? "error" : ""}`}>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={updateFormData} />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>

          {!isSignup && (
            <p className="forgot-password">
              <a href="#">Forgot Password?</a>
            </p>
          )}

          <button className="trial" type="submit">
            {isSignup ? "Claim your free trial" : "Sign In"}
          </button>

          <p className="terms">
            By clicking the button, you are agreeing to our <a href="#">Terms and Services</a>
          </p>
          <p className="terms">
            {isSignup ? "Already have an account? " : "Don't have an account? "}
            <a href="#" onClick={(e) => { e.preventDefault(); setIsSignup(!isSignup); }}>
              {isSignup ? "Sign In" : "Sign Up"}
            </a>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Form;
