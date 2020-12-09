import { fireEvent, render } from '@testing-library/react';
import { SmoothScroll } from './SmoothScroll';

it('updates locaiton hash', () => {
  let { getByTestId } = render(<SmoothScroll href="#anchor"></SmoothScroll>);
  let link = getByTestId('anchor');

  fireEvent.click(link);

  expect(location.hash).toEqual('#anchor');
});

export default {};
