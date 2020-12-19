import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
class MaterialFile extends PolymerElement {
    static get template() {
      return html`
<link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
<script src="/node_modules/material-design-lite/material.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
`;
  }
}

window.customElements.define('material-file', MaterialFile);