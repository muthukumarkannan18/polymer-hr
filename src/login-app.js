import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import './style-element.js';

class LoginApp extends PolymerElement {

    static get template() {
            return html `
      <style include="style-element">
      
      </style>
     
    <div id="login">
      <section>
        <div class="login-area">
            <!-- Logo Here --->
                <img src="images/logo.jpg">
            <!-- Login Form Start --->  
            <iron-form>  
                <form id="myForm" is = "iron-form" method="post" action="/form/handler">
                    <paper-input id="username" label="Enter Username" required auto-validate error-message="Username must be filled out"></paper-input>
                    <paper-input type="password" id="password" label="Enter Password" required auto-validate error-message="Password must be filled out"></paper-input>
                    <input id="submitForValidation" type="submit" required Label="Enter the Valid Username or Password" value="Login" on-click="userform" class="btn">
                    <a href="#">Forgot Username/Password</a>
                </form>
            </iron-form>
            <!-- Login Form End --->       
        </div>
      </section>
    </div>
    

    `;
        }
        // Get values on Submit and checking the validation
    userform() {
        var user = this.$.username.value;
        var pass = this.$.password.value;

        if (user == "admin" && pass == "admin") {
            window.location.href = "/dashboard";
            return user;
        }
    };
}


window.customElements.define('login-app', LoginApp);