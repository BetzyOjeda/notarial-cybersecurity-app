import { css } from 'lit-element';

/**
 * ## Features
 *
 * - Based in flexbox.
 * - Every column has half of the gutter width (32px) as lateral margins (16px).
 * - The gutter width can be customized using the Custom CSS Property `--cells-grid-template-gutter-width`.
 * - The gutter width can be different for each breakpoint (media query).
 * - No need to use row containers.
 *
 * ## Default settings
 *
 * | Class prefix   | Media Query                    | Columns | Gutter width | Max width |
 * | :------------- | :----------------------------- | ------: | -----------: | --------: |
 * | `.cgt-col-xs-` | max-width: 37.4375em (< 600px) |       4 |         32px |         - |
 * | `.cgt-col-sm-` | min-width: 37.5em (>= 600px)   |       8 |         32px |         - |
 * | `.cgt-col-md-` | min-width: 62em (>= 992px)     |      12 |         32px |     960px |
 * | `.cgt-col-lg-` | min-width: 75em (>= 1200px)    |      12 |         32px |    1176px |
 *
 * Once the component is imported, you can use cells-grid-template classes inside your component:
 *
 *   <div class="cgt">
 *     <div class="cgt-col-xs-2">…</div>
 *     <div class="cgt-col-md-1">…</div>
 *   </div>
 *
 * __To ensure the grid to work in Safari 9.X, you need to initialize the gutter width:__
 *
 *   <style include="cells-grid-template-styles">
 *     :host {
 *       --cells-grid-template-gutter-width: 32px;
 *     }
 *   </style>
 *
 * __Internet Explorer did not support css variables, so the gutter is set by default to 32px and can not be changed__
 *
 * ## Classes
 *
 * - Grid container: `.cgt`
 * - Grid columns: `.cgt-col-<device>-<number>` (Eg.: `.cgt-col-xs-1`)
 *
 * ### Columnn margins (pull and push)
 *
 * Column grids can have left and/or right margin equal to a number of columns. This is useful to place an element in the 3rd column, for example, or to move an element to the next row.
 * The syntax is as follows, where the `<number>` refers to the number of columns:
 *
 * `.cgt-col-<device>-ml/mr-<number>`
 *
 * Examples:
 *
 * - `.cgt-col-xs-ml-2`
 * - `.cgt-col-lg-mr-1`
 *
 * To __reset margins__ to the default values use 0 as number:
 *
 * - `.cgt-col-xs-ml-0`
 * - `.cgt-col-xs-mr-0`
 * - `.cgt-col-xs-m-0` (left and right margin)
 *
 * // import cells-grid-template.scss after the vars and breakpoints map definition
 * import { gridTempleteCss } from 'grid-templete';
 *
 */

