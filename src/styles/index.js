import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue Regular';
    src: url('/fonts/HelveticaNeueLTStd-Roman.otf') format('opentype');
  }
  @font-face {
    font-family: 'Helvetica Neue Bold';
    src: url('/fonts/HelveticaNeueLTStd-Bd.otf') format('opentype');
  }
  @font-face {
    font-family: 'Helvetica Neue Light';
    src: url('/fonts/HelveticaNeueLTStd-Lt.otf') format('opentype');
  }
  @font-face {
    font-family: 'Helvetica Neue Medium';
    src: url('/fonts/HelveticaNeueLTStd-Md.otf') format('opentype');
  }

  html,
  body {
    text-rendering: optimizeLegibility;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0 auto;
    min-width: 320px;
    overflow-x: hidden;
    font-family: 'Helvetica Neue Regular';
  }

  * {
    box-sizing: border-box;
  }
  *:before, *:after {
    box-sizing: inherit;
  }

  ul, ol, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  textarea {
    resize: none;
  }

  h1, h2, h3, h4, h5, h6,
  p, pre, span, strong {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica Neue Bold';
  }

  button {
    padding: 0;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
