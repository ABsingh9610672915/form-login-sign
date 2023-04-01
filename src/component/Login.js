import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div id="customer-form" class="card form-card glass-effect">
            <div class="card-body">
                <h3 class="card-title text-center" style={{ color: "red" }} >Helpy Motto</h3>
                <form id="login" class="d-none">
                    <div class="mb-2">
                        <input type="text" name="username" class="form-control text-center bg-transparent" placeholder="Email"/>
                    </div>
                    <div class="mb-2">
                        <input type="password" name="password" class="form-control text-center bg-transparent" placeholder="Password"/>
                    </div>
                    <div class="mb-2 text-center">
                        {/* <!-- use this area for form submmision messages--> */}
                    </div>
                    <div class="mb-2 text-center">
                        <a id="show-signup" class="form-text text-primary fw-bold">Or Signup</a>
                    </div>
                    <div class="mb-2 text-center">
                        <input class="btn btn-primary" type="submit" name="submit" value="Log In"/>
                    </div>
                </form>
                <form id="signup" class="">
                    <div class="mb-2">
                        <input type="text" name="first-name" class="form-control text-center bg-transparent" style={{color:"white"}} placeholder="First name"/>
                    </div>
                    <div class="mb-2">
                        <input type="text" name="last-name" class="form-control text-center bg-transparent" style={{color:"white"}} placeholder="Last name"/>
                    </div>
                    <div class="mb-2">
                        <input type="number" name="mobile" class="form-control text-center bg-transparent" style={{color:"white"}} placeholder="Mobile no."/>
                    </div>
                    <div class="mb-2">
                        <input type="email" name="email" class="form-control text-center bg-transparent"style={{color:"white"}}  placeholder="Email"/>
                    </div>
                    <div class="mb-2">
                        <input type="password" name="password" class="form-control text-center bg-transparent"  style={{color:"white"}} placeholder="Password"/>
                        <div class="form-text"  >The password must be atleast 6 characters long</div>
                    </div>
                    <div class="mb-2">
                        <input type="password" name="repassword" class="form-control text-center bg-transparent"  style={{color:"white"}} placeholder="Confirm password"/>
                    </div>
                    <div class="mb-2 text-center">
                        {/* <!-- use this area for form submmision messages--> */}
                    </div>
                    <div class="mb-2 text-center">
                        <a id="show-login" class="form-text text-danger fw-bold" style={{ color: "red" }}>Or Already Registered Click to
                            Login</a>
                    </div>
                    <div class="mb-4 text-center">
                        <input class="btn btn-primary" style={{backgroundColor:"red"}} type="submit" name="submit" value="Signup"/>
                    </div>
                </form>
            </div>
        </div>
    
    
  );
}

export default Login;
