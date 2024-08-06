// declare module '*.svg' {
//   const content: React.FC<React.SVGProps<SVGElement>>
//   export default content
// }

// declare module '*.svg' {
//   import * as React from 'react';

//   export const ReactComponent: React.FunctionComponent<
//       React.SVGProps<SVGSVGElement> & { title?: string }
//   >;

//   const src: string;
//   export default src;
// }
declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}
