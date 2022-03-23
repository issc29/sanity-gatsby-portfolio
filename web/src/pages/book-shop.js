import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import bgImage from '../images/book_bg.png'
import { PortableText } from "@portabletext/react";

export const query = graphql`
query  {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      booksText {
        children {
          text
          marks
          _key
          _type
        }
        _type
        _key
      }
    }	
  }
`;

const BookShopPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout bgImage={bgImage}>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout bgImage={bgImage}>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <div className="flex-col">
          <div className="mx-10 bg-white/75">
            <h2 className="text-center">Hakham Faur's Books</h2>
            <PortableText value={data.site.booksText}/>
          </div>
        </div>

      </Container>
    </Layout>
  );
};

export default BookShopPage;
