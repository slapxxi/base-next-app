import { css } from '@emotion/react';
import { ReactNode } from 'react';
import tw from 'twin.macro';

export interface NoticeProps {
  title?: ReactNode;
  text?: ReactNode;
}

export let Notice: React.FC<NoticeProps> = (props) => {
  let { title, text } = props;

  return (
    <div
      css={(theme) => css`
        ${tw`rounded p-6`}
        background: ${theme.colors.bgNotice};
      `}
    >
      {title && (
        <div
          css={css`
            ${tw`font-bold mb-1`}
          `}
        >
          {title}
        </div>
      )}
      <div>{text}</div>
    </div>
  );
};
