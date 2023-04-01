import React from "react";

function Formtw() {
  return (
    <div>
      <div class="bgimg d-flex justify-content-center align-items-center ">
        <div
          id="mechanic-form"
          className="card form-card glass-effect border border-secondary "
        >
          <div className="card-body">
            <h2 className="card-title text-center text-danger m-3">
              Helpy Motto Mechanic
            </h2>
            <form id="signup">
              <div className="row mb-2">
                <div className="col">
                  <input
                    type="text"
                    name="first-name"
                    className="form-control text-center bg-transparent text-light"
                    placeholder="First name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="last-name"
                    className="form-control text-center bg-transparent text-light"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <input
                    type="number"
                    name="mobile-no"
                    className="form-control text-center bg-transparent text-light"
                    placeholder="Mobile/Whatsapp no."
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    name="alt-mobile-no"
                    className="form-control text-center bg-transparent text-light"
                    placeholder="Alternative mobile no."
                  />
                </div>
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  name="shop-name"
                  className="form-control text-center bg-transparent text-light"
                  placeholder="Shop name"
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  name="shop-address"
                  className="form-control text-center bg-transparent text-light"
                  placeholder="Shop address"
                />
              </div>
              <div className="row mb-2">
                <div className="col">
                  <input
                    type="number"
                    name="pincode"
                    className="form-control text-center bg-transparent text-light"
                    placeholder="Pincode"
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control text-center bg-transparent text-light"
                    placeholder="Aadhar No."
                  />
                </div>
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  name="email"
                  className="form-control text-center bg-transparent text-light"
                  placeholder="Email"
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  name="password"
                  className="form-control text-center bg-transparent text-light"
                  placeholder="Password"
                />
              </div>
              <div className="row mb-2">
                <div className="col">
                  <textarea
                    name="work-experience"
                    className="form-control text-center bg-transparent text-light"
                    placeholder="Work experience"
                    rows="2"
                    maxlength="200"
                  ></textarea>
                </div>
              </div>
              <div className="row mb-2">
                <div className="text-center">
                  {/* <!-- use this area for form submmision messages--> */}
                </div>
              </div>
              <div className="mb-2 text-center">
                <a
                  id="show-login"
                  className="form-text text-primary fw-bold text-danger"
                >
                  Or Already Registered Click to Login
                </a>
              </div>
              <div className="mb-2 text-center  ">
                <input
                  className="btn btn-primary bg-danger"
                  type="submit"
                  name="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formtw;
