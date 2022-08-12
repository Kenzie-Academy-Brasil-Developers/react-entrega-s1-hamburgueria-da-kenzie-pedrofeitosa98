import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    //Primary Palette
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    //Gray Scale Palette
    --gray-100: #333333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-0: #F5F5F5;
    //Feedback Palette
    --negative: #E60000;
    --warning: #FFCD07;
    --success: #168821;
    --information: #155BCB;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    background-color: white;
    color: var(--gray-50);
    font-size: 0.875rem;
  }

  ol,
  ul {
    list-style: none;
  }

  body,
  html {
    width: 100%;
    height: 100vh;
  }

  main {
    margin: 0 auto;
    max-width: 86rem;
    width: 90%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  @media (max-width: 700px) {
   main {
    flex-direction: column;
    align-items: center;
   } 
  }

  body,
  input,
  button,
  textarea {
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  .heading1, .heading2, .heading3, .heading4 {
    font-weight: 700;
    color: var(--gray-100);
  }
  
  .heading1 {font-size: 1.625rem;}
  .heading2 {font-size: 1.375rem;}
  .heading3 {font-size: 1.125rem;}
  .heading4 {font-size: 0.875rem;}

  .headline {
    font-size: 1rem;
    color: var(--gray-50);
  }

  .caption {font-size: 0.75rem;}

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.25rem;
    gap: 0.625rem;
    border-radius: 8px;
    color: var(--gray-0);
    transition: 0.3s;
    font-size: 1rem;
    font-weight: 600;
  }

  .button:hover {
    transform: scale(1.05);
  }

  .button.green {
    background-color: var(--color-primary);
  }

  .button.green:hover{
    background-color: var(--color-primary-50);
  }

  .button.gray {
    background-color: var(--gray-20);
    color: var(--gray-100);
  }

  .button.gray:hover {
    background-color: var(--gray-100);
    color: var(--gray-20);
  }

  .button.big {
    height: 3.75rem;
    width: 100%;
  }

  .button.medium {
    height: 2.5rem;
  }

  .inputDiv {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0 0.625rem 0 1.25rem;
    background-color: white;
    border: 2px solid var(--gray-20);
    border-radius: 8px;
    transition: 0.3s;
    height: 3.75rem;
    width: 100%;
  }

  input {
    font-size: 1rem;
    color: var(--gray-50);
    padding-right: 0.625rem;
  }

 .inputDiv:focus-within {
    border: 2px solid var(--gray-100);
  }

  ::placeholder {
    font-size: 1rem;
    color: var(--gray-20);
    transition: 0.3s;
  }

  input:focus::placeholder {
    opacity: 0;
  }
`
export default GlobalStyle