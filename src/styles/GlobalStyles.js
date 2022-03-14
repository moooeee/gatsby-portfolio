import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

  :root {
    --shadow-x: 3px;
    --shadow-y: 3px;

    /* --background-primary: #EBF0FE;
    --background-secondary: #f8fafd;
    --color-primary: #0e30f9;
    --color-primary: #5468ff;
    --color-primary-2: #ebf0fe;
    --color-secondary: #000;
    --color-secondary-2: #2c2c2c; */
    
    /* --background-primary: #222123;
    --background-secondary: #222123;
    --color-primary: #0e30f9;
    --color-primary: #D0FFFB;
    --color-primary-2: #1A181E;
    --color-secondary: #fefefe;
    --color-secondary-2: #D0FFFB; */
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
    font-family: 'Poppins';
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
    /* --color-primary: #0e30f9; */
    --color-primary: #D0FFFB;
    --color-primary-2: #1A181E;
    --color-secondary: #fefefe;
    --color-secondary-2: #D0FFFB;

    --post-text-primary: rgb(238, 238, 238);
    --post-thumbnail-bg: #1A181E;
  }
`

export default GlobalStyles

/**
    /* --background-primary: #FFE57E; */
/* --background-secondary: #111; */
/* --background-secondary: #201A1A; <<< */
/* --background-secondary-2: #000; */
/* --color-primary: #201A1A; */
/* --color-primary-2: #1B1313; <<< */
/* --color-primary-2: #0E0C0C; */
/* --color-secondary: #FFE57E; */
/* --color-secondary-2: #fff2b1; */

/* --footer-bg: #0C0809;
    --chips-bg: #0E0C0C;
    --body-bg: #111; */

/* --background-primary: #F2F1FD;
    --background-secondary: #fff;
    --color-primary: #817DBE;
    --color-primary-2: #F2F1FD;
    --color-secondary: #817DBE;
    --color-secondary-2: #817DBE; */

/* --background-primary: #faf1e0;
    --background-secondary: #fff;
    --color-primary: #070707;
    --color-primary-2: #070707;
    --color-secondary: #070707;
    --color-secondary-2: #070707; */

/* --background-primary: #32312F;
    --background-secondary: #f6f5f4;
    --color-primary: #fdfdfd;
    --color-primary-2: #fdfdfd;
    --color-special: #0DC5A0;
    --color-secondary: #32312F;
    --color-secondary-2: #32312F; */
