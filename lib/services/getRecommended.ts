import { APIResponse, AuctionLot } from '../types';

const URL = `${process.env.NEXT_PUBLIC_HOST}/api/v1/recommended`;

export async function getRecommended(): Promise<AuctionLot[]> {
  let response = await fetch(URL);
  let apiResponse: APIResponse<AuctionLot[]> = await response.json();

  if (apiResponse.status === 'ok') {
    return apiResponse.data;
  }

  throw new Error(apiResponse.message);
}
