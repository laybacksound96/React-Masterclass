const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}
export async function fetchCoinInfo(coinId: string) {
  const response = await fetch(`${BASE_URL}/coins/${coinId}`);
  if (!response.ok) {
    throw new Error("Error occured by fetching at fetchCoinInfo");
  } else {
    const data = await response.json();
    return data;
  }
}
export async function fetchCoinTickers(coinId: string) {
  const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
  if (!response.ok) {
    throw new Error("Error occured by fetching at fetchCoinTickers");
  } else {
    const data = await response.json();
    return data;
  }
}
export async function fetchCoinHistory(coinId: string) {
  const response = await fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  );
  if (!response.ok) {
    throw new Error("Error occured by fetching at (Fn)fetchCoinHistory");
  } else {
    const data = await response.json();
    return data;
  }
}
