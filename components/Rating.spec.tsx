import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Rating } from './Rating';

it('does not check by default', async () => {
  let { getByTestId } = render(<Rating prefix="test"></Rating>);

  let star1 = getByTestId('test-star1') as HTMLInputElement;
  let star2 = getByTestId('test-star2') as HTMLInputElement;
  let star3 = getByTestId('test-star3') as HTMLInputElement;
  let star4 = getByTestId('test-star4') as HTMLInputElement;
  let star5 = getByTestId('test-star5') as HTMLInputElement;

  expect(star1.checked).toEqual(false);
  expect(star2.checked).toEqual(false);
  expect(star3.checked).toEqual(false);
  expect(star4.checked).toEqual(false);
  expect(star5.checked).toEqual(false);
});

it('checks value', async () => {
  let { getByTestId } = render(<Rating prefix="test" value={3}></Rating>);

  let star1 = getByTestId('test-star1') as HTMLInputElement;
  let star2 = getByTestId('test-star2') as HTMLInputElement;
  let star3 = getByTestId('test-star3') as HTMLInputElement;
  let star4 = getByTestId('test-star4') as HTMLInputElement;
  let star5 = getByTestId('test-star5') as HTMLInputElement;

  expect(star1.checked).toEqual(false);
  expect(star2.checked).toEqual(false);
  expect(star3.checked).toEqual(true);
  expect(star4.checked).toEqual(false);
  expect(star5.checked).toEqual(false);
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
