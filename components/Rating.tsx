import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { clamp } from 'lodash';
import React, { useMemo } from 'react';
import tw from 'twin.macro';
import { Theme, UIComponentSize } from '../lib/types';

interface RatingProps {
  prefix: string;
  value?: number;
  max?: number;
  size?: UIComponentSize;
  onChange?: (value: number) => void;
}

/**
 * Displays `max` star rating
 */
export let Rating: React.FC<RatingProps> = (props) => {
  let { value, prefix, max = 5, size, onChange } = props;
  let computedValue = useMemo(() => {
    return typeof value === 'number' ? clamp(value, 1, max) : value;
  }, [value]);
  let computedSize = useMemo(() => matchSize(size), [size]);

  function handleChange(event: any) {
    onChange?.(parseInt(event.target.value, 10));
  }

  return (
    <fieldset
      css={(theme) => css`
        ${tw`inline-flex flex-row-reverse p-0 m-0 border-0`}

        ${onChange && hoverStyles(theme)}
      `}
    >
      {new Array(max).fill(null).map((_, i) => {
        let currentValue = max - i;
        let id = `${prefix}-star${currentValue}`;

        return (
          <React.Fragment key={currentValue}>
            <Input
              type="radio"
              checked={computedValue === currentValue}
              value={currentValue}
              id={id}
              onChange={handleChange}
              name="star"
              data-testid={id}
            />
            <Label
              htmlFor={id}
              active={!!(computedValue && currentValue <= computedValue)}
              data-testid={`${id}-label`}
            >
              <svg viewBox="0 0 24 24" width={computedSize} height={computedSize}>
                <path d="M12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2" />
              </svg>
            </Label>
          </React.Fragment>
        );
      })}
    </fieldset>
  );
};

let Label = styled.label<{ active?: boolean; theme?: Theme }>`
  color: ${({ active, theme }) => (active ? theme.colors.bgStarActive : theme.colors.bgStar)};
`;

let Input = styled.input`
  ${tw`hidden`}
`;

let hoverStyles = (theme: Theme) => css`
  & > ${Label}:hover {
    color: ${theme.colors.bgStarHover};

    & ~ ${Label} {
      color: ${theme.colors.bgStarHover};
    }
  }
`;

function matchSize(size?: UIComponentSize): number {
  switch (size) {
    case 'sm':
      return 16;
    case 'md':
      return 20;
    case 'lg':
      return 24;
    default:
      return 22;
  }
}
