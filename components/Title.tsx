import { css } from '@emotion/core';
import tw from 'twin.macro';

export let Title: React.FC = (props) => {
  let { children, ...rest } = props;

  return (
    <div
      css={(theme) => css`
        ${tw`m-0`}
        font-family: ${theme.fonts.title};
      `}
      {...rest}
    >
      {children}
    </div>
  );
};
