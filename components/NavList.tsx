import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import tw from 'twin.macro';
import { Title } from './Title';

export interface NavListProps {
  children?: ReactNode;
  title?: string;
  orientation?: 'horizontal' | 'vertical';
}

export let NavList: React.FC<NavListProps> = (props) => {
  let { children, title } = props;

  return (
    <>
      {title && <Title size="xs">{title}</Title>}

      <ul
        css={css`
          ${tw`m-0 p-0 list-none space-y-2`}
        `}
      >
        {children}
      </ul>
    </>
  );
};
