import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/polymer/lib/elements/array-selector.js';


class EmployeeList extends PolymerElement {
    static get properties() {
        return {
            user: {
                type: Object,
                value: function() {
                    // Get array data from Local Storage 
                    var emplist = JSON.parse(window.localStorage.getItem('All-Entries'));
                    return {
                        emplist
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
      </style>
      
      <!--- title start -->
      <div class="card">
        <h1>Employee List</h1> 
      </div>
      <!--- title end -->
      
      <div class="card">
        <div class="mdl-grid">
          <div class="table-responsive">
          <!--- Table start -->
            <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
              <thead>
                <tr>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">S.No</th>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">First Name</th>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">Last Name</th>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">Designation</th>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">Phone Number</th>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">Email</th>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">Action</th>
                </tr>
              </thead>
              <!--- Dom Repeat started -->
              <template is="dom-repeat" items="{{user.emplist}}" id="employeeList" > 
                <tbody>
                  <tr class="item">
                    <td class="mdl-data-table__cell--non-numeric">{{item.0}}</td>
                    <td class="mdl-data-table__cell--non-numeric">{{item.1}}</td>
                    <td class="mdl-data-table__cell--non-numeric">{{item.2}}</td>
                    <td class="mdl-data-table__cell--non-numeric">{{item.3}}</td>
                    <td class="mdl-data-table__cell--non-numeric">{{item.4}}</td>
                    <td class="mdl-data-table__cell--non-numeric">{{item.5}}</td>
                    <td><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" on-click="delete" >Delete </button> </td>
                  </tr>
                </tbody>
              </template>
              <!--- Dom Repeat End -->
                <array-selector id="selector" items="{{user.emplist}}" selected="{{selected}}" multi toggle></array-selector>
            </table>
            <!--- Table end -->
          </div>
        </div>
      </div>
     
    `;
    }


    // Data delete from local storage
    delete(e) {
        const index = e.model.__data.index;
        var item = e.model.__data.item;
        var data = JSON.parse(window.localStorage.getItem('All-Entries'));
        console.log(data);
        data.splice(index, 1);
        window.localStorage.setItem("All-Entries", JSON.stringify(data));
        window.alert("Employee Deleted Sucessfully");
        window.location.reload();
    }



}

window.customElements.define('employee-list', EmployeeList);