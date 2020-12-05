import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

interface Props {
  date: Date;
}

export let FormattedDate: React.FC<Props> = (props) => {
  let { date, ...rest } = props;

  return <div {...rest}>{dayjs(date).locale('ru').format('LL')}</div>;
};
