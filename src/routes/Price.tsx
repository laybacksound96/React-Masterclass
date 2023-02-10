import { useQuery } from "react-query";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Rank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
  color: ${(props) => props.theme.accentColor};
  font-size: 1em;

  span {
    font-weight: bold;
    font-size: 9em;
  }
`;
const Supplies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    padding-top: 15px;
    p:first-child {
      color: ${(props) => props.theme.accentColor};
      font-size: 1.4em;
      font-weight: bold;
    }
    p:last-child {
      font-weight: lighter;
      font-size: 0.8em;
      font-style: italic;
      opacity: 70%;
      padding-left: 5px;
    }
  }
`;
interface CharProps {
  coinId: string;
}

interface ITickers {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: object;
}
function Price({ coinId }: CharProps) {
  const { isLoading, data } = useQuery<ITickers>(["tickers", coinId], () =>
    fetchCoinTickers(coinId)
  );
  return (
    <h1>
      {isLoading ? (
        "Loading..."
      ) : (
        <PriceContainer>
          <Rank>
            <span>{data?.rank}</span>
            Rank
          </Rank>
          <Supplies>
            <div>
              <p>{data?.circulating_supply}</p>
              <p>circulating_supply</p>
            </div>
            <div>
              <p>{data?.total_supply}</p>
              <p>total_supply</p>
            </div>
            <div>
              <p>{data?.max_supply}</p>
              <p>max_supply</p>
            </div>
          </Supplies>
        </PriceContainer>
      )}
    </h1>
  );
}

export default Price;
