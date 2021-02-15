import { css } from '@emotion/react';
import { default as React, useLayoutEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { animated as a, useSpring } from 'react-spring';
import tw from 'twin.macro';
import { Theme, UserReview } from '../lib/types';
import { FormattedDate } from './FormattedDate';
import { Rating } from './Rating';

export interface ReviewProps {
  data: UserReview;
}

export let Review: React.FC<ReviewProps> = (props) => {
  let { data } = props;
  let [contentExceeded, setContentExceeded] = useState(false);
  let [expanded, setExpanded] = useState(false);
  let [ogHeight, setOgHeight] = useState(0);
  let ref = useRef<HTMLParagraphElement>(null);
  let ap = useSpring({
    height: expanded ? ogHeight : 150,
    config: {
      tension: 230,
    },
  });

  useLayoutEffect(() => {
    let elem = ref.current;

    if (elem) {
      let rect = elem.getBoundingClientRect();
      if (rect.height >= 160) {
        setContentExceeded(true);
        setOgHeight(rect.height);
      } else {
        setContentExceeded(false);
      }
    }
  }, [data.content]);

  return (
    <div
      css={(theme) => css`
        ${tw`p-4 overflow-hidden rounded`}
        border: 1px solid ${theme.colors.borderItem};
        background: ${theme.colors.bgItem};
        color: ${theme.colors.textItem};
      `}
    >
      <header
        css={css`
          ${tw`flex`}
        `}
      >
        <div
          css={css`
            ${tw`flex-1`}
          `}
        >
          <div
            css={css`
              ${tw`mb-2 font-bold`}
            `}
          >
            {data.author}
          </div>
          <Rating prefix="review" size="sm" value={data.rating}></Rating>
        </div>
        <FormattedDate
          date={data.createdAt}
          css={(theme) => css`
            color: ${theme.colors.textSecondary};
          `}
        ></FormattedDate>
      </header>
      <a.p
        ref={ref}
        css={(theme) => css`
          ${tw`box-border relative my-4 overflow-hidden leading-normal`}

          ${contentExceeded && !expanded && collapsedStyles(theme)}
        `}
        style={contentExceeded ? { height: ap.height } : {}}
      >
        {data.content}
      </a.p>
      {contentExceeded && (
        <button
          css={(theme) => css`
            ${tw`inline-flex items-center text-base font-bold border-0 cursor-pointer`}
            background: 0;
            color: ${theme.colors.textItem};

            :hover {
              text-decoration: underline;
            }
          `}
          onClick={() => setExpanded(!expanded)}
        >
          <span
            css={css`
              ${tw`mr-2`}
            `}
          >
            {expanded ? 'Скрыть' : 'Читать далее'}
          </span>
          {expanded ? <ArrowLeft size={16}></ArrowLeft> : <ArrowRight size={16}></ArrowRight>}
        </button>
      )}
    </div>
  );
};

let collapsedStyles = (theme: Theme) => css`
  ::after {
    ${tw`absolute bg-gradient-to-t from-white`}
    --tw-gradient-from: ${theme.colors.bgItem};
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
  }
`;
