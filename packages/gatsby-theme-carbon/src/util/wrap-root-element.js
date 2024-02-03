import React from 'react';
import { NavContextProvider } from './context/NavContext';
import MDXProvider from '../components/MDXProvider';
import Default from '../components/Layouts/Default';

const wrapRootElement = ({ element }) => (
  <>
    {console.log("element", element)}
    <NavContextProvider>
      {/* <Default> */}
      <MDXProvider element={element} />
      {/* </Default> */}
    </NavContextProvider>
  </>

);

export default wrapRootElement;
