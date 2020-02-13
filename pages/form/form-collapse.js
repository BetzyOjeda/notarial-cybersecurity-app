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
import '@bbva-web-components/bbva-form-toggle';
import '@bbva-web-components/bbva-expandable-accordion';
import '@bbva-web-components/bbva-list-definition';
import '@bbva-web-components/bbva-button-default';
import '@bbva-web-components/bbva-help-modal';
import '../form/section-one';
import '../form/section-two';
import '../form/section-three';
import '../form/section-four';
import '../form/section-five';

import {
  gridTempleteCss
} from '../grid-templete';

class FormCollapse extends CellsPage {
  static get is() {
    return 'form-collapse';
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      headerTitle: {
        type: String
      },
      currentActive: {
        type: Number
      }
    };
  }

  onPageEnter() {
    console.log('Page loaded');
  }

  onPageLeave() {
    console.log('Page unloaded');
  }

  fireCompleteEvent(e) {
    let next = e.target.id.split('-');
    console.log('next ', next);
    this.shadowRoot.querySelector('#accordion-' + next[1])._onHeaderClick();
    if (next[2] === '6') {
      alert('Informaciòn guardada ');
      //this.shadowRoot.querySelector('bbva-help-modal').open();
    } else {
      this.shadowRoot.querySelector('#accordion-' + next[2]).setAttribute('opened', true);
      this.shadowRoot.querySelector('#accordion-' + next[2]).focus();
    }

  }

  render() {
    return html `
    <div class="cgt form">
      <div class="cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3">
    <bbva-expandable-accordion id="accordion-1" clip-box="" icon="coronita:idcard" row-title="1. Datos identificativos">
        <section-one></section-one>
        <div class="cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3">
          <bbva-button-default id="next-1-2" class="action section" text="Continuar" @click="${this.fireCompleteEvent}"></bbva-button-default>
        </div>
    </bbva-expandable-accordion>
    </div>
    <div class="cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3">
    <bbva-expandable-accordion id="accordion-2" clip-box="" icon="coronita:tools" row-title="2. Capacidad ténica">
        <section-two></section-two>
      <div class="cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3">
        <bbva-button-default id="next-2-3" class="action section" text="Continuar" @click="${this.fireCompleteEvent}"></bbva-button-default>
      </div>
    </bbva-expandable-accordion>
    </div>
    <div class="cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3">
    <bbva-expandable-accordion id="accordion-3" clip-box="" icon="coronita:wellness" row-title="3. Solvencia moral">
      <section-three></section-three>
      <div class="cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3">
        <bbva-button-default id="next-3-4" class="action section" text="Continuar" @click="${this.fireCompleteEvent}"></bbva-button-default>
      </div>
    </bbva-expandable-accordion>
    </div>
    <div class="cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3">
    <bbva-expandable-accordion id="accordion-4" clip-box="" icon="coronita:commercialoffer" row-title="4. Valoración comercial">
      <section-four></section-four>
      <div class="cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3">
        <bbva-button-default id="next-4-5" class="action section" text="Continuar" @click="${this.fireCompleteEvent}"></bbva-button-default>
      </div>
    </bbva-expandable-accordion>
    </div>
    <div class="cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3">
    <bbva-expandable-accordion id="accordion-5" clip-box="" icon="coronita:executive" row-title="5. Promotor">
        <section-five></section-five>
        <div class="cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3">
          <bbva-button-default id="next-5-6" class="action section" text="Finalizar" @click="${this.fireCompleteEvent}"></bbva-button-default>
        </div>
    </bbva-expandable-accordion>
    <bbva-help-modal accessibility-text-icon-right1="Close" icon-right1="coronita:close" half-modal="true" header-text="Modal header" button-text="Accept" link-text="Link">
      <div class="content" slot="slot-content">
        <cells-icon class="content-icon" size="24" icon="coronita:info"></cells-icon>
        <p class="title">Informaciòn guardada </p>
        <p class="text-content"></p>
      </div>
    </bbva-help-modal>
    </div>
    </div>
    `;
  }

  static get styles() {
    return [gridTempleteCss, css `
        bbva-expandable-accordion{
          margin: 0 2rem;
        }
        .section {
          margin-top: -2rem;
        }
        bbva-button-default {
          float: right;
        }
        .content {
            text-align: right;
        }
        .summary {
            padding: 16px 0 0;
        }
        .summary p {
            margin: 0;
            line-height: 24px;
        }
        bbva-list-definition {
            padding: 16px 0 0;
            border-bottom: 0;
        }
        .form {
          margin: 6rem 0;
          padding: 3rem 0;
        }
    `];
  }
}

window.customElements.define(FormCollapse.is, FormCollapse);
