import React, { useState } from "react";
import Register from "../components/Register";
import SignIn from "../components/Signin";

export default function Login() {
 const [currentForm, setCurrentForm] = useState("signin");

const toggleForm = (formName: string) => {
  setCurrentForm(formName);
};



  return (
    <div className="Log">
      {currentForm === "signin" ? (
        <SignIn onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}
