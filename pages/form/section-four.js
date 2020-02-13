import { CellsPage} from '@cells/cells-page';
import { html, css} from 'lit-element';
import '@cells-components/cells-template-paper-drawer-panel';
import '@cells-components/coronita-icons';
import '@bbva-web-components/bbva-form-select';
import '@bbva-web-components/bbva-form-text';
import '@bbva-web-components/bbva-list-toggle';
import '@bbva-web-components/bbva-form-amount';

import {
  gridTempleteCss
} from '../grid-templete';

class SectionFour extends CellsPage {
  static get is() {
    return 'section-four';
  }

  constructor() {
    super();
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

  render() {
    return html`
    <div class="cgt">
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
          <bbva-form-amount label="Facturación con BBVA" currency-code="MXN" local-currency="MXN" language="es">
        </bbva-form-amount>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-list-toggle heading="Segmento Comercial" link-text=""></bbva-list-toggle>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-list-toggle heading="Cuenta BBVA" link-text=""></bbva-list-toggle>
      </div>
    </div>
    `;
  }

  static get styles() {
    return [gridTempleteCss, css`
      cells-template-paper-drawer-panel {
        background-color: #5472d3;
      }

      .container {
        padding-bottom: 140px;
        margin: 20px 20px 40px;
        background-color:#0d47a1 ;
        position: relative;
      }

      .container h2 {
        padding-top: 20%;
        color: white;
        text-align: center;
        font-family: sans-serif;
      }

      .container:after {
        content: '';
        display: block;
        clear: both;
      }

      .prev-next-button {
        position: absolute;
        top: 50%;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: white;
        border: none;
        font-size: 30px;
        color: #0d47a1;
        transform: translateY(-50%);
      }

      .previous { left: 10px; }
      .next { right: 10px; }

      bbva-form-date,
      bbva-form-text,
      bbva-form-amount{
        text-align: left;
      }
    `];
  }
}

window.customElements.define(SectionFour.is, SectionFour);
