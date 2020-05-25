import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { css } from "@emotion/core";

export const query = graphql`
  query($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const RoomTemplate = ({data: { allDatoCmsHabitacion: { nodes } } }) => {
  const { titulo, contenido, imagen } = nodes[0];
  return (
      <>
        <Layout>
            <main
                css={css`
                    max-width:1200px;
                    margin:0 auto;
                    width:95%;
                `}
            >
                <h1
                    css={css`
                        margin-top:4rem;
                    `}
                >{titulo}</h1>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid} />
            </main>
        </Layout>
    </>
  );
}

export default RoomTemplate;
