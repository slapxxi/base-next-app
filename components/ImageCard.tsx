import { css } from '@emotion/react';
import React from 'react';
import tw from 'twin.macro';
import { Title } from './Title';

export interface ImageCardProps {
  image: string;
  title?: string;
  button?: JSX.Element;
}

export let ImageCard: React.FC<ImageCardProps> = (props) => {
  let { image, button, title } = props;

  return (
    <div
      css={css`
        ${tw`relative rounded`}
      `}
    >
      <img
        src={image}
        alt=""
        css={css`
          ${tw`w-full`}
        `}
      />
      <div
        css={css`
          ${tw`absolute space-y-4`}
          bottom: 20px;
          left: 20px;
          right: 50%;
        `}
      >
        {title && (
          <Title
            size="sm"
            css={css`
              ${tw`p-0 m-0 text-white`}
            `}
          >
            {title}
          </Title>
        )}
        {button}
      </div>
    </div>
  );
};
