import { css } from '@emotion/react';
import { ReactNode } from 'react';
import tw from 'twin.macro';
import { Theme } from '../lib/types';

export interface TagProps {
  hot?: boolean;
  children: ReactNode;
}

export let Tag: React.FC<TagProps> = (props) => {
  let { hot = false, children } = props;

  return (
    <span
      css={(theme) => css`
        ${tw`uppercase font-bold text-xs bg-gray-300 px-2 py-1 rounded`}
        background: ${theme.colors.bgTag};
        
        ${hot && hotStyles(theme)}
      `}
    >
      {children}
    </span>
  );
};

let hotStyles = (theme: Theme) => css`
  background: ${theme.colors.bgTagHot};
  color: ${theme.colors.textTagHot};
`;
