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
import '@bbva-web-components/bbva-expandable-multistep';
import '@bbva-web-components/bbva-expandable-multistep/bbva-expandable-step';
import '@bbva-web-components/bbva-list-definition';
import '@bbva-web-components/bbva-button-default';
import '../form/section-one';
import '../form/section-two';
import '../form/section-three';
import '../form/section-four';
import '../form/section-five';

import {
  gridTempleteCss
} from '../grid-templete';

class FormMain extends CellsPage {
  static get is() {
    return 'form-main';
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
    this.shadowRoot.querySelector('#step-' + next[1]).setAttribute('completed', '');
    this.shadowRoot.querySelector('#step-' + next[2]).removeAttribute('completed');
    this.shadowRoot.querySelector('#step-' + next[2]).setAttribute('active', '');
  }

  render() {
    return html `
    <bbva-expandable-multistep>
        <bbva-expandable-step id="step-1" header="Datos identificativos" disabled-target=".action">
            <div class="content">
              <section-one></section-one>
              <bbva-button-default id="next-1-2" class="action" text="Continue" @click="${this.fireCompleteEvent}"></bbva-button-default>
            </div>
            <div class="summary" slot="summary">
              <p>Completo</p>
            </div>
        </bbva-expandable-step>

        <bbva-expandable-step id="step-2" header="Capacidad tècnica" disabled-target=".action">
            <div class="content">
              <section-two></section-two>
              <bbva-button-default id="next-2-3" class="action" text="Continue" @click="${this.fireCompleteEvent}"></bbva-button-default>
            </div>
            <div class="summary" slot="summary">
              <p>Incompleto</p>
            </div>
        </bbva-expandable-step>

        <bbva-expandable-step id="step-3" header="Solvencia moral" disabled-target=".action">
            <div class="content">
              <section-three></section-three>
              <bbva-button-default id="next-3-4" class="action" text="Continue" @click="${this.fireCompleteEvent}"></bbva-button-default>
            </div>
            <div class="summary" slot="summary">
              <p>Incompleto</p>
            </div>
        </bbva-expandable-step>

        <bbva-expandable-step id="step-4" header="Valoracion comercial" disabled-target=".action">
            <div class="content">
              <section-four></section-four>
              <bbva-button-default id="next-4-5" class="action" text="Continue" @click="${this.fireCompleteEvent}"></bbva-button-default>
            </div>
            <div class="summary" slot="summary">
              <p>Incompleto</p>
              <bbva-list-definition class="date transparent" items="[{&quot;key&quot;: &quot;15/04/2018&quot;, &quot;value&quot;: &quot;Date description&quot;}, {&quot;key&quot;: &quot;16/04/2018&quot;, &quot;value&quot;: &quot;Date description&quot;}]"></bbva-list-definition>
            </div>
        </bbva-expandable-step>

        <bbva-expandable-step id="step-5" header="Promotor" disabled-target=".action">
            <div class="content">
              <section-five></section-five>
              <bbva-button-default id="next-5-6" class="action" text="Finish" @click="${this.fireCompleteEvent}"></bbva-button-default>
            </div>
            <div class="summary" slot="summary">
              <p>Incompleto</p>
            </div>
        </bbva-expandable-step>
    </bbva-expandable-multistep> 
    `;
  }

  static get styles() {
    return [gridTempleteCss, css `
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
    `];
  }
}

window.customElements.define(FormMain.is, FormMain);
