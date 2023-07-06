import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(30, 50, 50, 0.2)',
      borderColor: '#000',
      borderWidth: 1,
    },
    {
        label: '#2 of Votes',
        data: [2, 6, 5, 6, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#000',
        borderWidth: 1,   
    }
  ],
};

export default function RadarChart() {
    const estilos = {
        backgroundColor: 'rgba(39, 103, 245, 0.35)',
        width: '80%',
    }
    return (
        <div className='glass rounded shadow-xl' style={estilos}>
            <Radar data={data} />
        </div>
    )
}