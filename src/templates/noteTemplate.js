import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default function noteTemplate({ data }) {
  const { mdx } = data;
  return (
    <article>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <Link to="/">Go Home</Link>
    </article>
  );
}

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
    }
  }
`;
