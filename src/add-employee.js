import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';


class AddEmployee extends PolymerElement {
    static get template() {
        return html `
    <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
    <script src="/node_modules/material-design-lite/material.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

      </style>

      <div class="card">
        <h1>Add Employee Details</h1>
      </div>
      <div class="card">
          
              <iron-form>
                  <form is = "iron-form" id = "empforms" method = "post" action = "/form/handler" name="empforms">
                  <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--6-col">
                    <span>First Name *</span>
                    <paper-input always-float-label label="Floating label"></paper-input>
                    <paper-input label="text input" name="fname" id="fname" required auto-validate error-message="First Name must be filled out"></paper-input>
                    <!--<input type="text" name="fname" id="fname" value="" required> -->
                    <div id="div1" style="color:red;"></div>
                    </div>
                    <div class="mdl-cell mdl-cell--6-col" required>
                    <span>Last Name *</span>
                    <input type="text" name="lname" id="lname" value="" required>
                    <div id="div2" style="color:red;"></div>
                    </div>
                    <div class="mdl-cell mdl-cell--6-col">
                    <span>Designation *</span>
                    <input type="text" name="designation" id="des" value="" required>
                    <div id="div3" style="color:red;" ></div>
                    </div>
                    <div class="mdl-cell mdl-cell--6-col">
                    <span>Phone Number *</span>
                    <input type="number" name="phone" id="phone" value="" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==10) return false;" required>
                    <div id="div4" style="color:red;"></div>
                    </div>
                    <div class="mdl-cell mdl-cell--6-col">
                    <span>Email *</span>
                    <input type="text" name="email" id="email" value="" required>
                    <div id="div5" style="color:red;"></div>
                    </div>
                    <div class="mdl-cell mdl-cell--12-col">
                    <input type="submit" value="Add Employee" on-click="addemp" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent btn">
                    </div>
                    
                  </form>
                  </iron-form>
          </div>
      </div>
    `;
    }
    addemp() {
        // Check browser support
        if (typeof(Storage) !== "undefined") {

            var fname = this.$.fname.value;
            var lname = this.$.lname.value;
            var des = this.$.des.value;
            var phone = this.$.phone.value;
            var email = this.$.email.value;

            if (fname == "") {
                //alert("Name must be filled out");
                this.$.div1.innerHTML = "First Name must be filled out";
                this.$.div1.style.display = "block";
                return false;
            } else {
                this.$.div1.style.display = "none";
            }
            if (lname == "") {
                this.$.div1.style.display = "none";
                this.$.div2.innerHTML = "Last Name must be filled out";

            } else {
                this.$.div2.style.display = "none";
            }
            if (des == "") {
                this.$.div3.innerHTML = "Description must be filled out";

            } else {
                this.$.div3.style.display = "none";
            }
            if (phone == "") {
                this.$.div4.innerHTML = "Phone Nummber must be filled out";

            } else {
                this.$.div4.style.display = "none";
            }
            if (email == "") {
                this.$.div5.innerHTML = "Email must be filled out";

            } else {
                this.$.div5.style.display = "none";
            }

            if (fname != "" && lname != "" && des != "" && phone != "" && email != "") {

                var existingEntries = JSON.parse(localStorage.getItem("All-Entries"));
                if (existingEntries == null) existingEntries = [];
                var emplist = [];
                var slno = existingEntries.length + 1;
                //console.log(slno);
                emplist.push(slno, fname, lname, des, phone, email)
                window.localStorage.setItem('Current-Entry-List', JSON.stringify(emplist));
                existingEntries.push(emplist);
                window.localStorage.setItem("All-Entries", JSON.stringify(existingEntries));

                window.alert("Employee Added Sucessfully");

                this.$.empforms.reset();
                //window.onload('/add-employee');

            }

        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }
}

window.customElements.define('add-employee', AddEmployee);