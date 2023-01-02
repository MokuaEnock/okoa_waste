import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./auth.css";

export default function Signup() {
  let [role, setRole] = useState("");

  function handleSelect(event) {
    setRole(event.target.value);
  }
  return (
    <main className="form-main">
      <div className="form-image"></div>
      <form className="form">
        <span>Join Okoa</span>
        <section id="form-section1">
          <div id="form-section1-container">
            <label>
              Disposer
              <input type="radio" className="radio" />
            </label>

            <label>
              Farmer
              <input type="radio" className="radio" />
            </label>

            <label>
              Partner
              <input type="radio" className="radio" />
            </label>
          </div>
          <div id="form-section1-links">
            <Link className="links" onClick={displayHome}>
              Next
            </Link>
          </div>
        </section>

        <section id="form-section2">
          <div id="device-auth">
            <span>Facebook</span>
            <span>Google</span>
          </div>

          <span id="roles-divs">
            <span id="role-desc">How would you like to use Okoa?</span>
            <select id="roles" onChange={handleSelect}>
              <option value="2">Dispose waste and earn from it.</option>
              <option value="3">Buy compost and sell your produce.</option>
              <option value="4">Partner with us</option>
            </select>
          </span>

          <div id="signup-email">
            <input type="text" placeholder="E-Mail address" />
          </div>

          <div id="signup-names">
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
          </div>

          <div id="signup-button">
            <button type="submit">Join Okoa</button>
          </div>

          <div id="signup-links">
            <Link to="" onClick={displayHome}>
              Back
            </Link>
            <Link to="">Login</Link>
          </div>
        </section>
      </form>
    </main>
  );
}
