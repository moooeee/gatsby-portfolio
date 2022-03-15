import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

  :root {
    --shadow-x: 3px;
    --shadow-y: 3px;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: var(--background-secondary);
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    transition: background .3s ease;
  }

  body.light {
    --background-primary: #EBF0FE;
    --background-secondary: #f8fafd;
    --color-primary: #0e30f9;
    --color-primary: #5468ff;
    --color-primary-2: #ebf0fe;
    --color-secondary: #000;
    --color-secondary-2: #2c2c2c;

    --post-text-primary: rgb(44, 44, 44);
    --post-thumbnail-bg: #e3e3e3;
  }

  body.dark {
    --background-primary: #222123;
    --background-secondary: #222123;
    --color-primary: #D0FFFB;
    --color-primary-2: #1A181E;
    --color-secondary: #fefefe;
    --color-secondary-2: #D0FFFB;

    --post-text-primary: rgb(238, 238, 238);
    --post-thumbnail-bg: #1A181E;
  }
`

export default GlobalStyles
