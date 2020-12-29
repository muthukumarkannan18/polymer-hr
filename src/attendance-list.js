import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/polymer/lib/elements/array-selector.js';


class AttendanceList extends PolymerElement {
    static get properties() {
        return {
            user: {
                type: Object,
                value: function() {
                    var leavelist = JSON.parse(window.localStorage.getItem('All-Leave-Entry-Lists'));

                    return {
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
      </style>

      <!--- title start -->
      <div class="card">
        <h1>Leave Request List</h1>
      </div>
      <!--- title end -->

      <!--- Main content start -->
      <div class="card">
        <div class="mdl-grid">
          <div class="table-responsive">
          <!--- table start -->
            <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp" id="resettable">
                <thead>
                  <tr>
                    <th scope="col" class="mdl-data-table__cell--non-numeric">S.No</th>
                    <th scope="col" class="mdl-data-table__cell--non-numeric">First Name</th>
                    <th scope="col" class="mdl-data-table__cell--non-numeric">Last Name</th>
                    <th scope="col" class="mdl-data-table__cell--non-numeric">Leave Date</th>
                    <th scope="col" class="mdl-data-table__cell--non-numeric">Leave Type</th>
                    <th scope="col" class="mdl-data-table__cell--non-numeric">Status</th>
                    <th scope="col" class="mdl-data-table__cell--non-numeric">Action</th>
                  </tr>
                </thead>

                <template is="dom-repeat" items="{{user.leavelist}}" id="leaveList" >
                  <tbody>
                    <tr class="item">
                        <td class="mdl-data-table__cell--non-numeric">{{item.0}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.1}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.2}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.3}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.4}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.5}}</td>
                        <td><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" on-click="approve" > Approve </button> <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary" on-click="reject" > Reject </button></td>
                    </tr>       
                  </tbody>
                </template>

                <array-selector id="selector" items="{{leavelist}}" selected="{{selected}}" multi toggle>
                </array-selector>

            </table> 
            <!--- table end -->     
          </div>
        </div>
      </div>
      <!--- Main content end -->
    `;
    }



    //change status pending into completed
    approve(b) {
        const index = b.model.__data.index;
        var data = JSON.parse(window.localStorage.getItem('All-Leave-Entry-Lists'));
        data[index][data[index].length - 1] = "Completed";
        console.log(data);
        window.localStorage.setItem("All-Leave-Entry-Lists", JSON.stringify(data));
        window.alert("Employee Leave Request Approved Sucessfully");
        window.location.reload();
    }

    //change status pending into reject
    reject(d) {
        const index = d.model.__data.index;
        var data = JSON.parse(window.localStorage.getItem('All-Leave-Entry-Lists'));
        data[index][data[index].length - 1] = "Reject";
        console.log(data);
        window.localStorage.setItem("All-Leave-Entry-Lists", JSON.stringify(data));
        window.alert("Employee Leave Request Rejected");
        window.location.reload();

    }
}

window.customElements.define('attendance-list', AttendanceList);