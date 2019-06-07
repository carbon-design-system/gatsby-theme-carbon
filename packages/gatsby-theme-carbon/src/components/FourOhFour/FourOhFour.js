import React from 'react';
import { Link } from 'gatsby';
import Layout from '../Layout';
import {
  container,
  fourOhFour,
  paragraph,
  heading,
  link,
  list,
} from './FourOhFour.module.scss';

const FourOhFour = ({ links }) => (
  <Layout homepage>
    <div className={container}>
      <h2 className={heading}>Something’s gone wrong...</h2>
      <p className={paragraph}>
        Sorry, we can’t find the page you are looking for.
        {links && ' Maybe some of these most visited links will help you?'}
      </p>
      {links && (
        <ul className={list}>
          {links.map(({ href, text }, i) => (
            <li key={i}>
              <Link className={link} to={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <span className={fourOhFour}>404</span>
    </div>
  </Layout>
);

export default FourOhFour;
