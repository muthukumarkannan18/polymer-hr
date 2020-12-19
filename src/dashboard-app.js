import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class DashboardApp extends PolymerElement {
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
        <h1>Dashboard</h1>
      </div>
      <div class="card">
          <div class="mdl-grid">
              <div class="mdl-cell mdl-cell--3-col mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                  <div class="clr1">
                  <p>Total Employee</p> <span>400</span>
                  </div>
              </div>
              <div class="mdl-cell mdl-cell--3-col mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                  <div class="clr2">
                  <p>New Employee Today</p> <span>10</span>
                  </div>
              </div>
              <div class="mdl-cell mdl-cell--3-col mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                  <div class="clr3">
                  <p>Today Leave</p> <span>05</span>
                  </div>
              </div>
              <div class="mdl-cell mdl-cell--3-col mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                  <div class="clr4">
                  <p>Salary paid</p> <span>400</span>
                  </div>
              </div>
          </div>
      </div>
      
    `;
  }
}

window.customElements.define('dashboard-app', DashboardApp);
