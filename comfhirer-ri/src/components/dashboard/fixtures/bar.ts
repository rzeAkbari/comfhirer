import { faker } from '@faker-js/faker';

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Medication month distribution',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: false,
    },
    y: {
      stacked: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Medication A',
      data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Medication B',
      data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Medication C',
      data: labels.map(() => faker.datatype.number({ min: -100, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};
