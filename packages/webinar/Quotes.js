import React from 'react';
import Connor from './connor.png';
import Taylor from './taylor.png';

const Quotes = () => (
  <div className="quotes">
    <div className="quote">
      <blockquote>
        My list of web development skills ends after HTML and Markdown, but I
        was able to migrate nearly all of the Carbon site the the Gatsby theme
        in a matter of hours.
      </blockquote>
      <img src={Connor} alt="Connor Leech headshot" />
    </div>
    <div className="quote rtl">
      <blockquote>
        My list of web development skills ends after HTML and Markdown, but I
        was able to migrate nearly all of the Carbon site the the Gatsby theme
        in a matter of hours.
      </blockquote>
      <img src={Taylor} alt="Taylor Jones headshot" />
    </div>
  </div>
);

export default Quotes;
