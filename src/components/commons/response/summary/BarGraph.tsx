import { Chart, CategoryScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import * as S from "./Summary.styles";
import { colors } from "commons/styles/palette";

export default function BarGraph() {
  Chart.register(CategoryScale);

  const data = {
    labels: ["Option 1", "Option 2", "Option 3", "Option 4"],
    datasets: [
      {
        data: [60, 30, 45, 15],
        backgroundColor: `${colors.blue[100]}`,
        borderWidth: 0,
        barThickness: 35,
        borderRadius: 2,
      },
    ],
  };

  const options = {
    maxBarThickness: 36,
    maintainAspectRatio: false,
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        color: "white",
        align: "left" as const,
        anchor: "end" as const,
        formatter: (value: any, ctx: any) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data: any) => {
            sum += data;
          });
          let percentage = (value * 100) / sum + "%";
          return `${value} (${percentage})`;
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <S.SummaryContainer>
      <S.ResponseTitle>Question</S.ResponseTitle>
      <S.ResponseCount>42 Responses</S.ResponseCount>
      <S.ChartContainer>
        <Bar data={data} width={550} height={400} options={options} />
      </S.ChartContainer>
    </S.SummaryContainer>
  );
}
