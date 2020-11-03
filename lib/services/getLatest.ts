import { AuctionCategory, AuctionLot } from '../types';

export async function getLatest(): Promise<AuctionLot[]> {
  return [
    {
      id: '1',
      name: 'Peaches',
      author: 'Ivan Ivanov',
      startingPrice: 3990,
      category: AuctionCategory.natural,
      img: '/images/latest-1.png',
    },
    {
      id: '2',
      name: 'Girl',
      author: 'Ivan Ivanov',
      startingPrice: 2990,
      category: AuctionCategory.natural,
      img: '/images/latest-3.png',
    },
    {
      id: '3',
      name: 'Preacher',
      author: 'Ivan Ivanov',
      startingPrice: 1990,
      category: AuctionCategory.natural,
      img: '/images/latest-5.png',
    },
    {
      id: '4',
      name: 'Lincoln',
      author: 'Ivan Ivanov',
      startingPrice: 8990,
      category: AuctionCategory.sculpture,
      img: '/images/latest-6.png',
    },
  ];
}
