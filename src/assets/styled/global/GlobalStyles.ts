import { createGlobalStyle } from 'styled-components'

import NotoSansEOT from '../../fonts/noto-sans.eot'
import NotoSansSVG from '../../fonts/noto-sans.svg'
import NotoSansTTF from '../../fonts/noto-sans.ttf'
import NotoSansWOFF from '../../fonts/noto-sans.woff'
import NotoSansWOFF2 from '../../fonts/noto-sans.woff2'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Noto-Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${NotoSansEOT}); /* IE9 Compat Modes */
    src: local(''),
        url(${NotoSansEOT}#iefix}) format('embedded-opentype'), /* IE6-IE8 */
        url(${NotoSansWOFF2}) format('woff2'), /* Super Modern Browsers */
        url(${NotoSansWOFF}) format('woff'), /* Modern Browsers */
        url(${NotoSansTTF}) format('truetype'), /* Safari, Android, iOS */
        url(${NotoSansSVG}#NotoSans) format('svg'); /* Legacy iOS */
  }

  html, body, #root {
    height: 100%;
  }
  
  #root {
    display: flex;
    overflow-x: hidden;
  }

  body {
    font-family: 'Noto-Sans';
    font-size: 14px;
    color: #000;
  }
`
