import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import { ArrowRight } from 'react-feather';
import tw from 'twin.macro';
import { BadgeButton } from './BadgeButton';
import { Title } from './Title';

type Category = 'tiles' | 'mixes';

export interface CategoryCardProps {
  children?: ReactNode;
  category: Category;
}

export let CategoryCard: React.FC<CategoryCardProps> = (props) => {
  let { category } = props;
  let Component = matchCategory(category);

  if (Component) {
    return <Component></Component>;
  }

  return null;
};

export let TilesCategoryCard: React.FC = () => {
  return (
    <div
      css={css`
        ${tw`relative rounded`}
        width: 320px;
        height: 230px;
        background: url('/img/banner1.png') top right no-repeat,
          radial-gradient(90% 200% at 90% 90%, hsl(144, 65%, 33%) 10%, hsl(144, 60%, 55%));
      `}
    >
      <Title
        size="sm"
        css={css`
          ${tw`absolute m-0 text-white bottom-3 left-3`}
          width: 60%;
        `}
      >
        Новая коллекция плитки
      </Title>
      <BadgeButton
        icon={<ArrowRight></ArrowRight>}
        hover
        variant="lifted"
        css={css`
          ${tw`absolute bottom-3 right-2`}
          color: #fff;

          :hover {
            color: #000;
          }
        `}
      ></BadgeButton>
    </div>
  );
};

export let MixesCategoryCard: React.FC = () => {
  return (
    <div
      css={css`
        ${tw`relative rounded`}
        width: 320px;
        height: 230px;
        background: url('/img/banner2.png') 80% 100% no-repeat,
          radial-gradient(90% 200% at 90% 90%, hsl(25, 60%, 40%) 10%, hsl(25, 70%, 55%));
      `}
    >
      <Title
        size="sm"
        css={css`
          ${tw`absolute m-0 text-white top-3 left-3`}
          width: 60%;
        `}
      >
        Строительные смеси
      </Title>
      <BadgeButton
        icon={<ArrowRight></ArrowRight>}
        hover
        variant="lifted"
        css={css`
          ${tw`absolute bottom-3 right-2`}
          color: #fff;

          :hover {
            color: #000;
          }
        `}
      ></BadgeButton>
    </div>
  );
};

function matchCategory(category: Category): React.FC | null {
  switch (category) {
    case 'tiles':
      return TilesCategoryCard;
    case 'mixes':
      return MixesCategoryCard;
    default:
      return null;
  }
}