export const gridTempleteCss = css`
.cgt {
    --cells-grid-template-gutter-width: 32px;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
            flex-direction: row;
    flex-wrap: wrap;
    margin: var(--cells-grid-template-margin, auto);
    @apply --cells-grid-template-cgt; }
    @media screen and (min-width: 62em) {
      .cgt {
        max-width: 960px; } }
    @media screen and (min-width: 75em) {
      .cgt {
        max-width: 1176px; } }
  
  [class*="cgt-col"] {
    display: block;
    width: calc(100% - var(--cells-grid-template-gutter-width,32px));
    margin: 0 calc(var(--cells-grid-template-gutter-width,32px) / 2);
    box-sizing: border-box; }
  
  @media screen and (max-width: 37.4375em) {
    .cgt-col-xs-1 {
      width: calc((100% / 4) * 1 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-xs-ml-1 {
      margin-left: calc((100% / 4) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-xs-mr-1 {
      margin-right: calc((100% / 4) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-xs-2 {
      width: calc((100% / 4) * 2 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-xs-ml-2 {
      margin-left: calc((100% / 4) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-xs-mr-2 {
      margin-right: calc((100% / 4) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-xs-3 {
      width: calc((100% / 4) * 3 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-xs-ml-3 {
      margin-left: calc((100% / 4) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-xs-mr-3 {
      margin-right: calc((100% / 4) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-xs-4 {
      width: calc((100% / 4) * 4 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-xs-ml-4 {
      margin-left: calc((100% / 4) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-xs-mr-4 {
      margin-right: calc((100% / 4) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-xs-ml-0 {
      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-xs-mr-0 {
      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-xs-m-0 {
      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2);
      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); } }
  
  @media screen and (min-width: 37.5em) {
    .cgt-col-sm-1 {
      width: calc((100% / 8) * 1 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-sm-ml-1 {
      margin-left: calc((100% / 8) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-mr-1 {
      margin-right: calc((100% / 8) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-2 {
      width: calc((100% / 8) * 2 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-sm-ml-2 {
      margin-left: calc((100% / 8) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-mr-2 {
      margin-right: calc((100% / 8) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-3 {
      width: calc((100% / 8) * 3 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-sm-ml-3 {
      margin-left: calc((100% / 8) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-mr-3 {
      margin-right: calc((100% / 8) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-4 {
      width: calc((100% / 8) * 4 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-sm-ml-4 {
      margin-left: calc((100% / 8) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-mr-4 {
      margin-right: calc((100% / 8) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-5 {
      width: calc((100% / 8) * 5 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-sm-ml-5 {
      margin-left: calc((100% / 8) * 5 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-mr-5 {
      margin-right: calc((100% / 8) * 5 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-6 {
      width: calc((100% / 8) * 6 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-sm-ml-6 {
      margin-left: calc((100% / 8) * 6 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-mr-6 {
      margin-right: calc((100% / 8) * 6 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-7 {
      width: calc((100% / 8) * 7 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-sm-ml-7 {
      margin-left: calc((100% / 8) * 7 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-mr-7 {
      margin-right: calc((100% / 8) * 7 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-8 {
      width: calc((100% / 8) * 8 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-sm-ml-8 {
      margin-left: calc((100% / 8) * 8 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-mr-8 {
      margin-right: calc((100% / 8) * 8 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-ml-0 {
      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-mr-0 {
      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-sm-m-0 {
      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2);
      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); } }
  
  @media screen and (min-width: 62em) {
    .cgt-col-md-1 {
      width: calc((100% / 12) * 1 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-md-ml-1 {
      margin-left: calc((100% / 12) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-1 {
      margin-right: calc((100% / 12) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-2 {
      width: calc((100% / 12) * 2 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-md-ml-2 {
      margin-left: calc((100% / 12) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-2 {
      margin-right: calc((100% / 12) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-3 {
      width: calc((100% / 12) * 3 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-md-ml-3 {
      margin-left: calc((100% / 12) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-3 {
      margin-right: calc((100% / 12) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-4 {
      width: calc((100% / 12) * 4 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-md-ml-4 {
      margin-left: calc((100% / 12) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-4 {
      margin-right: calc((100% / 12) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-5 {
      width: calc((100% / 12) * 5 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-md-ml-5 {
      margin-left: calc((100% / 12) * 5 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-5 {
      margin-right: calc((100% / 12) * 5 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-6 {
      width: calc((100% / 12) * 6 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-md-ml-6 {
      margin-left: calc((100% / 12) * 6 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-6 {
      margin-right: calc((100% / 12) * 6 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-7 {
      width: calc((100% / 12) * 7 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-md-ml-7 {
      margin-left: calc((100% / 12) * 7 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-7 {
      margin-right: calc((100% / 12) * 7 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-8 {
      width: calc((100% / 12) * 8 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-md-ml-8 {
      margin-left: calc((100% / 12) * 8 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-8 {
      margin-right: calc((100% / 12) * 8 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-9 {
      width: calc((100% / 12) * 9 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-md-ml-9 {
      margin-left: calc((100% / 12) * 9 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-9 {
      margin-right: calc((100% / 12) * 9 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-10 {
      width: calc((100% / 12) * 10 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-md-ml-10 {
      margin-left: calc((100% / 12) * 10 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-10 {
      margin-right: calc((100% / 12) * 10 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-11 {
      width: calc((100% / 12) * 11 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-md-ml-11 {
      margin-left: calc((100% / 12) * 11 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-11 {
      margin-right: calc((100% / 12) * 11 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-12 {
      width: calc((100% / 12) * 12 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-md-ml-12 {
      margin-left: calc((100% / 12) * 12 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-12 {
      margin-right: calc((100% / 12) * 12 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-ml-0 {
      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-mr-0 {
      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-md-m-0 {
      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2);
      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); } }
  
  @media screen and (min-width: 75em) {
    .cgt-col-lg-1 {
      width: calc((100% / 12) * 1 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-lg-ml-1 {
      margin-left: calc((100% / 12) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-1 {
      margin-right: calc((100% / 12) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-2 {
      width: calc((100% / 12) * 2 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-lg-ml-2 {
      margin-left: calc((100% / 12) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-2 {
      margin-right: calc((100% / 12) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-3 {
      width: calc((100% / 12) * 3 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-lg-ml-3 {
      margin-left: calc((100% / 12) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-3 {
      margin-right: calc((100% / 12) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-4 {
      width: calc((100% / 12) * 4 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-lg-ml-4 {
      margin-left: calc((100% / 12) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-4 {
      margin-right: calc((100% / 12) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-5 {
      width: calc((100% / 12) * 5 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-lg-ml-5 {
      margin-left: calc((100% / 12) * 5 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-5 {
      margin-right: calc((100% / 12) * 5 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-6 {
      width: calc((100% / 12) * 6 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-lg-ml-6 {
      margin-left: calc((100% / 12) * 6 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-6 {
      margin-right: calc((100% / 12) * 6 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-7 {
      width: calc((100% / 12) * 7 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-lg-ml-7 {
      margin-left: calc((100% / 12) * 7 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-7 {
      margin-right: calc((100% / 12) * 7 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-8 {
      width: calc((100% / 12) * 8 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-lg-ml-8 {
      margin-left: calc((100% / 12) * 8 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-8 {
      margin-right: calc((100% / 12) * 8 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-9 {
      width: calc((100% / 12) * 9 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-lg-ml-9 {
      margin-left: calc((100% / 12) * 9 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-9 {
      margin-right: calc((100% / 12) * 9 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-10 {
      width: calc((100% / 12) * 10 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-lg-ml-10 {
      margin-left: calc((100% / 12) * 10 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-10 {
      margin-right: calc((100% / 12) * 10 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-11 {
      width: calc((100% / 12) * 11 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-lg-ml-11 {
      margin-left: calc((100% / 12) * 11 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-11 {
      margin-right: calc((100% / 12) * 11 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-12 {
      width: calc((100% / 12) * 12 - var(--cells-grid-template-gutter-width,32px)); }
    .cgt-col-lg-ml-12 {
      margin-left: calc((100% / 12) * 12 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-12 {
      margin-right: calc((100% / 12) * 12 + var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-ml-0 {
      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-mr-0 {
      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); }
    .cgt-col-lg-m-0 {
      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2);
      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); } }
  
  .no-nested-margin {
    -webkit-box-flex: 1;
            flex-grow: 1;
    margin-left: 0;
    margin-right: 0; }
  
  .grid--debug {
    background-color: #FFDDDE; }
  
  .grid--debug [class*="cgt-col"] {
    background-color: #fff;
    margin-top: calc(var(--cells-grid-template-gutter-width,32px) / 2);
    margin-bottom: calc(var(--cells-grid-template-gutter-width,32px) / 2);
    text-align: center; }
    .grid--debug [class*="cgt-col"]:after {
      content: attr(class);
      font-family: Roboto Mono, monaco, monospace;
      font-size: 0.75rem; }
  
  .grid--overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    -webkit-box-align: stretch;
            align-items: stretch; }
    .grid--overlay [class*="cgt-col"] {
      background-color: rgba(192, 255, 252, 0.5); }
    .grid--overlay [class*="cgt-col-xs-"],
    .grid--overlay [class*="cgt-col-sm-"],
    .grid--overlay [class*="cgt-col-md-"],
    .grid--overlay [class*="cgt-col-lg-"] {
      display: none; }
    @media screen and (max-width: 37.4375em) {
      .grid--overlay [class*="cgt-col-xs-"] {
        display: block; } }
    @media screen and (min-width: 37.5em) {
      .grid--overlay [class*="cgt-col-sm-"] {
        display: block; } }
    @media screen and (min-width: 62em) {
      .grid--overlay [class*="cgt-col-md-"] {
        display: block; } }
    @media screen and (min-width: 75em) {
      .grid--overlay [class*="cgt-col-lg-"] {
        display: block; } }
  
  [class*="cgt-col-"] {
    margin-bottom: 2rem;
  }
  :host(.hidden) {
    display: none !important; }
    `;