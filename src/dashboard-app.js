import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@google-web-components/google-chart';

import './shared-styles.js';

class DashboardApp extends PolymerElement {
    static get properties() {
        return {
            user: {
                type: Object,
                value: function() {

                    // Get count for the total employes in local storage
                    var emplist = JSON.parse(window.localStorage.getItem('All-Entries')).length;

                    // Get count for the total employes in local storage
                    var leavelist = JSON.parse(window.localStorage.getItem('All-Leave-Entry-Lists')).length;
                    return {
                        emplist,
                        leavelist
                    };
                }
            }
        };

    }
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
        google-chart {
          height: 300px;
          width: 100%;     
          overflow: hidden;
        }
        .card{
          margin: 0px;
          padding: 16px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        
      </style>
      
      <!--- title start -->
      <div class="card" style="margin:16px;" role="Title">
        <h1 role="Dashboard">Dashboard</h1>
      </div>
      <!--- title start -->

      <!--- Count box start -->
      <div class="card" style="margin:6px 16px; padding: 8px 4px 0px;">
          <div class="mdl-grid">
              <!--- Total employee Count start -->
              <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                  <div class="clr1">
                  <p>Total Employee</p> <span>{{user.emplist}}</span>
                  </div>
              </div>
              <!--- Total employee Count end -->
              <!--- Today Leave employee Count start -->
              <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                  <div class="clr3">
                  <p>Today Leave</p> <span>{{user.leavelist}}</span>
                  </div>
              </div>
              <!--- Today Leave employee Count end -->
          </div>
      </div>
      <!--- Count box end -->
      
      <!--- Chart start -->
      <div class="mdl-grid">
            <!--- Pie Chart start -->
            <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--12-col-tablet">
              <div class="card">
              <h1>Total Employee Details</h1>
                  <google-chart
                    type='pie'
                    options='{"title": ""}'
                    cols='[{"label":"Employee", "type":"string"}, {"label":"Employee", "type":"number"}]' rows='[["Direct Employee", 200],["Contract Employee", 50],["Others", 10]]'>
                  </google-chart>
                </div>
            </div>
            <!--- Pie Chart start -->
            <!--- Bar Chart start -->
            <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                <div class="card">
                <h1>Job Category</h1>
                    <google-chart
                    type='bar'
                    options='{"title": ""}'
                    cols='[{"label":"Employee", "type":"string"}, {"label":"Employee", "type":"number"}]' rows='[["Software Developer", 100],["Team lead", 25],["Manager", 10],["CEO", 2]]'>
                    </google-chart>
                </div>
            </div>
            <!--- Bar Chart end -->
      </div>
    
    `;
    }

}

window.customElements.define('dashboard-app', DashboardApp);