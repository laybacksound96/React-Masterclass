import { useQuery } from "react-query";

import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface CharProps {
  coinId: string;
}
function Chart({ coinId }: CharProps) {
  const { isLoading, data } = useQuery<IData[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        // @ts-ignore
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data:
                data?.map((price) => [
                  price.time_close,
                  parseFloat(price.open),
                  parseFloat(price.high),
                  parseFloat(price.low),
                  parseFloat(price.close),
                ]) ?? [],
            },
          ]}
          options={{
            theme: { mode: "dark" },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
              animations: {
                enabled: true,
              },
            },
            stroke: {
              curve: "smooth",
              width: 2,
            },
            grid: {
              show: true,
            },
            yaxis: {
              show: true,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((price) =>
                new Date(price.time_close * 1000).toUTCString()
              ),
            },
            // fill: {
            //   type: "gradient",
            //   gradient: { gradientToColors: ["#4cd137"], stops: [0, 100] },
            // },
            colors: ["#37d1bf"],
            // plotOptions: {
            //   candlestick: {
            //     colors: {
            //       upward: "#3C90EB",
            //       downward: "#DF7D46",
            //     },
            //   },
            // },
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(0)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
