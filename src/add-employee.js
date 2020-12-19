

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/iron-form/iron-form.js';

class AddEmployee extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
    <script src="/node_modules/material-design-lite/material.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        

      </style>

      <div class="card">
        <h1>Add Employee Details</h1>
      </div>
      <div class="card">
          
              <iron-form>
                  <form method="get" action="/form/handler">
                  <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--6-col">
                    <input type="text" name="fname" value="" placeholder="First Name">
                    </div>
                    <div class="mdl-cell mdl-cell--6-col">
                    <input type="text" name="lname" value="" placeholder="Last Name">
                    </div>
                    <div class="mdl-cell mdl-cell--6-col">
                    <input type="text" name="designation" value="" placeholder="Designation">
                    </div>
                    <div class="mdl-cell mdl-cell--6-col">
                    <input type="text" name="phone" value="" placeholder="Phone Number">
                    </div>
                    <div class="mdl-cell mdl-cell--6-col">
                    <input type="text" name="email" value="" placeholder="Email">
                    </div>
                    <div class="mdl-cell mdl-cell--12-col">
                    <input type="button" value="Add Employee" on-click="userform" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent btn">
                    </div>
                    </iron-form>
                  </form>

          </div>
      </div>
    `;
  }
}

window.customElements.define('add-employee', AddEmployee);
