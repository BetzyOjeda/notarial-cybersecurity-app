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

class SectionThree extends CellsPage {
  static get is() {
    return 'section-three';
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
        <bbva-list-toggle heading="Escrito ausencia confllicto de interés" link-text=""></bbva-list-toggle>
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
    `];
  }
}

window.customElements.define(SectionThree.is, SectionThree);
