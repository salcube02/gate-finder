"use client";

import { useTranslations } from 'next-intl';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function StatisticsChart() {
  const t = useTranslations('dashboard');

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },

      tooltips: {
        position: "nearest",
        mode: "index",
        intersect: false,
        yPadding: 10,
        xPadding: 10,
        caretSize: 8,
        backgroundColor: "rgba(72, 241, 12, 1)",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 4,
      },
    },
  };

  const labels = [t('january'), t('february'), t('march'), t('april'), t('may'), t('june')];

  const data = {
    labels,
    datasets: [
      {
        label: t('dataset'),
        data: labels.map(() => faker.number.int({ min: 100, max: 400 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: [196, 132, 215, 362, 210, 252],
        fill: false,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
