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

      <!--- title start -->
      <div class="card">
        <h1>Add Employee Details</h1>
      </div>
      <!--- title End -->

      <!--- Main Content start -->
      <div class="card">
        <!--- Iron Form Start--->
        <iron-form>
          <form is = "iron-form" id = "empforms" method = "post" action = "/form/handler" name="empforms">
            <div class="mdl-grid">
              <div class="mdl-cell mdl-cell--6-col">
              <paper-input label="Enter First Name" name="fname" id="fname" required auto-validate error-message="First Name must be filled out"></paper-input>
              </div>
              <div class="mdl-cell mdl-cell--6-col" required>
              <paper-input label="Enter Last Name" name="lname" id="lname" required auto-validate error-message="Last Name must be filled out"></paper-input>
              </div>
              <div class="mdl-cell mdl-cell--6-col">
              <paper-input label="Enter designation" name="designation" id="des" required auto-validate error-message="Designation must be filled out"></paper-input>
              </div>
              <div class="mdl-cell mdl-cell--6-col">
              <paper-input label="Enter phone number" name="phone" id="phone" required  auto-validate pattern="[0-9]*" error-message="Phone number must be filled out" maxlength="10"></paper-input>
              </div>
              <div class="mdl-cell mdl-cell--6-col">
              <paper-input type="email" label="Enter email" name="email" id="email" required auto-validate error-message="Email must be filled out"></paper-input>
              </div>
              <div class="mdl-cell mdl-cell--12-col">
              <input type="submit" value="Add Employee" on-click="addemp" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent btn">
              </div>
            </div>                    
          </form>
        </iron-form>
        <!--- Iron Form End--->
      </div>
      <!--- Main Content End -->
    `;
    }
    addemp() {
        if (typeof(Storage) !== "undefined") {
            var fname = this.$.fname.value;
            var lname = this.$.lname.value;
            var des = this.$.des.value;
            var phone = this.$.phone.value;
            var email = this.$.email.value;

            if (fname != "" && lname != "" && des != "" && phone != "" && email != "") {
                var existingEntries = JSON.parse(localStorage.getItem("All-Entries"));
                if (existingEntries == null) existingEntries = [];
                var emplist = [];
                var status = "Pending";
                var slno = existingEntries.length + 1;
                emplist.push(slno, fname, lname, des, phone, email, status)
                window.localStorage.setItem('Current-Entry-List', JSON.stringify(emplist));
                existingEntries.push(emplist);
                window.localStorage.setItem("All-Entries", JSON.stringify(existingEntries));
                window.alert("Employee Added Sucessfully");
                window.location.reload();
            }

        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }
}

window.customElements.define('add-employee', AddEmployee);