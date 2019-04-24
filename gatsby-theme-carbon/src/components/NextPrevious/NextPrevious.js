import React from 'react';
// import { Link } from 'gatsby';
// import navigation from '../../data/navigation/navigation.json';

export default class NextPrevious extends React.Component {
  render() {
    return <div>next prev in progress</div>;
  }
  // static propTypes = {
  //   /**
  //    * array of tabs on this current page
  //    */
  //   currentTabs: PropTypes.array,
  //   /**
  //    * the lower-case slug-friendly name of the page
  //    */
  //   currentPage: PropTypes.string,
  //   /**
  //    * the full slug of the current page */
  //   slug: PropTypes.string,
  // };

  // /**
  //  * e.g.converts "Item Name" to "item-name"
  //  */
  // titleToSlug = string => {
  //   if (string) return string.toLowerCase().replace(' ', '-');
  // };

  // /**
  //  * e.g. converts "item-name" to "Item Name"
  //  */
  // slugToTitle = string => {
  //   if (string && string.charAt(0) === '/') {
  //     string = string.substr(1);
  //   }
  //   let newString;
  //   if (string) {
  //     newString = string
  //       .split('/')
  //       .pop()
  //       .split('-');
  //     newString = newString
  //       .map((word, i) => {
  //         let newWord;
  //         if (newString.length === 1 || !(i == newString.length - 1)) {
  //           newWord = word.charAt(0).toUpperCase() + word.slice(1);
  //         } else {
  //           newWord = word;
  //         }
  //         return newWord;
  //       })
  //       .join(' ');
  //     if (string === 'ui-shell') {
  //       newString = 'UI shell';
  //     }
  //     if (string === 'faq') {
  //       newString = 'FAQ';
  //     }
  //   }
  //   return newString;
  // };

  // slugToTitleWithPath = string => {
  //   if (string && string.charAt(0) === '/') {
  //     string = string.substr(1);
  //   }
  //   let newString = string;
  //   if (string) {
  //     newString = string
  //       .split('/')
  //       .map(word => this.slugToTitle(word))
  //       .join(': ');
  //   }
  //   return newString;
  // };

  // getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);

  // renderNextPreviousLinks = (prevPath, prevName, nextPath, nextName) => {
  //   let truncatedPrevName; let truncatedNextName;
  //   if (typeof prevName !== 'undefined') {
  //     truncatedPrevName = prevName.substring(prevName.indexOf(':') + 1).trim();
  //   }

  //   if (typeof nextName !== 'undefined') {
  //     truncatedNextName = nextName.substring(nextName.indexOf(':') + 1).trim();
  //   }

  //   const nextButtonClassnames = classnames({
  //     'next-previous-link': true,
  //     'next-previous-link--next': true,
  //     'ibm--col-lg-6': true,
  //     'ibm--col-md-4': true,
  //     'ibm--col-sm-2': true,
  //     'ibm--offset-lg-10': !prevPath,
  //   });

  //   return (
  //     <>
  //       <div>next prev</div>
  //       {/* {prevPath && (
  //         <Link
  //           className="next-previous-link next-previous-link--previous ibm--col-lg-6 ibm--col-md-4 ibm--col-sm-2 ibm--offset-lg-4"
  //           to={prevPath}>
  //           <span className="target-page-direction">Previous </span>
  //           <span className="target-page-name">{truncatedPrevName}</span>
  //         </Link>
  //       )}
  //       {nextPath && (
  //         <Link className={nextButtonClassnames} to={nextPath}>
  //           <span className="target-page-direction">Next </span>
  //           <span className="target-page-name">{truncatedNextName}</span>
  //         </Link>
  //       )} */}
  //     </>
  //   );
  // };

  // render() {
  //   const { GATSBY_CARBON_ENV } = process.env;

  //   const {currentTabs} = this.props;
  //   const {currentPage} = this.props;
  //   const {slug} = this.props;

  //   let currentParentPath = slug.split('/');
  //   currentParentPath.length -= 1;
  //   currentParentPath = currentParentPath.join('/');

  //   const currentSection = slug.substr(1).split('/')[0];

  //   let currentHasSubnav;
  //   if (navigation[currentSection]) {
  //     currentHasSubnav =
  //       typeof navigation[currentSection]['sub-nav'] === 'object';
  //   }

  //   let currentSubnavItem;
  //   if (currentHasSubnav) {
  //     currentSubnavItem = slug.substr(1).split('/')[1];
  //   }

  //   let prevPagePath; let prevPageTitle; let nextPagePath; let nextPageTitle;

