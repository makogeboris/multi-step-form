import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 

:root {
  /* Colors */
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
  --gray-500: hsl(231, 11%, 63%);
  --orange-300: hsl(23, 100%, 75%);
  --red-500: hsl(354, 84%, 57%);
  --red-450: hsl(353, 76%, 65%);
  --red-400: hsl(354, 91%, 74%);
  --purple-600: hsl(243, 100%, 62%);
  --purple-500: hsl(243, 100%, 67%);
  --purple-400: hsl(243, 100%, 77%);
  --purple-200: hsl(229, 24%, 87%);
  --blue-950: hsl(213, 96%, 18%);
  --blue-700: hsl(213, 73%, 31%);
  --blue-300: hsl(228, 100%, 84%);
  --blue-200: hsl(206, 94%, 87%);
  --blue-100: hsl(218, 100%, 97%);
  --blue-50: hsl(231, 100%, 99%);
  --shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);

  /* TYPOGRAPHY */

  /* font-family */
  @font-face {
    font-family: "Ubuntu";
    src: url("/fonts/Ubuntu-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("/fonts/Ubuntu-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("/fonts/Ubuntu-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* font-sizes */
  --fs-xl: 2rem;
  --fs-lg: 1.5rem;
  --fs-md: 1rem;
  --fs-sm: 0.875rem;
  --fs-xs: 0.75rem;

  /* font-weights */
  --fw-bold: 700;
  --fw-medium: 500;
  --fw-regular: 400;

  /* line-heights */
  --lh-tight: 1.2;
  --lh-base: 1.5;

  /* Spacing Scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 2.5rem;
  --space-2xl: 3.5rem;
}

/* RESET */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  box-sizing: border-box;
}

/* Remove default margin in favour of better control in authored CSS */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin-block-end: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core body defaults */
body {
  min-height: 100dvh;
  line-height: 1.5;
  font-family: "Ubuntu", sans-serif;
  background: var(--blue-100);
    position: relative;


    @media (min-width: 48rem) {
      display: grid;
      place-content: center;
    }
}

/* Remove default margins */
html,
body {
  margin: 0;
  padding: 0;
  border: 0;
}

* {
  margin: 0;
}

/* Set shorter line heights on headings and interactive elements */
h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4 {
  overflow-wrap: break-word;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Smooth scroll */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

button {
  cursor: pointer;
}

`;

export default GlobalStyles;
