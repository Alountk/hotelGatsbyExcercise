import React from "react";
import { Helmet } from "react-helmet";
import { Global, css } from '@emotion/core'
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
        <Global 
            styles={css`
                html {
                    font-size: 62.5%;
                }
                body {
                    font-size: 16px;
                    font-size: 1.8rem;
                    line-height: 1.5;
                    font-family: 'PT Sans', sans-serif;
                }
                h1,h2,h3 {
                    margin:0;
                    line-height:1.5;
                }
                h1,h2{
                    font-family: 'Roboto', sans-serif;
                }
                h3{
                    font-family: 'PT Sans', sans-serif;
                }
                ul{
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
            `}
        />
      <Helmet>
        <title>Hotel Gatsby</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      {children}
    </>
  )
}
export default Layout
