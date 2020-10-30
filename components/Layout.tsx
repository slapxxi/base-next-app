import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Link from 'next/link';
import { lighten } from 'polished';
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Menu, Search, Twitter, X } from 'react-feather';
import { animated as a, useSpring } from 'react-spring';
import tw from 'twin.macro';
import { phone, routes } from '../lib/constants';
import { useLockScroll } from '../lib/hooks/useLockScroll';
import { useRouteChange } from '../lib/hooks/useRouteChange';
import { WithTheme } from '../lib/types';
import { Drawer } from './Drawer';
import { Logo } from './Logo';
import { SocialIcon } from './SocialIcon';

export let Layout: React.FC = (props) => {
  let { children } = props;
  let router = useRouteChange(() => {
    setMenuActive(false);
  });
  let [menuActive, setMenuActive] = useState(false);
  let ap = useSpring({ x: menuActive ? -1 : 1 });

  useLockScroll(menuActive);

  return (
    <a.div
      css={css`
        ${tw`h-full`}
        will-change: transform;
        transform-origin: top left;
      `}
      style={{ transform: ap.x.interpolate((x) => `scale(${x}, 1)`) }}
    >
      <a.div
        css={css`
          ${tw`grid`}
          min-height: 100%;
          grid-template-rows: auto 1fr auto;
          will-change: transform;
        `}
        style={{ transform: ap.x.interpolate((x) => `scale(${1 / x}, 1)`) }}
      >
        <Drawer
          open={menuActive}
          onClose={() => setMenuActive(false)}
          css={css`
            ${tw`flex flex-col`}
          `}
        >
          <div
            css={css`
              ${tw`flex items-center`}
            `}
          >
            <Link href="/">
              <a
                css={css`
                  ${tw`cursor-pointer`}
                  color: inherit;
                `}
              >
                <Logo
                  css={css`
                    ${tw`ml-4`}
                    width: 110px;
                    transform: scaleX(-1);
                  `}
                ></Logo>
              </a>
            </Link>
            <Button
              onClick={() => setMenuActive(false)}
              css={css`
                ${tw`ml-auto`}
              `}
            >
              <X></X>
            </Button>
          </div>
          <NavList>
            <NavListItem>
              <Link href={routes.auctions}>
                <NavLink active={router.pathname === routes.auctions}>Auctions</NavLink>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link href={routes.authors}>
                <NavLink active={router.pathname === routes.authors}>Authors</NavLink>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link href={routes.contacts}>
                <NavLink active={router.pathname === routes.contacts}>Contacts</NavLink>
              </Link>
            </NavListItem>
          </NavList>
          <footer
            css={css`
              ${tw`flex justify-between`}
            `}
          >
            <NavFooterItem
              css={css`
                ${tw`p-4`}
              `}
            >
              <span>
                RU/
                <span
                  css={(theme) => css`
                    color: ${theme.colors.textHeaderActive};
                  `}
                >
                  EN
                </span>
              </span>
            </NavFooterItem>
            <NavFooterItem
              css={css`
                ${tw`font-bold uppercase`}
              `}
            >
              {phone}
            </NavFooterItem>
            <div
              css={css`
                ${tw`uppercase`}
              `}
            >
              <Link href="/sign-in">
                <ButtonLink>Sign In</ButtonLink>
              </Link>
            </div>
          </footer>
        </Drawer>
        <header
          css={(theme) => css`
            ${tw`flex`}
            background: ${theme.colors.bgHeader};
          `}
        >
          <div
            css={css`
              ${tw`self-center`}
            `}
          >
            <Link href="/">
              <a
                css={(theme) => css`
                  ${tw`block p-4`}

                  :hover {
                    color: ${theme.colors.textHeaderActive};
                  }
                `}
              >
                <Logo
                  css={css`
                    width: 110px;
                  `}
                ></Logo>
              </a>
            </Link>
          </div>
          <div
            css={css`
              ${tw`ml-auto`}
            `}
          >
            <Button>
              <Search></Search>
            </Button>
          </div>
          <div>
            <Button onClick={() => setMenuActive(true)}>
              <Menu></Menu>
            </Button>
          </div>
        </header>

        {/* content */}
        <section
          css={(theme) => css`
            background: ${theme.colors.bgContent};
          `}
        >
          {children}
        </section>

        <footer
          css={(theme) => css`
            ${tw`grid p-4`}
            gap: 2rem;
            background: ${theme.colors.bgFooter};
            color: ${theme.colors.textFooter};
          `}
        >
          <Logo></Logo>
          <div
            css={(theme) => css`
              color: ${lighten(0.3, theme.colors.textFooterActive)};
            `}
          >
            Online Auction of Modern Art
          </div>
          <FooterNavList>
            <li>
              <Link href={routes.auctions}>
                <FooterNavLink>Auctions</FooterNavLink>
              </Link>
            </li>
            <li>
              <Link href={routes.authors}>
                <FooterNavLink>Authors</FooterNavLink>
              </Link>
            </li>
            <li>
              <Link href={routes.contacts}>
                <FooterNavLink>Contacts</FooterNavLink>
              </Link>
            </li>
            <li>
              <Link href={routes.faq}>
                <FooterNavLink>FAQ</FooterNavLink>
              </Link>
            </li>
            <li>
              <Link href={routes.terms}>
                <FooterNavLink>Terms of Agreement</FooterNavLink>
              </Link>
            </li>
          </FooterNavList>
          <div>{phone}</div>
          <div
            css={(theme) => css`
              color: ${theme.colors.textFooterActive};
            `}
          >
            Terms of Agreement
          </div>
          <div
            css={css`
              ${tw`flex justify-between`}
            `}
          >
            <FooterSocialIcon
              icon={(props) => <Instagram {...props} strokeWidth={1.5}></Instagram>}
            ></FooterSocialIcon>
            <FooterSocialIcon
              icon={(props) => <Facebook {...props} stroke="none" fill="currentColor"></Facebook>}
            ></FooterSocialIcon>
            <FooterSocialIcon
              icon={(props) => <Twitter {...props} stroke="none" fill="currentColor"></Twitter>}
            ></FooterSocialIcon>
            <FooterSocialIcon
              icon={(props) => <Linkedin {...props} stroke="none" fill="currentColor"></Linkedin>}
            ></FooterSocialIcon>
          </div>
          <div
            css={(theme) => css`
              color: ${theme.colors.textFooterActive};
            `}
          >
            2020 All Rights Reserved
          </div>
        </footer>
      </a.div>
    </a.div>
  );
};

