import { ThemeProvider } from '@emotion/react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { defaultTheme } from '../lib/style/theme';
import { Rating } from './Rating';

it('does not check by default', () => {
  let { queryByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <Rating prefix="test"></Rating>
    </ThemeProvider>,
  );

  expect(queryByTestId('test-star1')).not.toBe(null);
  expect(queryByTestId('test-star2')).not.toBe(null);
  expect(queryByTestId('test-star3')).not.toBe(null);
  expect(queryByTestId('test-star4')).not.toBe(null);
  expect(queryByTestId('test-star5')).not.toBe(null);
  expect(queryByTestId('test-star6')).toBe(null);
});

it('checks value', async () => {
  let { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <Rating prefix="test" value={3}></Rating>
    </ThemeProvider>,
  );
  let star3 = getByTestId('test-star3') as HTMLInputElement;
  expect(star3.checked).toEqual(true);
});

it('accepts max value', () => {
  let { getByTestId, queryByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <Rating prefix="test" value={8} max={10}></Rating>
    </ThemeProvider>,
  );
  let star8 = getByTestId('test-star8') as HTMLInputElement;
  expect(star8.checked).toEqual(true);
  expect(queryByTestId('test-star-11')).toBe(null);
});

it('clamps value to max', () => {
  let { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <Rating prefix="test" value={10}></Rating>
    </ThemeProvider>,
  );
  let star5 = getByTestId('test-star5') as HTMLInputElement;
  expect(star5.checked).toEqual(true);
});

it('clamps value to min', () => {
  let { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <Rating prefix="test" value={0}></Rating>
    </ThemeProvider>,
  );
  let star5 = getByTestId('test-star1') as HTMLInputElement;
  expect(star5.checked).toEqual(true);
});

it('fires onChange', () => {
  let onChange = jest.fn();
  let { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <Rating prefix="test" onChange={onChange}></Rating>
    </ThemeProvider>,
  );

  let star4 = getByTestId('test-star4-label') as HTMLLabelElement;
  fireEvent(star4, new MouseEvent('click'));

  expect(onChange).toBeCalledWith(4);
});

it('is accessible', async () => {
  let { container } = render(
    <ThemeProvider theme={defaultTheme}>
      <Rating prefix="test"></Rating>
    </ThemeProvider>,
  );
  let results = await axe(container);
  expect(results).toHaveNoViolations();
});
