import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../templates/layout';
import IntroBanner from '../components/indexPage/IntroBanner';
import TextBanner from '../components/indexPage/TextBanner';

const Page = props => {
  const pageData = props.data.contentfulWebPage;
  return (
    // <Layout> includes header banner and navigation
    <Layout pageData={pageData}>
      {pageData.slug === 'index' && <IntroBanner />}

      {pageData.mainContentOrder.map(section => {
        if (section.__typename === 'ContentfulTextBanner') {
          return <TextBanner key={section.id} bannerData={section} />;
        } else if (section.__typename === 'ContentfulLargeParagraph') {
          return (
            <div>
              <h1>This is a large paragraph section!</h1>
            </div>
          );
        }
      })}
    </Layout>
  );
};

export default Page;

export const PAGE_QUERY = graphql`
  query PAGE_QUERY_BY_ID($id: String!) {
    contentfulWebPage(id: { eq: $id }) {
      id
      slug
      pageTitle
      pageHeader {
        id
        pageTitle
        isHomePage
        headline
        backgroundImage {
          id
          title
          description
          fluid(quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      mainContentOrder {
        ... on ContentfulLargeParagraph {
          id
          title
          childContentfulLargeParagraphContentRichTextNode {
            content
          }
        }
        ... on ContentfulTextBanner {
          id
          title
          textAlign
          text {
            text
          }
          backgroundImage {
            id
            title
            description
            fluid(quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