let FooterSocialIcon = styled(SocialIcon)<WithTheme>`
  stroke: ${({ theme }) => theme.colors.textFooterActive};
  width: 36px;
`;

let Button = styled.button`
  ${tw`appearance-none p-4 border-0`}
  background: none;
`;

let NavList = styled.ul`
  ${tw`flex flex-1 list-none p-0 m-0 flex-col items-center`}
`;

let NavListItem = styled.li`
  ${tw`flex flex-1 flex-col items-center justify-center`}
`;

let NavLink = styled.a<WithTheme<{ active?: boolean }>>`
  ${tw`relative uppercase font-bold cursor-pointer`}
  font-family: ${({ theme }) => theme.fonts.content};

  :hover {
    color: ${({ theme }) => theme.colors.textHeaderActive};
  }

  ::after {
    ${tw`absolute h-2`}
    ${({ active }) => (active ? tw`visible` : tw`invisible`)};
    content: '';
    width: 70px;
    height: 2px;
    top: 100%;
    top: calc(100% + 0.5rem);
    left: 50%;
    left: calc(50% - 35px);
    background: ${({ theme }) => theme.colors.accent};
  }
`;

let ButtonLink = styled.a<WithTheme>`
  ${tw`block uppercase rounded p-4 font-bold`}
  color: ${({ theme }) => theme.colors.accent};

  :hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.bgHeader};
  }
`;

let NavFooterItem = styled.div`
  ${tw`flex items-center`}
`;

let FooterNavList = styled.ul`
  ${tw`flex flex-col list-none m-0 p-0`}
`;

let FooterNavLink = styled.a<WithTheme>`
  ${tw`block cursor-pointer py-2`}
  color: inherit;

  :hover {
    color: ${({ theme }) => theme.colors.textFooterActive};
  }
`;
