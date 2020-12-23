import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';


class AttendanceList extends PolymerElement {
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
        <h1>Today Leave List</h1>
        
      </div>
      <div class="card">
      <div class="mdl-grid">
      <div class="table-responsive">
      <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                  <thead>
                    <tr>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">S.No</th>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">First Name</th>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Last Name</th>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Designation</th>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Phone Number</th>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Status</th>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="mdl-data-table__cell--non-numeric">1</td>
                      <td class="mdl-data-table__cell--non-numeric">Muthukumar</td>
                      <td class="mdl-data-table__cell--non-numeric">Kannan</td>
                      <td class="mdl-data-table__cell--non-numeric">Software Developer</td>
                      <td class="mdl-data-table__cell--non-numeric">+91 8608788828</td>
                      <td class="mdl-data-table__cell--non-numeric">Pending</td>
                      <td class="mdl-data-table__cell--non-numeric"><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Reject</button> <button type="submit"
                          class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Approve</button></td>

                    </tr>
                    <tr>
                    <td class="mdl-data-table__cell--non-numeric">2</td>
                    <td class="mdl-data-table__cell--non-numeric">Sri Sugan</td>
                    <td class="mdl-data-table__cell--non-numeric">Kannan</td>
                    <td class="mdl-data-table__cell--non-numeric">Software Developer</td>
                    <td class="mdl-data-table__cell--non-numeric">+91 8608788828</td>
                    <td class="mdl-data-table__cell--non-numeric">Pending</td>
                    <td class="mdl-data-table__cell--non-numeric"><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Reject</button> <button type="submit"
                          class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Approve</button></td>
                    </tr>
                    <tr>
                    <td class="mdl-data-table__cell--non-numeric">3</td>
                    <td class="mdl-data-table__cell--non-numeric">Santhosh</td>
                    <td class="mdl-data-table__cell--non-numeric">Yesudas</td>
                    <td class="mdl-data-table__cell--non-numeric">Software Developer</td>
                    <td class="mdl-data-table__cell--non-numeric">+91 8608788828</td>
                    <td class="mdl-data-table__cell--non-numeric">Pending</td>
                    <td class="mdl-data-table__cell--non-numeric"><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Reject</button> <button type="submit"
                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Approve</button></td>
                    </tr>
                    <tr>
                    <td class="mdl-data-table__cell--non-numeric">4</td>
                    <td class="mdl-data-table__cell--non-numeric">Vijay</td>
                    <td class="mdl-data-table__cell--non-numeric">Kumar</td>
                    <td class="mdl-data-table__cell--non-numeric">Software Developer</td>
                    <td class="mdl-data-table__cell--non-numeric">+91 8608788828</td>
                    <td class="mdl-data-table__cell--non-numeric">Pending</td>
                    <td class="mdl-data-table__cell--non-numeric"><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Reject</button> <button type="submit"
                          class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Approve</button></td>
                    </tr>
                    <tr>
                    <td class="mdl-data-table__cell--non-numeric">5</td>
                    <td class="mdl-data-table__cell--non-numeric">Henry</td>
                    <td class="mdl-data-table__cell--non-numeric">Prasana</td>
                    <td class="mdl-data-table__cell--non-numeric">Software Developer</td>
                    <td class="mdl-data-table__cell--non-numeric">+91 8608788828</td>
                    <td class="mdl-data-table__cell--non-numeric">Pending</td>
                    <td class="mdl-data-table__cell--non-numeric"><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Reject</button> <button type="submit"
                          class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Approve</button></td>
                    </tr>

                    <tr>
                    <td class="mdl-data-table__cell--non-numeric">6</td>
                    <td class="mdl-data-table__cell--non-numeric">Muthukumar</td>
                    <td class="mdl-data-table__cell--non-numeric">Kannan</td>
                    <td class="mdl-data-table__cell--non-numeric">Software Developer</td>
                    <td class="mdl-data-table__cell--non-numeric">+91 8608788828</td>
                    <td class="mdl-data-table__cell--non-numeric">Pending</td>
                    <td class="mdl-data-table__cell--non-numeric"><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Reject</button> <button type="submit"
                          class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Approve</button></td>

                    </tr>
                    <tr>
                    <td class="mdl-data-table__cell--non-numeric">7</td>
                    <td class="mdl-data-table__cell--non-numeric">Sri Sugan</td>
                    <td class="mdl-data-table__cell--non-numeric">Kannan</td>
                    <td class="mdl-data-table__cell--non-numeric">Software Developer</td>
                    <td class="mdl-data-table__cell--non-numeric">+91 8608788828</td>
                    <td class="mdl-data-table__cell--non-numeric">Pending</td>
                    <td class="mdl-data-table__cell--non-numeric"><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Reject</button> <button type="submit"
                          class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Approve</button></td>
                    </tr>
                    <tr>
                    <td class="mdl-data-table__cell--non-numeric">8</td>
                    <td class="mdl-data-table__cell--non-numeric">Santhosh</td>
                    <td class="mdl-data-table__cell--non-numeric">Yesudas</td>
                    <td class="mdl-data-table__cell--non-numeric">Software Developer</td>
                    <td class="mdl-data-table__cell--non-numeric">+91 8608788828</td>
                    <td class="mdl-data-table__cell--non-numeric">Pending</td>
                    <td class="mdl-data-table__cell--non-numeric"><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Reject</button> <button type="submit"
                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Approve</button></td>
                    </tr>
                    <tr>
                    <td class="mdl-data-table__cell--non-numeric">9</td>
                    <td class="mdl-data-table__cell--non-numeric">Vijay</td>
                    <td class="mdl-data-table__cell--non-numeric">Kumar</td>
                    <td class="mdl-data-table__cell--non-numeric">Software Developer</td>
                    <td class="mdl-data-table__cell--non-numeric">+91 8608788828</td>
                    <td class="mdl-data-table__cell--non-numeric">Pending</td>
                    <td class="mdl-data-table__cell--non-numeric"><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Reject</button> <button type="submit"
                          class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Approve</button></td>
                    </tr>
                    <tr>
                    <td class="mdl-data-table__cell--non-numeric">10</td>
                    <td class="mdl-data-table__cell--non-numeric">Henry</td>
                    <td class="mdl-data-table__cell--non-numeric">Prasana</td>
                    <td class="mdl-data-table__cell--non-numeric">Software Developer</td>
                    <td class="mdl-data-table__cell--non-numeric">+91 8608788828</td>
                    <td class="mdl-data-table__cell--non-numeric">Pending</td>
                    <td class="mdl-data-table__cell--non-numeric"><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Reject</button> <button type="submit"
                          class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Approve</button></td>
                    </tr>
                  </tbody>
                </table>
                </div>
                </div>
      </div>
    `;
    }
}

window.customElements.define('attendance-list', AttendanceList);