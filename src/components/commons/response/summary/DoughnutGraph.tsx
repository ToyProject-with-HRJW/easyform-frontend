import { Chart, CategoryScale } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import * as S from "./Summary.styles";
import { colors } from "commons/styles/palette";

export default function DoughnutGraph() {
  Chart.register(CategoryScale, ChartDataLabels);

  const data = {
    labels: ["Option 1", "Option 2"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: [`${colors.blue[100]}`, "#dde6ff"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        color: "white",
        formatter: (value: number) => {
          return value + "%";
        },
      },
      legend: {
        position: "right" as const,
      },
    },
  };

  return (
    <S.SummaryContainer>
      <S.ResponseTitle>Question</S.ResponseTitle>
      <S.ResponseCount>42 Responses</S.ResponseCount>
      <S.ChartContainer>
        <Doughnut data={data} width={400} height={400} options={options} />
      </S.ChartContainer>
    </S.SummaryContainer>
  );
}
