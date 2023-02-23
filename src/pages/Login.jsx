import React from "react";
import { useState } from "react";
var emailGranded;
var passwordGranded;
var loginActive = false;

function Login({validate}) {
  const [emailErr, setemailErr] = useState("");
  const [passwordErr, setpasswordErr] = useState("");

  const passwordValidation = (e) => {
    var data = e.target.value;

    if (data == "") {
      setpasswordErr("please enter a password");
    } else if (data.length <= 8) {
      setpasswordErr("password should be minimum 8 character");
    } else if (data.length >= 15) {
      setpasswordErr("password should not be maximum 15 character");
    } else {
      setpasswordErr("");
      passwordGranded = true;
    }
  };

  const emailValidation = (e) => {
    let email = e.target.value;
    let atposition = email.indexOf("@");
    let dotposition = email.lastIndexOf(".");
    if (email == "") {
      setemailErr("Please enter a  e-mail ");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      setemailErr("Please enter a valid e-mail address");
    } else {
      setemailErr("");
      emailGranded = true;
    }
  };

  if (emailGranded && passwordGranded) {
    loginActive = true;
  }

  const loginfn=()=> {
    if(loginActive){
        validate(true);
    }
    
  };

  return (
    <div className="loginform">
      <h1> This is a Login Page</h1>
      <div>
        <form className="userdetails">
          <div className="section">
            <label>Email</label> <br></br>
            <input onChange={emailValidation} type="text" />
            <span className="passwordErr">{emailErr}</span>
          </div>
          <div className="section">
            <label>Password</label>
            <br></br>
            <input onChange={passwordValidation} type="password" />
            <span className="passwordErr">{passwordErr}</span>
          </div>
          <button
            id={loginActive ? "active" : ""}
            className="loginbtn"
            onClick={loginfn}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
