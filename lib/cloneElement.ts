import { jsx } from '@emotion/react';

export function cloneElement(element: any, props: any) {
  return jsx(element.type, {
    key: element.key,
    ref: element.ref,
    ...element.props,
    ...props,
  });
}
