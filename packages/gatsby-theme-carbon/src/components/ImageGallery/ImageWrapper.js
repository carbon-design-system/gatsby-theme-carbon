import React from 'react';
// import { ChevronRight32, ChevronLeft32, Close32 } from '@carbon/icons-react';
// import { container } from './ImageWrapper.module.scss';

// function ImageWrapper({ image, ...props }) {
//   return (
//     <div className={container}>
//       <div>
//         <p>IBM Design</p>
//         <button>
//           <Close32 />
//         </button>
//       </div>
//       <div>
//         <button>
//           <ChevronLeft32 />
//         </button>
//         {image}
//         <button>
//           <ChevronRight32 />
//         </button>
//       </div>
//     </div>
//   );
// }
// export default ImageWrapper;

function ImageWrapper({ src, alt, title }) {
  return <img src={src} alt={alt} title={title} />;
}

export default ImageWrapper;
