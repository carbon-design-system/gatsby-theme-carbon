import wrapRoot from './src/util/wrap-root-element';

export const wrapRootElement = wrapRoot;

export const onClientEntry = () => {
  // allow transitions once page has fully rendered
  const body = document.querySelector('body');
  window.addEventListener('load', () => {
    body.classList.remove('body--preload');
  });
};

const getTargetOffset = hash => {
  const id = window.decodeURI(hash.replace(`#`, ``));
  if (id !== ``) {
    const element = document.getElementById(id);
    if (element) {
      return element.offsetTop - 24;
    }
  }
  return null;
};

export const onInitialClientRender = () => {
  requestAnimationFrame(() => {
    const offset = getTargetOffset(window.location.hash);
    if (offset !== null) {
      window.scrollTo(0, offset);
    }
  });
};

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  const offset = getTargetOffset(location.hash);
  return offset !== null ? [0, offset] : true;
};
