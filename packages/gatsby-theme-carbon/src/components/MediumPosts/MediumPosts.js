import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Column, Row } from '../Grid';
import ArticleCard from '../ArticleCard';
import { image, cardContainer } from './MediumPosts.module.scss';

const MediumPosts = ({ postLimit = 3, cardProps, color = "white", ...rest }) => {
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

  return (
    <Row {...rest}>
      {allPosts.slice(0, postLimit).map((latestPost, i) => (
        <Column
          colSm={4}
          colMd={4}
          colLg={4}
          noGutterMdLeft
          key={i}
          className={cardContainer}>
          <ArticleCard
            title={latestPost.title}
            author={latestPost.author}
            href={latestPost.link}
            date={latestPost.date}
            color={color}
            {...cardProps}>
            <img
              alt={latestPost.title}
              src={latestPost.thumbnail}
              className={image}
            />
          </ArticleCard>
        </Column>
      ))}
    </Row>
  );
};

MediumPosts.propTypes = {
  cardProps: PropTypes.object,
  postLimit: PropTypes.number,
  color: PropType.string,
};

export default MediumPosts;
