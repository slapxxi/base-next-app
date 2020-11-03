import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { defaultTheme } from './style/theme';

export interface MiddlewareRequest extends NextApiRequest {
  db?: Db;
}

export type DbApiHandler = (req: MiddlewareRequest, res: NextApiResponse) => void;

export type APIResponse<T = undefined> =
  | (T extends undefined ? { status: 'ok' } : { status: 'ok'; data: T })
  | { status: 'error'; message: string };

export type Theme = typeof defaultTheme;

export type WithTheme<P = {}> = { theme: Theme } & P;

export enum AuctionCategory {
  natural = 'Natural',
  drawing = 'Drawing',
  digitalArt = 'Digital Art',
  handmade = 'Handmade',
  sculpture = 'Sculpture',
}

export interface AuctionLot {
  id: string;
  name: string;
  author: string;
  startingPrice: number;
  category: AuctionCategory;
  img: string;
}
