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

  h1 {
    font-size: 50px;
    line-height: 1.2;
    @media(min-width: 1280px) {
      font-size: 74px;
    }
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
