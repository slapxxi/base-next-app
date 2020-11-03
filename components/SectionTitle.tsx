import { css } from '@emotion/core';
import tw from 'twin.macro';
import { Title } from './Title';

export let SectionTitle: React.FC = (props) => {
  let { children, ...rest } = props;

  return (
    <Title
      {...rest}
      css={css`
        ${tw`text-3xl`}
      `}
    >
      {children}
    </Title>
  );
};
