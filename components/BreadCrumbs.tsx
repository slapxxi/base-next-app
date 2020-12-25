import { css } from '@emotion/react';
import React, { Children, ReactNode, useMemo } from 'react';
import { ChevronRight } from 'react-feather';
import tw from 'twin.macro';

export interface BreadCrumbsProps {
  children?: ReactNode;
}

export let BreadCrumbs: React.FC<BreadCrumbsProps> = (props) => {
  let { children } = props;
  let childrenCount = useMemo(() => {
    return Children.count(children);
  }, [children]);

  return (
    <div
      css={css`
        ${tw`flex space-x-2 items-center`}
      `}
    >
      {childrenCount > 1
        ? Children.map(children, (child, i) => {
            if (i === childrenCount - 1) {
              return child;
            }

            return (
              <>
                {child}
                <ChevronRight
                  size={14}
                  aria-hidden
                  css={(theme) => css`
                    color: ${theme.colors.textSecondary};
                  `}
                ></ChevronRight>
              </>
            );
          })
        : children}
    </div>
  );
};
