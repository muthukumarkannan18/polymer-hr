import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-styles.js';
import '@polymer/polymer/lib/elements/array-selector.js';


class EmployeeList extends PolymerElement {
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

      <div class="card">
        <h1>Employee List</h1>
        
      </div>
      
      <div class="card">
      <div class="mdl-grid">
      <iron-ajax url="./src/emplist.json" last-response="{{item}}" auto> </iron-ajax>
                <div class="table-responsive">

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
                          
              
                          
                <template is="dom-repeat" items="{{emplist}}" id="employeeList" >
                
                            <tbody>
                              <tr class="item">
                                            <td class="mdl-data-table__cell--non-numeric">{{item.0}}</td>
                                            <td class="mdl-data-table__cell--non-numeric">{{item.1}}</td>
                                            <td class="mdl-data-table__cell--non-numeric">{{item.2}}</td>
                                            <td class="mdl-data-table__cell--non-numeric">{{item.3}}</td>
                                           <td class="mdl-data-table__cell--non-numeric">{{item.4}}</td>
                                            <td class="mdl-data-table__cell--non-numeric">{{item.5}}</td>
                                            <td><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" on-click="delete" > Delete </button> </td>

                                      </tr>
                                      
                            </tbody>
                </template>
                <array-selector id="selector" items="{{emplist}}" selected="{{selected}}" multi toggle></array-selector>
                                  
                    
                      </table>
                      
                      
                      
                  
                </div>
                </div>
      </div>
     
    `;
    }
    ready() {
        super.ready();

        //console.log('hi');
        //this.addEventListener('handleLocalstorageLoadEvent');
        //console.log('hi muthu');
        this.emplist = JSON.parse(window.localStorage.getItem('All-Entries'));
        //this.$.empfirstname.innerHTML = JSON.parse(window.localStorage.getItem('All-Entries', emplist[1]));
    }
    delete(e) {
        // var item = this.$.employeeList.itemForElement(e.target);
        // this.$.selector.select(item);
        var data = JSON.parse(window.localStorage.getItem('All-Entries'));
        console.log(data);
        data.splice(0, 1);
        window.localStorage.setItem("All-Entries", JSON.stringify(data));
        window.alert("Employee Deleted Sucessfully");

        // window.localStorage.removeItem('All-Entries'); // delete all
        // const target = e.target;
        // if ('BUTTON' != target.tagName) return;
        // const record = target.record;
        // do the rest
    }



}

window.customElements.define('employee-list', EmployeeList);