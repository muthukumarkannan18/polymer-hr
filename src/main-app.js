import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';




// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MainApp extends PolymerElement {
    static get template() {
        return html `
    
      <style>
              :host {
                --app-primary-color: #673AB7;
                --app-secondary-color: black;

                display: block;
              }
              h1{
                font-size: 22px !important;
              }

              app-drawer-layout:not([narrow]) [drawer-toggle] {
                display: none;
              }

              app-header {

                color: #fff;
                background-color: var(--app-primary-color);
              }
              @media only screen and (min-width: 640px) {
                  app-header{
                      display: none;
                  }
              }

              app-header paper-icon-button {
                --paper-icon-button-ink-color: white;
              }
              .drawer-list {
                margin: 0 20px;
              }

              .drawer-list a {
                display: block;
                text-decoration: none;
                color: var(--app-secondary-color);
                line-height: 40px;
                
              }

              .drawer-list a.iron-selected {
                color: #fff;
                font-weight: bold;
              }
              app-drawer {
                  --app-drawer-scrim-background: rgba(0, 0, 100, 0.8);
          
                  --app-drawer-content-container: {
                    background-color: #673AB7;
                  }
                  
                }
                .logo img{
                  margin-top:20px;
              }
              .mobile-logo img{
                margin-top:7px;
            }
              
              .drawer-list a.iron-selected {
                background: #8d5ce4;
            }
            .drawer-list a {
              color: #fff;
              padding: 11px 27px;
              border-bottom: 1px solid #5c30ab;
              font-size: 18px;
              font-weight: normal !important;
            }
              .drawer-list a:hover {
                background: #8d5ce4;
            }
            footer.card {
              margin: 0px 34px 0px;
              padding: 1px 28px;
              color: #757575;
              border-radius: 5px;
              background-color: #fff;
              box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            }
            footer p a{
              text-decoration: none;

            }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
      <!-- Drawer content -->
      <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
        <app-toolbar><div class="logo"><img src="images/logo-png.png" width="200" alt="UniqueHire" loading="lazy"></div></app-toolbar>
        <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
          <a name="dashboard" href="[[rootPath]]dashboard">Dashboard</a>
          <a name="add-employee" href="[[rootPath]]add-employee">Add Employee</a>
          <a name="employee-list" href="[[rootPath]]employee-list">Employee List</a>
          <a name="attendance-list" href="[[rootPath]]attendance-list">Attendance</a>
          <a name="login" href="[[rootPath]]login">Logout</a>
        </iron-selector>
      </app-drawer>
        <!-- Main content -->
        <app-header-layout has-scrolling-region="">
        
        <app-header id="appheader" slot="header" condenses="" reveals="" effects="waterfall">
        <app-toolbar>
          <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
         <div main-title="" class="mobile-logo"><img src="images/logo-png.png" width="150" alt="UniqueHire" loading="lazy"></div>
        </app-toolbar>
      </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
          
            <login-app name="login"></login-app>
            <dashboard-app name="dashboard"></dashboard-app>
            <add-employee name="add-employee"></add-employee>
            <employee-list name="employee-list"></employee-list>
            <attendance-list name="attendance-list"></attendance-list>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
          <footer class="card">
                        <p>2020 - 2021 Copyrights by <a href="#">UniqueHire</a>. Designed & Maintanined by <a
                                href="#">UniqueHire</a></p>
                    </footer>
        </app-header-layout>
        </app-drawer-layout>
    `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged'
            },
            routeData: Object,
            subroute: Object
        };
    }

    static get observers() {
        return [
            '_routePageChanged(routeData.page)'
        ];
    }

    _routePageChanged(page) {
        // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
        if (!page) {
            this.page = 'login';

        } else if (['login', 'dashboard', 'add-employee', 'employee-list', 'attendance-list'].indexOf(page) !== -1) {
            this.page = page;
        } else {
            this.page = 'view404';
        }

        // Close a non-persistent drawer when the page & route are changed.
        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }

        if (page = 'login') {} else {

            this.$.drawer.style.display = "block";
        }
    }

    _pageChanged(page) {
        // Import the page component on demand.
        //
        // Note: `polymer build` doesn't like string concatenation in the import
        // statement, so break it up.
        switch (page) {

            case 'login':
                import ('./login-app.js');
                this.$.drawer.style.display = "none";
                this.$.appheader.style.display = "none";
                break;
            case 'dashboard':
                import ('./dashboard-app.js');
                break;
            case 'add-employee':
                import ('./add-employee.js');
                break;
            case 'employee-list':
                import ('./employee-list.js');
                break;
            case 'attendance-list':
                import ('./attendance-list.js');
                break;
        }
    }

}

window.customElements.define('main-app', MainApp);