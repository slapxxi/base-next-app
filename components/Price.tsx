import { css } from '@emotion/react';
import { ReactNode, useMemo } from 'react';
import tw from 'twin.macro';

export interface PriceProps {
  children?: ReactNode;
  locale?: string;
  previous?: boolean;
  value: number;
}

export let Price: React.FC<PriceProps> = (props) => {
  let { value, locale = 'ru', previous = false, ...rest } = props;
  let formattedValue = useMemo(() => {
    let formatter = new Intl.NumberFormat(locale, { style: 'currency', currency: 'RUB' });
    return formatter.format(value);
  }, [value, locale]);

  if (previous) {
    return (
      <span
        css={css`
          ${tw`relative`}
        `}
        {...rest}
      >
        <svg
          viewBox="0 0 5 10"
          preserveAspectRatio="none"
          css={css`
            ${tw`absolute`}
            top: 0;
            width: 100%;
            height: 100%;
            transform: rotate(-5deg);
          `}
        >
          <path d="M0 5L5 5" stroke="#f00d" fill="none"></path>
        </svg>
        {formattedValue}
      </span>
    );
  }

  return <span {...rest}>{formattedValue}</span>;
};
