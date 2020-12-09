import { useMemo } from 'react';
const CONTENT =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nihil minima laboriosam ad, quam tempore amet. Explicabo perspiciatis, rem illo in, officiis, quam nisi culpa ab repudiandae consequuntur hic suscipit.';

export interface IpsumProps {
  repeat?: number;
}

export let Ipsum: React.FC<IpsumProps> = (props) => {
  let { repeat = 1 } = props;
  let content = useMemo(() => {
    return new Array(repeat).fill(null).map((_, i) => <p key={i}>{CONTENT}</p>);
  }, [repeat]);
  return <>{content}</>;
};
