import React from 'react';
import { Link } from 'gatsby';
import Layout from '../Layout';
import styles, {
  container,
  fourOhFour,
  paragraph,
  heading,
  link,
  list,
} from './FourOhFour.module.scss';

console.log(styles);
const whoops = ({ links }) => {
  const getLinks = () => (
    <>
      <br />
      Maybe some of these most visited links will help you?
      <ul className={list}>
        {links.map(({ href, text }, i) => (
          <li key={i}>
            <Link className={link} to={href}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <Layout homepage>
      <div className={container}>
        <span className={fourOhFour}>404</span>
        <h2 className={heading}>Something's gone wrong...</h2>
        <p className={paragraph}>
          Sorry, we can't find the page you are looking for.
          {links && getLinks()}
        </p>
      </div>
    </Layout>
  );
};

export default whoops;
