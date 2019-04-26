import React from 'react';
import ArrowRightIcon from '@carbon/icons-react/es/arrow--right/24';
import { Link } from 'gatsby';

export const HomepageHeader = () => {
  const homeTitle = (
    <h3 className="homepage--header__title">
      <span>
        Carbon <br />
        Design System
      </span>
    </h3>
  );

  return (
    <div>
      <span className="homepage--dots" />
      <section className="homepage--header">
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-lg-4 bx--offset-lg-4">{homeTitle}</div>
          </div>
        </div>
      </section>
      <section className="homepage--callout">
        <div className="bx--grid">
          <div className="bx--row">
            <aside
              aria-label="header callout"
              className="bx--col-md-4  bx--col-lg-4 bx--offset-lg-4"
            >
              <h3>
                Inclusive, flexible
                <br />
                and consistent
              </h3>
            </aside>
            <div className="bx--col-lg-8 bx--col-md-4">
              <p className="bx--type-expressive-paragraph-01">
                The <strong>Carbon Design System</strong> is IBM&rsquo;s
                open-source design system for products and experiences. With the
                IBM Design Language as its foundation, the system consists of
                working code, design tools and resources, human interface
                guidelines, and a vibrant community of contributors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const HomepageFooter = () => (
  <div className="homepage--callout homepage--callout--blue">
    <div className="bx--grid">
      <section className="bx--row">
        <aside
          aria-label="footer callout"
          className="bx--col-md-4 bx--col-lg-4 bx--offset-lg-4"
        >
          <h3>
            Wondering how <br />
            to contribute?
          </h3>
        </aside>
        <div className="bx--col-lg-8 bx--col-md-4">
          <div className="homepage--footer__info">
            <p className="bx--type-expressive-paragraph-01">
              We welcome all feedback, designs, or ideas in order to produce the
              best possible experience for our users. If you&rsquo;re interested
              in contributing, check out our contributing guidelines to get
              started.
            </p>
            <Link to="/contributing/governance" alt="Start contributing">
              Start contributing
              <ArrowRightIcon aria-label="Start Contributing" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  </div>
);
