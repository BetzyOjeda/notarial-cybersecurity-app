import { LitElement, css, html} from 'lit-element';
import '../components-page/ext-action-label-bbva';

export class HeaderElement extends LitElement {
  static get properties() {
    return {
      /**
       * Property to set source of image logo
       */
      logo: {
        type: Object,
        value: {
          src: '',
          alt: ''
        }
      },
      /**
       * Array property to create menu items, object on array is like:
       * Example:
       *  {
       *    text:'PERFIL',
       *    event:'go-to-profile'
       *  }
       */
      menu: {
        type: Array
      },
      /**
       * @description Object to configure header session info like user name and logout link
       * @example {
                    name: 'Extranet',
                    icon: 'coronita:getout',
                    textLink: 'Salir'
                  }
       * @public
       * @type Object
       */
      session: {
        type: Object,
        value: {
          name: '',
          icon: '',
          textLink: '',
          hasavatar: {
            type: Boolean,
            value: true
          },
          avatar: {
            type: String,
            value: ''
          }
        }
      },
      /**
       * @description Determines wich link menu is active
       * @example 'PERFIL'
       * @type String
       * @public
       */
      active: {
        type: String
      },
      sticky: {
        type: String
      },
      show1: {
        type: String
      },
      hassession: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.logo = {
      src: '../resources/images/logo/LogoBBVA@2x.png',
      alt: 'image'
    };
    this.session = {
      name: 'Leticia Figueroa',
      hasicon: true,
      icon: 'coronita:getout',
      textLink: 'Salir',
      hasavatar: true,
      avatar: '180.jpeg'
    };
    this.sticky = '';
    this.menu = [ {
      text: '',
      event: ''
    } ];
  }

  render() {

    return html `
    <div id='header' class='${this.sticky}'>
        <header class='header__base wrapper'>
            <nav class='header__container background--navy'>
                <div class='header__main container'>
                    <div class='header__wrapper'>
                        <div class='header__logo'>
                            <div class='header__logo__link'>
                                <img src='${this.logo.src}' class='header__image header__logo__link'
                                    alt='${this.logo.alt}'>
                                <template is='dom-repeat' items='[[menu]]'>
                                    <label class$="link-item [[_getClass(item.text, active)]]" on-click="_handleClick" for='' >[[item.text]]</label>
                                 </template>
                            </div>
                        </div>
                    </div>
                    ${this.hassession ? html`
                    <nav class='header__actions'>
                        <ul class='header__actions__ulist'>
                            <li class='header__name__user'>
                                <div class='header__actions__item__link'>
                                  ${this.session.hasavatar ? html`<img src='resources/images/notary/${this.session.avatar}' alt='${this.session.avatar}' class='avatar'>` : html`<i class='bbva-icon bbva-icon__3_003_myprofile'></i>`}
                                  <span class='header__actions__item__link__text'>${this.session.name}</span>
                                </div>
                            </li>

                            <li class='header__exit'>
                                <div class='header__actions__out'>                                   
                                <ext-action-label-bbva on-action="clsesion" hasicon
                                    text="${this.session.textLink}" csstext="line"></ext-action-label-bbva>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    ` : html``}
                </div>
            </nav>
        </header>
    </div>
    `;

  }

  static get styles() {

    return css `

      .avatar {
            vertical-align: middle;
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }


        .sticky {
            position: fixed;
            top: 0;
            width: 100%
        }


        .header__base {
            position: relative;
            width: 100%;
            z-index: 10;
            height: auto;
            padding-top: 0;
            padding-bottom: 0;
            background: var(--bbva-navy-blue)
        }



        .sticky .avatar {
            width: 30px;
            height: 30px;
        }



        .sticky .header__main {
            -webkit-transition: max-height .16667s, min-height .16667s;
            transition: max-height .16667s, min-height .16667s;
            min-height: 48px;
            max-height: 48px
        }


        .sticky .header__base {
            background: var(--bbva-navy-blue);
                padding-bottom: 48px
            }



            .header__actions__out {
                height: 48px;
                font-family: 'BentonSansBBVA-Bold';
                font-size: 15px;
                align-items: center;
                display: inline-flex;
                color: var(--bbva-yellow);
                float: right;
            }



            .name__user {
                width: 100%;
                padding-right: 16px;
            }



            .header__actions__ulist {
                display: inline-flex;
                align-items: center;
                width: 100%;
        }



        .header__actions__item__link__text {
            font-family: 'BentonSansBBVA-Medium';
            font-size: 15px;
            color: var(--bbva-white);
            text-align: center;
            letter-spacing: 0;
            padding: 0 16px;
            text-transform: capitalize;
        }

        .header__container {
            position: relative;
            z-index: 2;
            padding: 0 7rem;
        }

        .sticky .header__container {
            position: fixed;
            top: 0;
            width: 100%
        }

        .sticky .header__container--noSticky {
            position: relative
        }

        .background--navy {
            background-color: var(--bbva-navy-blue)
        }

        .header__main {
            color: var(--bbva-navy-blue);
            min-height: 96px;
            overflow: hidden;
            display: flex;
        }

        .container .table .container {
            width: 100%
        }

        .header__logo__link {
            width: auto;
            display: table-cell;
            vertical-align: middle;
            text-align: left
        }

        .header__actions {
            display: inline-flex;
            align-items: center;
            font-weight: bold;
        }

        @media (max-width: 0) and (min-width: 300px) {
            .header__actions {
                float: right;
                padding-right: 0;
                width: 100%;
            }

            .header__name__user {
                width: 100%
            }

            .header__exit {
                width: 50%
            }

        }


        @media(min-width:0) and (max-width:599px) {
            .header__logo {
                width: 45.45455%;
                float: left;
                margin-left: 16px;
                margin-right: -100%
            }

            .header__name__user {
                width: 50%
            }

            .header__exit {
                width: 50%
            }

        }

        @media(min-width:0) and (max-width:991px) {
            .header__main {
                color: var(--bbva-navy-blue);
                height: 48px;
                min-height: 48px
            }

            .header__logo {
                color: var(--bbva-white);
                height: 48px;
                max-height: 48px;
                min-height: 48px
            }

        }


        @media(min-width:992px) {
            .sticky .header__logo {
                width: 24%;
            }
        }

        @media(min-width:600px) and (max-width:991px) {
            .header__logo {
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                width: 25%;
                float: left;
                margin-left: 0;
                margin-right: -100%;
                padding-left: 16px;
                padding-right: 16px;
                width: 73%;
            }

            .sticky .header__logo {
                padding-left: 16px;
                padding-right: 16px;
                width: 70%;
            }

            .header__actions {
                float: right;
                padding-right: 0;
                width: 100%;
            }

        }

        @media(min-width:1200px) {
          .header__actions {
            width: 100%;
            margin-left: 0px;
            margin-right: 0px;
            float: right;
            display: flex;
          }
        }

        @media(min-width:0) and (max-width:599px) {
            .header__logo__link {
                text-align: center
            }

            .header__logo {
                float: none
            }
        }

        @media only screen and (min-width : 1200px) {
            .header__image {
                display: inline;
                max-width: 100%;
            }

            .header__wrapper {
                width: 174%;
            }

            .header__name__user {
                width: 78%;
            }

        }

        @media(min-width:992px) and (max-width:1199px) {
            .header__logo {
                width: 50%;
                float: left;
                margin-left: 16px;
                margin-right: -100%
            }

        }

        @media(min-width:0) and (max-width:992px) {
            .avatar {
                width: 30px;
                height: 30px;
            }

            .mainNavigation__base {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background: var(--bbva-navy-blue);
                z-index: 1001;
                display: none;
                -webkit-box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.2);
                box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.2)
            }

            .header__wrapper {
                width: 100%;
            }

           .header__image {
                min-height: 26px;
                width: auto;
            }

        }

        .header__actions__item__link {
            float: right;
        }

        @media(min-width:1200px) {
            .header__logo {
                width: 48%;
                float: left;
                margin-left: 0px;
                margin-right: -100%;
                margin-top: .7rem;
            }
        }

    `;

  }

}

customElements.define('ext-header-bbva', HeaderElement);