  //   /**
  //    * Neighboring tabs:
  //    * tabs aren't in navigation. so lets first check
  //    * if we have any sibling tabs to go to thru in props,
  //    * before we bother looking at the navigation data
  //    */
  //   if (currentTabs) {
  //     currentTabs.forEach((tab, index) => {
  //       if (this.titleToSlug(tab) === currentPage) {
  //         if (currentTabs[index - 1]) {
  //           prevPagePath =
  //             `${currentParentPath
  //             }/${
  //             this.titleToSlug(currentTabs[index - 1])}`;
  //         }
  //         if (currentTabs[index + 1]) {
  //           nextPagePath =
  //             `${currentParentPath
  //             }/${
  //             this.titleToSlug(currentTabs[index + 1])}`;
  //         }
  //       }
  //     });
  //   }

  //   /**
  //    * if we have/are in a subnav, we need to
  //    * find the previous and next siblings in the  subnav
  //    * if the above didn't assign a value to prevPagePath,
  //    * that means we were either at the first tab, or that there are no tabs on the current page.
  //    */
  //   if (
  //     currentHasSubnav &&
  //     (prevPagePath === undefined || nextPagePath === undefined)
  //   ) {
  //     const currentSubnavArray = Object.keys(
  //       navigation[currentSection]['sub-nav']
  //     );
  //     const currentSubnavIndex = this.getKeyByValue(
  //       currentSubnavArray,
  //       currentSubnavItem
  //     );

  //     if (prevPagePath === undefined && currentSubnavIndex > 0) {
  //       const prevPathSlugPart = currentSubnavArray[currentSubnavIndex - 1];
  //       prevPagePath = `/${currentSection}/${prevPathSlugPart}`;
  //       // const prevTitle =
  //       //   navigation[currentSection]['sub-nav'][
  //       //     currentSubnavArray[currentSubnavIndex - 1]
  //       //   ].title;
  //     }

  //     if (
  //       nextPagePath === undefined &&
  //       currentSubnavIndex < currentSubnavArray.length - 1
  //     ) {
  //       const nextPathSlugPart =
  //         currentSubnavArray[parseInt(currentSubnavIndex, 10) + 1];
  //       nextPagePath = `/${currentSection}/${nextPathSlugPart}`;
  //     }
  //   }

  //   /**
  //    * if still undefined, we need to look in other sections
  //    */
  //   const sectionArray = Object.keys(navigation);
  //   let currentSectionIndex = this.getKeyByValue(sectionArray, currentSection);

  //   if (prevPagePath === undefined) {
  //     let prevSection = sectionArray[parseInt(currentSectionIndex) - 1];
  //     let prevSectionObject = navigation[prevSection];
  //     if (GATSBY_CARBON_ENV !== 'internal') {
  //       while (prevSection && prevSectionObject.internal === true) {
  //         currentSectionIndex--;
  //         prevSection = sectionArray[parseInt(currentSectionIndex) - 1];
  //         prevSectionObject = navigation[prevSection];
  //       }
  //     }
  //     if (prevSection) {
  //       prevPagePath = `${prevSection}`;
  //       const prevHasSubnav = typeof prevSectionObject['sub-nav'] === 'object';
  //       let prevSubnavTarget;
  //       if (prevHasSubnav) {
  //         const prevSubnavArray = Object.keys(prevSectionObject['sub-nav']);
  //         prevSubnavTarget = prevSubnavArray[prevSubnavArray.length - 1];
  //       }
  //       if (prevSubnavTarget !== undefined) {
  //         prevPagePath += `/${prevSubnavTarget}`;
  //       }
  //     }
  //   }

  //   if (nextPagePath === undefined) {
  //     let nextSection = sectionArray[parseInt(currentSectionIndex) + 1];
  //     let nextSectionObject = navigation[nextSection];
  //     if (GATSBY_CARBON_ENV !== 'internal') {
  //       while (nextSection && nextSectionObject.internal === true) {
  //         currentSectionIndex++;
  //         nextSection = sectionArray[parseInt(currentSectionIndex) + 1];
  //         nextSectionObject = navigation[nextSection];
  //       }
  //     }
  //     if (nextSection) {
  //       nextPagePath = `${nextSection}`;
  //       const nextHasSubnav = typeof nextSectionObject['sub-nav'] === 'object';
  //       let nextSubnavTarget;
  //       if (nextHasSubnav) {
  //         const nextSubnavArray = Object.keys(nextSectionObject['sub-nav']);
  //         nextSubnavTarget = nextSubnavArray[0];
  //       }
  //       if (nextSubnavTarget !== undefined) {
  //         nextPagePath += `/${nextSubnavTarget}`;
  //       }
  //     }
  //   }

  //   // TODO: get title properly!
  //   prevPageTitle = this.slugToTitleWithPath(prevPagePath);
  //   nextPageTitle = this.slugToTitleWithPath(nextPagePath);

  //   return (
  //     <div className="next-previous-wrapper">
  //       <div className="ibm--grid">
  //         <div className="next-previous-controls ibm--row">
  //           {this.renderNextPreviousLinks(
  //             prevPagePath,
  //             prevPageTitle,
  //             nextPagePath,
  //             nextPageTitle
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}
