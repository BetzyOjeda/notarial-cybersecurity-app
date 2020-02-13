import {
  LitElement,
  css,
  html
} from 'lit-element';
import '@cells-components/coronita-icons';
import '@cells-components/cells-icon';

export class ActionLabel extends LitElement {
  static get properties() {
    return {
      url: {
        type: String
      },
      text: {
        type: String
      },
      hasicon: {
        type: Boolean

      },
      icon: {
        type: String
      },
      csstext: {
        type: String
      },
      hasimage: {
        type: Boolean
      },
      image: {
        type: String
      },
      dirPage: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.url = '';
    this.text = '';
    this.icon = '';
    this.csstext = '';
    this.image = '';
    this.dirPage = '';
  }

  render() {
    return html `
    <div id='main' on-click='redir'>
        ${this.hasicon ? html`<cells-icon icon="coronita:getout" size="20"></cells-icon>` : html``}
        ${this.hasimage ? html`<img id='image' src='${this.image}' alt='${this.image}'>` : html``}
        <div id='contlabel' class='textlabel ${this.csstext}'>${this.text}</div>
    </div>
    `;
  }

  redir() {
    this.dispatchEvent(new CustomEvent('action', {
      detail: {
        url: this.url
      }
    }));
  }

  static get styles() {
    return css `
    :host {
        display: block;
    }

    .bbva-icon,
    [class^='bbva-icon'] {
        display: inline-block;
    }

    .bbva-icon {
        font-size: 24px;
        line-height: 24px;
    }

    @media (min-width: 992px) {
        .bbva-icon {
            font-size: 20px;
            line-height: 20px;
        }
    }

    .textlabel {
        display: inline-block;
    }

    img {
        padding-right: 0.5rem;
        display: inline-block;
    }

    .contlabel {
        color: var(--bbva-core-dark-blue);
    }

    #main {
        cursor: pointer;
        align-items: center;
    }

    .line {
        line-height: 24px;
    }

    #icon {
        margin: 8px;
    }
    `;
  }

}

customElements.define('ext-action-label-bbva', ActionLabel);
