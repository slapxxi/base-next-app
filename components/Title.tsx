import { css } from '@emotion/react';
import { ReactNode, useMemo } from 'react';
import { UIComponentSize } from '../lib/types';

export interface TitleProps {
  children?: ReactNode;
  size?: UIComponentSize | 'xs' | 'xl';
}

export let Title: React.FC<TitleProps> = (props) => {
  let { children, size = 'md' } = props;
  let computedSize = useMemo(() => {
    return matchSize(size);
  }, [size]);

  return (
    <h1
      css={css`
        font-size: ${computedSize}px;
      `}
    >
      {children}
    </h1>
  );
};

function matchSize(size: UIComponentSize | 'xs' | 'xl'): number {
  switch (size) {
    case 'xs':
      return 16;
    case 'sm':
      return 20;
    case 'md':
      return 28;
    case 'lg':
      return 34;
    case 'xl':
      return 40;
    default:
      return 28;
  }
}
