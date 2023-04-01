import React from "react";

function Login2() {
  return (
    <div>
      <div id="customer-form" class="card form-card glass-effect">
        <div class="card-body">
          <h3 class="card-title text-center " style={{ color: "red" }}>
            Helpy Motto
          </h3>
          <form id="login">
            <div class="mb-2">
              <input
                type="text"
                name="username"
                class="form-control text-center bg-transparent"
                placeholder="Email"
              />
            </div>
            <div class="mb-2">
              <input
                type="password"
                name="password"
                class="form-control text-center bg-transparent"
                placeholder="Password"
              />
            </div>
            <div class="mb-2 text-center"></div>
            <div class="mb-2 text-center">
              <a
                id="show-signup"
                class="form-text text-danger fw-bold"
                style={{ color: "red" }}
              >
                Or Signup
              </a>
            </div>
            <div class="mb-2 text-center">
              <input
                class="btn btn-primary"
                style={{ backgroundColor: "red" }}
                type="submit"
                name="submit"
                value="Log In"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login2;
