import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Star } from 'react-feather';
import tw from 'twin.macro';
import { UIComponentSize } from '../lib/types';

interface RatingProps {
  /**
   * Required to create a unique HTML id
   */
  prefix: string;
  value?: number;
  size?: UIComponentSize;
  onChange?: (value: number) => void;
}

export let Rating: React.FC<RatingProps> = (props) => {
  let { value, prefix, size, onChange } = props;
  let computedSize = matchSize(size);

  function handleChange(event: any) {
    onChange?.(parseInt(event.target.value, 10));
  }

  return (
    <fieldset
      css={css`
        ${tw`inline-flex flex-row-reverse p-0 m-0 border-0`}

        & > ${Label}:hover {
          color: goldenrod;

          & ~ ${Label} {
            color: goldenrod;
          }
        }
      `}
    >
      {new Array(5).fill(null).map((_, i) => {
        let currentValue = 5 - i;
        let id = `${prefix}-star${currentValue}`;

        return (
          <React.Fragment key={currentValue}>
            <Input
              type="radio"
              checked={value === currentValue}
              value={currentValue}
              id={id}
              onChange={handleChange}
              name="star"
            />
            <Label htmlFor={id} active={!!(value && currentValue <= value)}>
              <Star fill="currentColor" size={computedSize}></Star>
            </Label>
          </React.Fragment>
        );
      })}
    </fieldset>
  );
};

let Label = styled.label<{ active?: boolean }>`
  color: ${({ active }) => (active ? 'gold' : 'darkgrey')};
`;

let Input = styled.input`
  ${tw`hidden`}
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
