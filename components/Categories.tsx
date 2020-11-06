import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import tw from 'twin.macro';
import { routes } from '../lib/constants';
import { WithTheme } from '../lib/types';

export let Categories: React.FC = () => {
  return (
    <CategoryContainer>
      <CategoryItem>
        <Link href={routes.main}>
          <a>
            <Image
              src="/images/natural.png"
              width={261}
              height={201}
              layout="fixed"
              loading="eager"
              css={css`
                ${tw`rounded-lg shadow`}
              `}
            ></Image>
          </a>
        </Link>
        <CategoryTitle>Natural</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <Link href={routes.main}>
          <a>
            <Image
              src="/images/sculpture.png"
              width={261}
              height={201}
              layout="fixed"
              loading="eager"
              css={css`
                ${tw`rounded-lg shadow`}
              `}
            ></Image>
          </a>
        </Link>
        <CategoryTitle>Sculpture</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <Link href={routes.main}>
          <a>
            <Image
              src="/images/drawing.png"
              width={261}
              height={201}
              layout="fixed"
              loading="eager"
              css={css`
                ${tw`rounded-lg shadow`}
              `}
            ></Image>
          </a>
        </Link>
        <CategoryTitle>Drawing</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <Link href={routes.main}>
          <a>
            <Image
              src="/images/digital-art.png"
              width={261}
              height={201}
              layout="fixed"
              loading="eager"
              css={css`
                ${tw`rounded-lg shadow`}
              `}
            ></Image>
          </a>
        </Link>
        <CategoryTitle>Digital Art</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <Link href={routes.main}>
          <a>
            <Image
              src="/images/handmade.png"
              width={261}
              height={201}
              layout="fixed"
              loading="eager"
              css={css`
                ${tw`rounded-lg shadow`}
              `}
            ></Image>
          </a>
        </Link>
        <CategoryTitle>Handmade</CategoryTitle>
      </CategoryItem>
    </CategoryContainer>
  );
};

let CategoryContainer = styled.div<WithTheme>`
  ${tw`flex items-center space-x-4 p-4`}
  overflow-y: hidden;
  overflow-x: scroll;
  background: ${(props) => props.theme.colors.bgItem};
  scroll-snap-type: mandatory;
  scroll-snap-points-x: repeat(261px);
  scroll-snap-type: x mandatory;

  & > *:last-child {
    ${tw`pr-4`}
  }
`;

let CategoryItem = styled.div`
  ${tw`flex flex-col items-center space-y-4`}
  scroll-snap-align: center;
`;

let CategoryTitle = styled.span`
  ${tw`font-bold text-lg`}
`;
