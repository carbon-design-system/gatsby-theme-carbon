import React from 'react';
import Connor from './connor.png';
import Taylor from './taylor.png';

const Quotes = () => (
  <div className="quotes">
    <div className="quote">
      <div className="text-container">
        <blockquote>
          My list of web development skills ends after HTML and Markdown, but I
          was able to migrate nearly all of the Carbon site the the Gatsby theme
          in a matter of hours.
        </blockquote>
        <span className="name">Connor Leech</span>
        <span className="title">Content designer – Carbon</span>
      </div>
      <img src={Connor} alt="Connor Leech headshot" />
    </div>
    <div className="quote rtl">
      <div className="text-container">
        <blockquote>
          After forking Carbon's website 6 months ago, we made the decision to
          migrate our site to the Gatsby theme. Doing so has allowed us to focus
          our efforts elsewhere, while benefiting from and contributing updates.
        </blockquote>
        <span className="name">Taylor Jones</span>
        <span className="title">Front-end developer – Watson IoT</span>
      </div>
      <img src={Taylor} alt="Taylor Jones headshot" />
    </div>
  </div>
);

export default Quotes;
