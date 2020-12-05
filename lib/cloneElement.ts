import { jsx } from '@emotion/react';

export function cloneElement(element: JSX.Element, props: any) {
  return jsx(element.type, {
    key: element.key,
    ref: element.ref,
    ...element.props,
    ...props,
  });
}
