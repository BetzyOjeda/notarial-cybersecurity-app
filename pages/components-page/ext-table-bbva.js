import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@cells-components/coronita-icons';
import { fontBbvaCss } from '../components-page/ext-fonts-bbva';

class TableBbva extends CellsPage {
    static get is() {
        return 'ext-table-bbva';
    }

    constructor() {
        super();
        console.log(this.shadowRoot);
    }

    static get properties() {
        return {
            /**
             * Array property to set all title header on table cells
             */
            headers: {
                type: Array,
                value: function () {
                    return [];
                },
                attribute: 'headers'
            },
            /**
             * Array of object to display information on table.
             * Aceptable Objects Configurations
             *
             * Action button with custom event
             * {
             *   type:"button",
             *   icon:"coronita:trash",
             *   event: "delete-navigation",
             *   id:"3"
             * }
             * Simple text on cell
             * {
             *    type:"text",
             *    value:"ADMINISTRADOR M"
             *  },
             */
            rows: {
                type: Array,
                value: function () {
                    return [];
                },
                observer: '_hasRows',
                attribute: 'rows'
            },
            /**
             * Property that show if has rows.
             */
            hasRows: {
                type: Boolean,
                value: false,
                attribute: 'has-rows'
            },
            /**
             * Property to set a path of img to display when hasRows is fals
             */
            noDataSrc: {
                type: String,
                attribute: 'no-data-src'
            },
            /**
             * Property to set text to display when hasRows is false
             */
            noDataText: {
                type: String,
                attribute: 'no-data-text'
            }
        };
    }

    _setRowspan({ rowspan = 1 }) {
        return rowspan > 1 ? rowspan : 1;
    }
    /**
     * Method to validate type of element to show on html
     * @param {String} type
     * @param {String} value
     */
    _isType(type, value) {
        var isIcon = (type === value);
        return isIcon;
    }
    /**
     * This method is fired on button type element click and get the event name that is set on configuration property
     * and send id parameter of element on array.
     * @event custom-event
     * @param {js_event} e
     */
    _handleEvent(e) {
        if (!e.model.__data.row.disabled) {
            this.dispatchEvent(new CustomEvent(e.model.__data.row.event, { detail: { 'id': e.model.__data.row.id } }));
            this.dispatchEvent(new CustomEvent(e.model.__data.row.event + '-data', { detail: { 'id': e.model.parentModel.__data.item } }));
        }
    }
    /**
     * Method to validate if exista data on rows property
     */
    _hasRows() {
        this.hasRows = (this.rows.length > 0 && this.rows !== undefined && this.rows !== null) ? true : false;
    }

    render() {
        return html`
      <div class="mtkd_ced--table-container">
      ${this.hasRows ? html`
      <table class="table-elem" cellspacing="0">
          <thead>
            <tr>
            ${this.headers.map(item => html`<th class="${item.class}">${item.text}</th>`)}
            </tr>
          </thead>
          <tbody>
          ${this.rows.map(row => html`
              <tr class="row-body">
                ${row.values.map(r => html`
                    ${this._isType(r.type, 'text')
                ? html`<td class="${r.class}" rowspan="${this._setRowspan(r)}"><label>${r.value}</label></td>`
                : html``}
                    ${this._isType(r.type, 'button')
                ? html`<td class="center-text" rowspan="${this._setRowspan(r)}">
                            <cells-st-button class="composed link"  on-click="_handleEvent" event="${r.event}">
                            <button disabled="${r.disabled}">
                                <span class="btn-contents">
                                <iron-icon class="btn-icon" icon="${r.icon}"></iron-icon>
                                </span>
                            </button>
                            </cells-st-button>
                        </td>`
                : html``}
                `)}
              </tr>
            `)}
          </tbody>
        </table>`
                : html`<img class ="no-data-img" src="${this.noDataSrc}">
      <span class="no-data-text">${this.noDataText}</span>`}
    </div>`;
    }

    static get styles() {
        return [fontBbvaCss, css`
        
:host {
    display: block;
    box-sizing: border-box;
    font-family: var(--cells-fontDefault, sans-serif);
    @apply --mtkd_ced--table; }
  
  :host([hidden]), [hidden] {
    display: none !important; }
  
  *, *:before, *:after {
    font: inherit;
    box-sizing: inherit; }
  
  thead {
    background-color: var(--bbva-white);
    font-weight: bold;
    @apply (--mtkd_ced--table-thead); }
  
  tbody tr:nth-child(even) {
    background-color: var(--mtkd_ced--table-row-even-bg, #EEF8FE);
    @apply (--mtkd_ced--table-row-even); }
  
  tbody td {
    border-bottom: 2px solid var(--mtkd_ced--table-tbody-td-border-bottom-color);
    padding-left: 5px;
    @apply (--mtkd_ced--table-tbody-td); }
  
  .table-elem {
    width: 100%;
    @apply (--mtkd_ced--table-elem); }
  
  .center-text {
    text-align: center;
    @apply (--mtkd_ced--table-center-text); }
  
  .left-text {
    text-align: left;
    @apply (--mtkd_ced--table-left-text); }
  
  .right-text {
    text-align: right;
    @apply (--mtkd_ced--table-right-text); }
  
  .no-data-img {
    width: 11rem;
    display: block;
    margin: 3rem auto;
    @apply --mtkd_ced--table-no-data-img; }
  
  .no-data-text {
    width: 100%;
    display: block;
    text-align: center;
    @apply --mtkd_ced--table-no-data-text; }
  
  .row-body {
    @apply --mtkd_ced--table-row-body; }
    .row-body label {
      @apply --mtkd_ced--table-label; }
    .row-body .error {
      color: var(--cells-icon-message-icon-color-error, #f79698);
      @apply --mtkd_ced--table-label-error; }
    .row-body .success {
      color: var(--cells-icon-message-icon-color-success, #48ae64);
      @apply --mtkd_ced--table-label-success; }
    .row-body .warning {
      color: var(--cells-icon-message-background-color-warning, #fde7d8);
      @apply --mtkd_ced--table-label-warning; }
  
  .btn-icon {
    @apply --mtkd_ced--table-btn-icon; }
    `];
    }
}

window.customElements.define('ext-table-bbva', TableBbva);
