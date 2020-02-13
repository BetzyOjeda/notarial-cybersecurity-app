import { CellsPage} from '@cells/cells-page';
import { html, css} from 'lit-element';
import '@cells-components/cells-template-paper-drawer-panel';
import '@cells-components/coronita-icons';
import '@bbva-web-components/bbva-form-select';
import '@bbva-web-components/bbva-form-text';
import '@bbva-web-components/bbva-list-toggle';
import '@bbva-web-components/bbva-form-date';

import {
  gridTempleteCss
} from '../grid-templete';

class SectionFive extends CellsPage {
  static get is() {
    return 'section-five';
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
        <bbva-list-toggle heading="Carta de aceptación de capacidad" link-text=""></bbva-list-toggle>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-text 
          label="Nombre de los promotores con los que trabaja" 
          value=""
          error-message="Ingrese correctamente Expertise operaciones"
          validate-on-blur
          pattern="\\d{3}"
          allowed-pattern="[0-9]"
          form="formExperienceOperations">
        </bbva-form-text>
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
      bbva-form-text{
        text-align: left;
      }
    `];
  }
}

window.customElements.define(SectionFive.is, SectionFive);
