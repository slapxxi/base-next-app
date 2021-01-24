import { css } from '@emotion/react';
import React, { ReactNode, useCallback, useState } from 'react';
import { ArrowRight } from 'react-feather';
import tw, { theme } from 'twin.macro';
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
    return (
      <>
        <svg width="0" height="0">
          <filter id="categoryCard-filter-outline">
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="4"
              result="DILATED"
            ></feMorphology>
            <feFlood floodColor="#fff" floodOpacity=".5" result="COLOR"></feFlood>
            <feComposite in="COLOR" in2="DILATED" operator="in" result="OUTLINE"></feComposite>
            <feMerge>
              <feMergeNode in="OUTLINE"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </svg>
        <Component></Component>
      </>
    );
  }

  return null;
};

export let TilesCategoryCard: React.FC = () => {
  let [bind, isHovered] = useHover();

  return (
    <div
      css={css`
        ${tw`relative rounded overflow-hidden`}
        width: 320px;
        height: 230px;
        background: radial-gradient(
          90% 200% at 90% 90%,
          ${theme`colors.emerald.700`} 10%,
          ${theme`colors.emerald.400`}
        );
      `}
    >
      <img
        src="/img/banner1.png"
        css={css`
          ${tw`absolute`}
          ${isHovered && `filter: url(#categoryCard-filter-outline);`}
          top: 0;
          right: 0;
        `}
      />
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
        {...bind()}
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
  let [bind, isHovered] = useHover();

  return (
    <div
      css={css`
        ${tw`relative rounded overflow-hidden`}
        width: 320px;
        height: 230px;
        background: radial-gradient(
          90% 200% at 90% 90%,
          ${theme`colors.amber.700`} 10%,
          ${theme`colors.amber.400`}
        );
      `}
    >
      <img
        src="/img/banner2.png"
        css={css`
          ${tw`absolute`}
          ${isHovered && `filter: url(#categoryCard-filter-outline);`}
          bottom: 0;
        `}
      />
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
        {...bind()}
        hover
        icon={<ArrowRight></ArrowRight>}
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

function useHover(): [any, boolean] {
  let [hovered, setHovered] = useState(false);
  let bind = useCallback(() => {
    return {
      onMouseEnter: () => {
        setHovered(true);
      },
      onMouseLeave: () => {
        setHovered(false);
      },
    };
  }, []);
  return [bind, hovered];
}

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
