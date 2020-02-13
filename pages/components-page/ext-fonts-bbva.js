import {
  css
} from 'lit-element';

export const fontBbvaCss = css `
            @font-face {
                font-family: 'BentonSansBBVA-Bold';
                src: url("../../resources/fonts/BentonSansBBVA-Bold.eot");
                src: url("../../resources/fonts/BentonSansBBVA-Bold.eot?#iefix") format("embedded-opentype"), url("../../resources/fonts/BentonSansBBVA-Bold.woff2") format("woff2"), url("../../resources/fonts/BentonSansBBVA-Bold.woff") format("woff"), url("../../resources/fonts/BentonSansBBVA-Bold.ttf") format("truetype"), url("../../resources/fonts/BentonSansBBVA-Bold.svg#svgFontName") format("svg");
                font-display: swap
            }

            @font-face {
                font-family: 'BentonSansBBVA-Book';
                src: url("../../resources/fonts/BentonSansBBVA-Book.eot");
                src: url("../../resources/fonts/BentonSansBBVA-Book.eot?#iefix") format("embedded-opentype"), url("../../resources/fonts/BentonSansBBVA-Book.woff2") format("woff2"), url("../../resources/fonts/BentonSansBBVA-Book.woff") format("woff"), url("../../resources/fonts/BentonSansBBVA-Book.ttf") format("truetype"), url("../../resources/fonts/BentonSansBBVA-Book.svg#svgFontName") format("svg");
                font-display: swap
            }

            @font-face {
                font-family: 'BentonSansBBVA-BookItalic';
                src: url("../../resources/fonts/BentonSansBBVA-BookItalic.eot");
                src: url("../../resources/fonts/BentonSansBBVA-BookItalic.eot?#iefix") format("embedded-opentype"), url("../../resources/fonts/BentonSansBBVA-BookItalic.woff2") format("woff2"), url("../../resources/fonts/BentonSansBBVA-BookItalic.woff") format("woff"), url("../../resources/fonts/BentonSansBBVA-BookItalic.ttf") format("truetype"), url("../../resources/fonts/BentonSansBBVA-BookItalic.svg#svgFontName") format("svg");
                font-display: swap
            }

            @font-face {
                font-family: 'BentonSansBBVA-Light';
                src: url("../../resources/fonts/BentonSansBBVA-Light.eot");
                src: url("../../resources/fonts/BentonSansBBVA-Light.eot?#iefix") format("embedded-opentype"), url("../../resources/fonts/BentonSansBBVA-Light.woff2") format("woff2"), url("../../resources/fonts/BentonSansBBVA-Light.woff") format("woff"), url("../../resources/fonts/BentonSansBBVA-Light.ttf") format("truetype"), url("../../resources/fonts/BentonSansBBVA-Light.svg#svgFontName") format("svg");
                font-display: swap
            }

            @font-face {
                font-family: 'BentonSansBBVA-Medium';
                src: url("../../resources/fonts/BentonSansBBVA-Medium.eot");
                src: url("../../resources/fonts/BentonSansBBVA-Medium.eot?#iefix") format("embedded-opentype"), url("../../resources/fonts/BentonSansBBVA-Medium.woff2") format("woff2"), url("../../resources/fonts/BentonSansBBVA-Medium.woff") format("woff"), url("../../resources/fonts/BentonSansBBVA-Medium.ttf") format("truetype"), url("../../resources/fonts/BentonSansBBVA-Medium.svg#svgFontName") format("svg");
                font-display: swap
            }

            @font-face {
                font-family: 'BentonSansBBVA-MediumItalic';
                src: url("../../resources/fonts/BentonSansBBVA-MediumItalic.eot");
                src: url("../../resources/fonts/BentonSansBBVA-MediumItalic.eot?#iefix") format("embedded-opentype"), url("../../resources/fonts/BentonSansBBVA-MediumItalic.woff2") format("woff2"), url("../../resources/fonts/BentonSansBBVA-MediumItalic.woff") format("woff"), url("../../resources/fonts/BentonSansBBVA-MediumItalic.ttf") format("truetype"), url("../../resources/fonts/BentonSansBBVA-MediumItalic.svg#svgFontName") format("svg");
                font-display: swap
            }

            @font-face {
                font-family: 'TiemposText-Regular';
                src: url("../../resources/fonts/TiemposText-Regular.eot");
                src: url("../../resources/fonts/TiemposText-Regular.eot?#iefix") format("embedded-opentype"), url("../../resources/fonts/TiemposText-Regular.woff2") format("woff2"), url("../../resources/fonts/TiemposText-Regular.woff") format("woff"), url("../../resources/fonts/TiemposText-Regular.ttf") format("truetype");
                font-display: swap
            }

            @font-face {
                font-family: 'TiemposText-RegularItalic';
                src: url("../../resources/fonts/TiemposText-RegularItalic.eot");
                src: url("../../resources/fonts/TiemposText-RegularItalic.eot?#iefix") format("embedded-opentype"), url("./fonts/TiemposText-RegularItalic.woff2") format("woff2"), url("./fonts/TiemposText-RegularItalic.woff") format("woff"), url("./fonts/TiemposText-RegularItalic.ttf") format("truetype");
                font-display: swap
            }

            /*color palette BBVA*/
            :host {
                --bbva-core-blue: #004481;
                --bbva-core-blue-dark: #043263;
                --bbva-core-blue-light: #1464A5;
                --bbva-medium-blue: #1973B8;
                --bbva-medium-blue-light: #49A5E6;
                --bbva-aqua: #2DCCCD;
                --bbva-aqua-dark: #028484;
                --bbva-aqua-medium: #02A5A5;
                --bbva-aqua-light: #5AC4C4;
                --bbva-aqua-white: #EAF9FA;
                --bbva-dark-blue: #237ABA;
                --bbva-sky-blue: #5BBEFF;
                --bbva-core-dark-blue: #1D73B2;
                --bbva-navy-blue: #072146;
                --bbva-aqua-white: #EAF9FA;
                --bbva-green-dark: #388D4F;
                --bbva-green-light: #48AE64;
                --bbva-red: #DA3851;
                --bbva-sand-dark: #8E7022;
				--bbva-yellow: #F8CD51;
                --bbva-black-600: #121212;
                --bbva-black-500: #666666;
                --bbva-black-400: #BDBDBD;
                --bbva-black-300: #D3D3D3;
                --bbva-black-200: #E9E9E9;
                --bbva-black-100: #F4F4F4;
                --bbva-white: #FFFFFF;
                --bbva-Book: "BentonSansBBVA-Book", Helvetica, Arial, sans-serif;
                --bbva-Medium: "BentonSansBBVA-Medium";
                --bbva-Bold: "BentonSansBBVA-Bold";
                --bbva--Medium-Italic: "BentonSansBBVA-MediumItalic";
            }
            `;
