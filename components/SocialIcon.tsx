import { css } from '@emotion/core';
import { SVGProps } from 'react';
import { Icon } from 'react-feather';

interface Props extends SVGProps<SVGSVGElement> {
  icon: Icon;
}

export let SocialIcon: React.FC<Props> = (props) => {
  let { icon: Icon, ...rest } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      css={css`
        stroke: currentColor;
      `}
      {...rest}
    >
      <circle cx="12" cy="12" r="11" fill="none"></circle>
      <Icon width={12} height={12} x="6" y="6"></Icon>
    </svg>
  );
};
