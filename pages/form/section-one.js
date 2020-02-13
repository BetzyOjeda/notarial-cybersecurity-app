import {
  CellsPage
} from '@cells/cells-page';
import {
  html,
  css
} from 'lit-element';
import '@cells-components/cells-template-paper-drawer-panel';
import '@cells-components/coronita-icons';
import '@bbva-web-components/bbva-form-select';
import '@bbva-web-components/bbva-form-text';
import '@bbva-web-components/bbva-button-default';

import {gridTempleteCss} from '../grid-templete';

class SectionOne extends CellsPage {
  static get is() {
    return 'section-one';
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
    return html `
    <div class="cgt form">
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
          <bbva-form-select label="Situación" id="sec1_situacion">
            <bbva-form-option value="option1">Activo</bbva-form-option>
            <bbva-form-option value="option2">Inactivo</bbva-form-option>
          </bbva-form-select>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-select label="Categoría del padrón">
          <bbva-form-option value="option1">Oro</bbva-form-option>
          <bbva-form-option value="option2">Plata</bbva-form-option>
          <bbva-form-option value="option3">Bronce</bbva-form-option>
          <bbva-form-option value="option4">Liga de ascenso</bbva-form-option>
        </bbva-form-select>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-select label="Estado">
          <bbva-form-option value="option1">Aguascalientes</bbva-form-option>
          <bbva-form-option value="option2">Baja California</bbva-form-option>
          <bbva-form-option value="option3">Baja California Sur</bbva-form-option>
          <bbva-form-option value="option4">Campeche</bbva-form-option>
          <bbva-form-option value="option5">Campeche California Sur</bbva-form-option>
        </bbva-form-select>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-select label="Plaza">
          <bbva-form-option value="option1">ABASCAL OLASCOAGA RODRIGO</bbva-form-option>
          <bbva-form-option value="option2">ADAME LÓPEZ ÁNGEL GILBERTO</bbva-form-option>
          <bbva-form-option value="option3">AGUILAR MOLINA VÍCTOR RAFAEL</bbva-form-option>
          <bbva-form-option value="option4">AGUILERA SOTO RAMÓN</bbva-form-option>
          <bbva-form-option value="option5">AGUILERA SOTO RAMÃ“N</bbva-form-option>
        </bbva-form-select>
      </div>

      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
          <bbva-form-text 
            label="Número de notarìa *" 
            value=""
            error-message="Ingrese un número de notarìa válido"
            validate-on-blur
            pattern="\\d{3}"
            allowed-pattern="\\d"
            form="formNumberNotary">
          </bbva-form-text>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
          <bbva-form-text 
            label="Nombre de notario *" 
            value="" 
            error-message="Ingrese un nombre válido"
            validate-on-blur
            asedfr sfñsdfwerPwer
            pattern="^[A-Za-zÁÉÍÓÚñáéíóúÑ\\s]{2,20}$"
            allowed-pattern="[a-zA-ZÁÉÍÓÚñáéíóúÑ\\s]"
            form="formNameNotary">
          </bbva-form-text>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
          <bbva-form-text 
            label="Apeliido Paterno de notario *" 
            value="" 
            error-message="Ingrese un apellido paterno válido"
            validate-on-blur
            pattern="^[A-Za-zÁÉÍÓÚñáéíóúÑ\\s]{2,20}$"
            allowed-pattern="[a-zA-ZÁÉÍÓÚñáéíóúÑ\\s]"
            form="formNameNotary">
          </bbva-form-text>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
          <bbva-form-text 
            label="Apellido Materno de notario" 
            value=""             
            pattern="^[A-Za-zÁÉÍÓÚñáéíóúÑ\\s]{2,20}$"
            allowed-pattern="[a-zA-ZÁÉÍÓÚñáéíóúÑ\\s]"
            form="formNameNotary">
          </bbva-form-text>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-text 
            label="Direcciòn *" 
            value="" 
            error-message="Ingrese correctamente una direcciòn"
            validate-on-blur
            pattern="^[A-Za-zÁÉÍÓÚñáéíóúÑ\\s\\d]{2,50}$"
            allowed-pattern="[a-zA-ZÁÉÍÓÚñáéíóúÑ\\s\\d]"
            form="formDirection">
          </bbva-form-text>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-text 
            label="RFC de notario *" 
            value="" 
            error-message="Ingrese correctamente un RFC"
            validate-on-blur
            pattern="^[a-zA-ZñÑ]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$"
            allowed-pattern="[a-zA-ZñÑ\\d]"
            form="formRFCNotary">
          </bbva-form-text>
      </div>
        
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-text 
            label="Email de notario *" 
            value="" 
            error-message="Ingrese correctamente un e-mail"
            validate-on-blur
            pattern="^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$"
            allowed-pattern="."
            form="formEmailNotary">
          </bbva-form-text>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-text 
          label="Telèfono de notario *" 
          value="" 
          error-message="Ingrese correctamente un telèfono"
            validate-on-blur
            pattern="\\d{10}"
            allowed-pattern="[0-9]"
            form="formPhoneNotary">
        </bbva-form-text>
      </div>
     <!-- <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-text 
          label="ID Notario en BBVA *" 
          value="" 
          error-message="Ingrese correctamente un ID notario"
            validate-on-blur
            pattern="\\d{5}"
            allowed-pattern="[0-9]"
            form="formIdNotaryBBVA">
        </bbva-form-text>
      </div>
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-form-text 
          label="Alta en e-Notario *" 
          value="" 
          error-message="Ingrese correctamente un e-notario"
            validate-on-blur
            pattern="\\d{3}"
            allowed-pattern="[0-9]"
            form="formEnotary">
        </bbva-form-text>
      </div>-->
      <div class="cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6">
        <bbva-list-toggle heading="Adjuntar CV" link-text=""></bbva-list-toggle>
      </div>
    </div>
    `;
  }

  static get styles() {
    return [gridTempleteCss, css `
      .form {
        margin: 2rem 4rem 0 4rem;
      }

      bbva-form-option,
      bbva-form-date,
      bbva-form-text{
        text-align: left;
      }
    `];
  }
}

window.customElements.define(SectionOne.is, SectionOne);
