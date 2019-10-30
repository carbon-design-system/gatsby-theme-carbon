import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Column, Row } from '../Grid';
import ArticleCard from '../ArticleCard';

const MediumPosts = ({ color, posts }) => {
  const data = useStaticQuery(graphql`
    query {
      allMediumFeed(sort: { fields: date, order: DESC }, limit: 10) {
        edges {
          node {
            author
            date(formatString: "MMMM Do, YYYY")
            slug
            thumbnail
            title
            link
          }
        }
      }
    }
  `);

  const allPosts = data.allMediumFeed.edges.map(({ node }) => node);

  const defaultProps = {
    defaultPosts: 3,
  };

  const latestPosts = allPosts.slice(0, posts || defaultProps.defaultPosts);

  return (
    <>
      <Row>
        {latestPosts.map(latestPost => (
          <Column
            colSm={4}
            colMd={4}
            colLg={4}
            noGutterMdLeft
            className="medium-posts-article-gutter medium-posts-type-size"
          >
            <ArticleCard
              title={latestPost.title}
              author={latestPost.author}
              href={latestPost.link}
              color={color}
              date={latestPost.date}
            >
              <img
                alt={latestPost.title}
                src={latestPost.thumbnail}
                className="medium-image-container"
              />
            </ArticleCard>
          </Column>
        ))}
      </Row>
    </>
  );
};

MediumPosts.propTypes = {
  color: PropTypes.string,
  posts: PropTypes.number,
};

export default MediumPosts;
