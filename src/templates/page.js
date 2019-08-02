import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../templates/layout';
import IntroBanner from '../components/indexPage/IntroBanner';
import Banner1 from '../components/indexPage/Banner1';

// TODO get rid of index.js and generate with template and gatsby-node

const Page = ({ data }) => {
  return (
    // <Layout> includes header banner and navigation
    <Layout data={data}>
      <IntroBanner />
      <Banner1 />
    </Layout>
  );
};

export default Page;

export const PAGE_QUERY = graphql`
  query PAGE_QUERY {
    contentfulWebPage(id: $ID) {
      id
      pageTitle
      pageHeader {
        id
        pageTitle
        isHomePage
        backgroundImage {
          id
          title
          description
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      mainContentOrder {
        id
        title
        textAlign
        text {
          text
        }
        backgroundImage {
          id
          description
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;
