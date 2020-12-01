import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Rating } from './Rating';

it('does not check by default', async () => {
  let { queryByTestId } = render(<Rating prefix="test"></Rating>);

  expect(queryByTestId('test-star1')).toBeInstanceOf(HTMLInputElement);
  expect(queryByTestId('test-star2')).toBeInstanceOf(HTMLInputElement);
  expect(queryByTestId('test-star3')).toBeInstanceOf(HTMLInputElement);
  expect(queryByTestId('test-star4')).toBeInstanceOf(HTMLInputElement);
  expect(queryByTestId('test-star5')).toBeInstanceOf(HTMLInputElement);
  expect(queryByTestId('test-star6')).toBe(null);
});

it('checks value', async () => {
  let { getByTestId } = render(<Rating prefix="test" value={3}></Rating>);
  let star3 = getByTestId('test-star3') as HTMLInputElement;
  expect(star3.checked).toEqual(true);
});

it('accepts max value', () => {
  let { getByTestId, queryByTestId } = render(<Rating prefix="test" value={8} max={10}></Rating>);
  let star8 = getByTestId('test-star8') as HTMLInputElement;
  expect(star8.checked).toEqual(true);
  expect(queryByTestId('test-star-11')).toBe(null);
});

it('clamps value to max', () => {
  let { getByTestId } = render(<Rating prefix="test" value={10}></Rating>);
  let star5 = getByTestId('test-star5') as HTMLInputElement;
  expect(star5.checked).toEqual(true);
});

it('clamps value to min', () => {
  let { getByTestId } = render(<Rating prefix="test" value={0}></Rating>);
  let star5 = getByTestId('test-star1') as HTMLInputElement;
  expect(star5.checked).toEqual(true);
});

it('fires onChange', () => {
  let onChange = jest.fn();
  let { getByTestId } = render(<Rating prefix="test" onChange={onChange}></Rating>);

  let star4 = getByTestId('test-star4-label') as HTMLLabelElement;
  fireEvent(star4, new MouseEvent('click'));

  expect(onChange).toBeCalledWith(4);
});

export {};
