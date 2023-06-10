import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}


html {
font-size:62.5%;
scroll-behavior: smooth;
  /* 1rem = 10px */
  overflow-x: hidden;
  
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
.cols{
width:100%;
columns: 2;
column-gap:25px;
break-inside: avoid;
margin:1rem auto;
}
h1,
h2,
h3,
h4 {
   font-family: Georgia, "Work Sans", sans-serif;

}

h1 {
  font-size: 5rem;
  word-break:all;
  font-weight: 900;
  font-family: Georgia;
}

 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 3rem;
   font-weight: 600;
   white-space: normal;
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p, button {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: ${({theme})=>theme.colors.box_bg};
      font-weight:900;
    }

   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
    border-radius:1.2rem;
   box-shadow: ${({ theme }) => theme.colors.shadow};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }
.h5{
    font-size: 1.5rem;
  }
  .h2{
    font-size: 2rem;
  }
  .cols > *{
    align-items:center;
    break-inside: avoid;
    max-width:100%;
  }
@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
.cols{
    width:calc(100% - 60px);
    columns:3;
  }
  .cols .cols-title{
    margin:0rem auto;
    font-size:2.5rem;
  }

  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    }
   .cols{
    width:calc(100% - 40px);
    margin:0.5rem auto;
    columns:2;
    
  }

    }
    @media (max-width: ${({ theme }) => theme.media.small}) {
    .cols{
    width:calc(100% - 30px);
    columns:1;
  }
    }
`;
