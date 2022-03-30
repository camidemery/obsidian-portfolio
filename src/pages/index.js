import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const IndexPage = ({ data }) => {
  const Notes = data.allMdx.nodes.map((node) => (
    <article>
      <Link to={`/notes/${node.slug}`}>
        <h1>{node.frontmatter.title}</h1>
      </Link>
      <MDXRenderer>{node.body}</MDXRenderer>
    </article>
  ));
  return <section>{Notes}</section>;
};

// TODO: Add in other frontmatter data
export const query = graphql`
  query {
    allMdx {
      nodes {
        slug
        frontmatter {
          title
        }
        body
      }
    }
  }
`;

export default IndexPage;
