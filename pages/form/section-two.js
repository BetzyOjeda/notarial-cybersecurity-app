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

class SectionTwo extends CellsPage {
  static get is() {
    return 'section-two';
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
    <div class="cgt form">
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-list-toggle heading="Patente notarial vigente" link-text=""></bbva-list-toggle>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-date label="Inicio actividad notarial" required="" validate-on-blur=""></bbva-form-date>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-text 
          label="Expertise operaciones *" 
          value=""
          error-message="Ingrese correctamente Expertise operaciones"
          validate-on-blur
          pattern="\\d{3}"
          allowed-pattern="[0-9]"
          form="formExperienceOperations">
        </bbva-form-text>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-list-toggle heading="Referencia" link-text=""></bbva-list-toggle>
      </div>

      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
          <bbva-form-text 
            label="Personal asignado como frente BBVA *" 
            value=""
            error-message="Ingrese correctamente Personal asignado como frente BBVA"
            validate-on-blur
            pattern="^[a-zA-ZñÑ]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$"
            allowed-pattern="[a-zA-ZñÑ\\d]"
            form="formBbvaStaff">
          </bbva-form-text>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
          <bbva-form-text 
            label="Nombre del personal *" 
            value="" 
            error-message="Ingrese correctamente un nombre"
            validate-on-blur
            pattern="^[a-zA-ZñÑ]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$"
            allowed-pattern="[a-zA-ZñÑ\\d]"
            form="formNameStaff">
          </bbva-form-text>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-text 
            label="Apellido Paterno del personal *" 
            value="" 
            error-message="Ingrese correctamente apellido paterno del personal"
            validate-on-blur
            pattern="^[a-zA-ZñÑ]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$"
            allowed-pattern="[a-zA-ZñÑ\\d]"
            form="formLastNameStaff">
          </bbva-form-text>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-text 
            label="Apellido Materno del personal" 
            value="" 
            error-message="Ingrese correctamente apellido materno del personal"
            pattern="^[a-zA-ZñÑ]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$"
            allowed-pattern="[a-zA-ZñÑ\\d]"
            form="formSecondLastNameStaff">
          </bbva-form-text>
      </div>
        
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-text 
            label="Puesto del personal *" 
            value="" 
            error-message="Ingrese correctamente puesto del personal"
            validate-on-blur
            pattern="^[a-zA-ZñÑ]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$"
            allowed-pattern="[a-zA-ZñÑ\\d]"
            form="formEmailNotary">
          </bbva-form-text>
      </div>
      
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-text 
          label="Protocolo CX*" 
          value="" 
          error-message="Ingrese correctamente un Protocolo CX"
            validate-on-blur
            pattern="^[a-zA-ZñÑ]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$"
            allowed-pattern="[a-zA-ZñÑ\\d]"
            form="formCXprotocol>
        </bbva-form-text>
      </div>
   </div>
    `;
  }

  static get styles() {
    return [gridTempleteCss, css`
        bbva-form-option,
        bbva-form-date,
        bbva-form-text{
          text-align: left;
        }

        .form {
          margin: 0 4rem;
        }
    `];
  }
}

window.customElements.define(SectionTwo.is, SectionTwo);
