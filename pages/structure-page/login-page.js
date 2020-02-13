import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import { fontBbvaCss } from '../components-page/ext-fonts-bbva';
import { gridTempleteCss } from '../grid-templete';

import '@cells-components/cells-template-paper-drawer-panel';
import '@cells-components/coronita-icons';
import '@bbva-web-components/bbva-button-default';
import '@bbva-web-components/bbva-form-password';
import '../components-page/ext-action-label-bbva';

class LoginPage extends CellsPage {
  static get is() {
    return 'login-page';
  }

  constructor() {
    super();
    console.log(this.shadowRoot);
  }

  static get properties() {
    return {};
  }

  onPageEnter() {
    console.log('Page loaded');
  }

  onPageLeave() {
    console.log('Page unloaded');
  }

  login(e) {
    let myEvent = new CustomEvent('has-login', {
      detail: { message: 'my-event happened.' },
      bubbles: true,
      composed: true });
    this.dispatchEvent(myEvent);
  }

  render() {
    return html`
        <div class="cgt form">
          <div style="width: 100%">
            <h4>¡Bienvenido!</h4>
          </div>
          <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-12">
            <bbva-form-text 
            label="Nùmero de referencia" 
            value="" 
            error-message="Nùmero de referencia invalido"
              validate-on-blur
              pattern="\\d{10}"
              form="formReference">
            </bbva-form-text>
          </div>
          <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-12">
            <bbva-form-text 
            label="Usuario" 
            value="" 
            error-message="Usuario invalido"
              validate-on-blur
              pattern="\\d{10}"
              allowed-pattern="[0-9]"
              form="formUser">
            </bbva-form-text>
          </div>

          <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-12">
            <bbva-form-password label="Contraseña" value=""></bbva-form-password>
          </div>
          <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-6">
            <ext-action-label-bbva text="¿Olvidaste tu contraseña?"></ext-action-label-bbva>
          </div>
          <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-6">
            <bbva-button-default @click="${this.login}">Continuar</bbva-button-default>
          </div>
        </div>
       `;
  }

  static get styles() {
    return [fontBbvaCss, gridTempleteCss, css`
      .form {
      
      }
      bbva-button-default {
        float:right
      }
      bbva-header-main {
        --bbva-header-main-bg-color: #002171;
      }
      :host {
        --cells-template-paper-drawer-panel-section-bg: #F4F4F4;
        font-family: var(--bbva-Book);
      }
      .container {
        background-color: var(--bbva-white);
      }
      h4 {
        font-family: BentonSansBBVA-Book, Helvetica, Arial, sans-serif;
        color: var(--bbva-black-600);
        text-align: center;
        font-size: 36px;
        letter-spacing: -0.2px;
        line-height: 12px;
      }
      ext-action-label-bbva {
        color: var(--bbva-core-dark-blue);
      } 
    `];
  }
}

window.customElements.define(LoginPage.is, LoginPage);
