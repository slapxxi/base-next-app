import { css } from '@emotion/react';
import { ReactNode } from 'react';
import tw from 'twin.macro';

export interface ListProps {
  children?: ReactNode;
}

export let List: React.FC<ListProps> = (props) => {
  let { children } = props;

  return (
    <ul
      css={(theme) => css`
        ${tw`space-y-2`}

        & ::marker {
          color: ${theme.colors.bgListMarker};
        }
      `}
    >
      {children}
    </ul>
  );
};
