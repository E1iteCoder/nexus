import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";

type Props = {
  onFormSwitch: (formName: string) => void;
};

export default function Register(props: Props): JSX.Element {
  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="text-center mb-5">
          <img
            className="mx-auto logo"
            src={"/pictures/logo.png"}
            alt="NexusRead logo"
          />
          <h2 className="h2 mt-3 mb-2">Create your account</h2>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <label htmlFor="password" className="form-label">
                Password
              </label>
            </div>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 sign-in-btn">
            Create account
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="mb-0">
            Already have an account?{" "}
            <button
              type="button"
              className="login-link"
              onClick={() => props.onFormSwitch("SignIn")}
            >
              Login to your account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
