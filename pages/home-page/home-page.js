import {
  CellsPage
} from '@cells/cells-page';
import {
  html,
  css
} from 'lit-element';
import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';

import '@cells-components/coronita-icons';
import '../form/form-main';
import '../form/form-collapse';
import '../structure-page/ext-header-bbva';
import '../structure-page/ext-footer-bbva';
import '../structure-page/login-page';
import '../components-page/ext-table-bbva';
import { fontBbvaCss } from '../components-page/ext-fonts-bbva';

class HomePage extends CellsPage {
  static get is() {
    return 'home-page';
  }

  constructor() {
    super();
    console.log(this.shadowRoot);
  }

  static get properties() {
    return {
      headerTitle: {
        type: String
      }
    };
  }

  onPageEnter() {
    console.log('Page loaded');
  }

  onPageLeave() {
    console.log('Page unloaded');
  }

  _handleClick() {
    this.publish('from-channel', {
      from: 'home'
    });
    this.navigate('another', {
      title: 'This is another page'
    });
  }

  changeTemplete(e) {
    this.shadowRoot.querySelector('#temp-login').setAttribute('state', 'inactive');
    this.shadowRoot.querySelector('#temp-form').setAttribute('state', 'active');
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel id="temp-login" has-footer state="active">
        <div slot="app__header">                                                                                                                                                                                                                                                                                              
          <ext-header-bbva></ext-header-bbva>
        </div>

        <div id="container-login" slot="app__main" class="login">
          <login-page @has-login="${this.changeTemplete}"></login-page>
        </div>

        <div slot="app__footer">
          <ext-footer-bbva></ext-footer-bbva>
        </div>
        
      </cells-template-paper-drawer-panel>

      <cells-template-paper-drawer-panel id="temp-form" has-footer state="inactive">
        <div slot="app__header">                                                                                                                                                                                                                                                                                              
          <ext-header-bbva hassession></ext-header-bbva>
        </div>

        <div slot="app__main" class="container">
          <form-collapse></form-collapse>
          <!--<form-main></form-main>-->
        </div>

        <div slot="app__footer">
          <ext-footer-bbva></ext-footer-bbva>
        </div>
        
      </cells-template-paper-drawer-panel>`;
  }

  static get styles() {
    return [fontBbvaCss, css`
      bbva-header-main {
        --bbva-header-main-bg-color: #002171;
      }
      :host {
        --cells-template-paper-drawer-panel-main-padding-top: 50px;
        --cells-template-paper-drawer-panel-footer-height: 120px;
        --cells-template-paper-drawer-panel-section-bg: #F4F4F4;
        font-family: var(--bbva-Book);
      }
      .container {
        margin: 0 7rem;
        background-color: white;
      }
      #container-login {
        background-color: white;
      }
      .login {
        width: 40%; 
        padding: 2rem; 
        position: absolute; 
        left: 50%; top: 50%; 
        transform: translate(-50%, -50%);     
        -webkit-transform: translate(-50%, -50%);
      }
    `];
  }
}

window.customElements.define(HomePage.is, HomePage);