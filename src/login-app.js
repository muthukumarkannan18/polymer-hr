

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import './my-icons.js';
import './style-element.js';


// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);


class LoginApp extends PolymerElement {
  
  static get template() {
    return html`
      <style include="style-element">
   
      </style>
     
    <div id="login">
      <section>
                  <div class="login-area">
                  <!-- Logo Here --->
                      <img src="images/logo.jpg">
                  <!-- Login Form Start --->    
                      <form id="myForm" method="post" action="./form-validation2.js">
                      <input type="text" id="username" value="" placeholder="Username" required>
                      <div id="div1"></div>
                      <input type="password" id="password" value="" placeholder="Password" required>
                      <div id="div2"></div>
                      <input type="button" value="Login" on-click="userform" class="btn">
                      <a href="#">Forgot Username/Password</a>
                      </form>
                  <!-- Login Form End --->       
                  </div>
      </section>
    </div>
    

    `;
  }
  userform() {
    var user = this.$.username.value;
    var pass = this.$.password.value;
// Username "admin"
  if(user !== "admin"){
    
    this.$.div1.innerHTML = "Enter a correct username";
    this.$.div1.style.display = "block";
    this.$.div2.style.display = "none";
    return false;
  }
// Password "admin"
  else if(pass !== "admin"){
    
    this.$.div2.innerHTML = "Enter a correct password";
    this.$.div2.style.display = "block";
    this.$.div1.style.display = "none";
    return false;
  }
// If username and password value ="admin & admin"
  else {
    window.location.href = "/dashboard";
  }
  return user;
  
  };
 
}




window.customElements.define('login-app', LoginApp);
