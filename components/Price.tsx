import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

interface Props {
  value: number;
}

export let Price: React.FC<Props> = (props) => {
  let { value } = props;
  let router = useRouter();
  let formatter = useMemo(
    () =>
      new Intl.NumberFormat(router.locale, {
        style: 'currency',
        currency: 'rub',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
    [router.locale],
  );

  return <>{formatter.format(value)}</>;
};
