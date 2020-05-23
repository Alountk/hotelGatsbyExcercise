import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const TextStart = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }

  p {
    line-height: 4rem;
    margin-top: 2rem;
  }
`

const ContentAbout = () => {
  const about = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "about" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  const { titulo, contenido, imagen } = about.allDatoCmsPagina.nodes[0];
  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>
      <TextStart>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} alt={titulo} />
      </TextStart>
    </>
  )
}

export default ContentAbout
