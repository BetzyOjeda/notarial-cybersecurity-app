import {LitElement, css, html } from 'lit-element';

export class FooterElement extends LitElement {
  static get properties() {
    return {
      imgSource: {
        type: String
      },
      footerText: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.imgSource = '../resources/images/logo/LogoBBVAOportunidades@2x.png';
    this.footerText = '';
  }

  render() {
    return html `
    <div id='footer'>
        <footer class='bbva--footer wrapper'>
            <div id='imgfooter'>
                <div>
                    <div class='footer__base'>
                        <div class='container'>
                            <session class='footer__container'>
                                <div class='footer__logo__link'>
                                    <img src='${this.imgSource}' class='footer__logo' alt='${this.imgSource}'>
                                </div>
                                ${this.footerText ? html`<p class='footer__copyright'>${this.footerText}</p>` : html``}
                            </session>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    `;
  }

  static get styles() {
    return css `
    :host {
        display: block;
    }

    .foo {
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    .bbva--footer.wrapper {
        margin-top: 7px;
    }

    footer,
    .bbva--footer,
    header {
        clear: both
    }

    @media(min-width:0) and (max-width:600px) {
        .wrapper .container {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
        }

        .wrapper .container:after {
            content: ' ';
            display: block;
            clear: both
        }
    }

    @media(min-width:600px) and (max-width:992px) {
        .wrapper .container {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto
        }

        .wrapper .container:after {
            content: ' ';
            display: block;
            clear: both
        }
    }

    @media(min-width:992px) and (max-width:1200px) {
        .wrapper .container {
            width: 986px;
            margin-left: auto;
            margin-right: auto
            }

        .wrapper .container:after {
            content: ' ';
            display: block;
            clear: both
        }

        .wrapper .container__sp {
            float: left;
            width: 100%;
            display: block;
            clear: both
        }
    }

    @media(min-width:1200px) {
        .wrapper .container {
            width: 986px;
            margin-left: auto;
            margin-right: auto;
            height: 64px;
        }

        .wrapper .container:after {
            content: ' ';
            display: block;
            clear: both
        }

        .wrapper .container__sp {
            float: left;
            width: 100%;
            display: block;
            clear: both
        }
    }

    .footer__base {
        background-color: var(--bbva-navy-blue);
        padding: 28px 0;
    }

    .footer__container {
        width: 100%
    }

    @media(min-width:0) and (max-width:992px) {
        .footer__container {
            text-align: center
        }
    }

    @media(min-width:992px) and (max-width:1200px) {
        .footer__container {
            width: 528px;
            float: left;
        }
    }

    @media(min-width:1200px) {
        .footer__container {
            width: 654px;
            float: left;
        }
    }

    .footer__container .link {
        display: inline-block;
        min-width: 40px
    }

    @media(min-width:992px) {
        .footer__container .link {
            margin-right: 24px;
            width: inherit
        }
    }

    .footer__logo__link {
        width: 100%;
        height: 47px;
        display: block
    }

    .footer__copyright {
        font-family: var(--bbva-Book);
        font-size: 12px;
        color: var(--bbva-black-600);
        text-align: left;
        letter-spacing: 0;
        line-height: 16px;
        margin-top: 16px;
        color: var(--bbva-gray);
        white-space: nowrap
    }

    @media(min-width:0) and (max-width:992px) {
        .footer__copyright {
            text-align: center;
            padding: 8px 32px 24px;
            display: block;
            position: relative;
            white-space: normal
        }
    }

    .footer__logo {
        max-width: 168px;
        margin: 1.3% 0 1.3% 0;
        width: initial
    }

    @media(min-width:0) and (max-width:992px) {
        .footer__logo {
            width: 100%;
            text-align: center;
            display: block;
            margin: 0 auto 32px
        }
    }
    `;
  }

}

customElements.define('ext-footer-bbva', FooterElement);