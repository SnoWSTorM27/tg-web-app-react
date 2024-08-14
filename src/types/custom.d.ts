// declare module '*.svg' {
//   import React = require('react');
//   export const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
//   const src: string;
//   export default src;
// }

// declare module "*.svg" {
//   import * as React from "react";

//   const ReactComponent: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >;

//   export default ReactComponent;
// }
declare module '*.svg?react' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}
