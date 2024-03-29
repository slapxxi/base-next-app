import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { defaultTheme } from './style/theme';

export type Theme = typeof defaultTheme;

export interface MiddlewareRequest extends NextApiRequest {
  db?: Db;
}

export type DbApiHandler = (req: MiddlewareRequest, res: NextApiResponse) => void;

export type APIResponse<T = undefined> =
  | (T extends undefined ? { status: 'ok' } : { status: 'ok'; data: T })
  | { status: 'error'; message: string };

export type Serialized<T> = {
  [P in keyof T]: T[P] extends Date ? string : T[P];
};

export type UIComponentSize = 'sm' | 'md' | 'lg' | number;

export type UIComponentVariant = 'primary' | 'lifted' | 'secondary';

export interface UserReview {
  author: string;
  content: string;
  rating: number;
  createdAt: Date;
}

export interface RetailItem {
  id: string;
  title: string;
  price: number;
  previousPrice?: number;
  liked: boolean;
  tags: string[];
  img?: string;
}
