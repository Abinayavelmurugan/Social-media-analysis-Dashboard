import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const SentimentAnalysisDashboard = () => {
  // Data for overall sentiment
  const overallSentimentData = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        data: [45, 25, 30],
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
      },
    ],
  };

  // Example data for individual videos
  const videoSentimentData1 = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
      },
    ],
  };

  const videoSentimentData2 = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        data: [60, 20, 20],
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
      },
    ],
  };

  const videoSentimentData3 = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        data: [40, 40, 20],
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-700">
      <h1 className="text-3xl font-bold text-white mb-6">Sentiment Analysis Dashboard</h1>

      {/* Overall Sentiment Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-4">Overall Sentiment Analysis</h2>
        <p className="text-white mb-4">
          This chart shows the overall sentiment distribution for all comments across the account.
          Positive, neutral, and negative feedback is analyzed.
        </p>
        <div className="w-100 h-100 mx-auto">
          <Pie data={overallSentimentData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>

      {/* Individual Video Analysis */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-4">Video 1: Sentiment Analysis</h2>
        <p className="text-white mb-4">
          Sentiment distribution for comments on the first video. This video received mostly
          positive feedback.
        </p>
        <div className="w-64 h-48 mx-auto">
          <Bar data={videoSentimentData1} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-black mb-4">Video 2: Sentiment Analysis</h2>
        <p className="text-black mb-4">
          Sentiment distribution for the second video shows an increase in neutral comments.
        </p>
        <div className="w-64 h-48 mx-auto">
          <Line data={videoSentimentData2} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-black mb-4">Video 3: Sentiment Analysis</h2>
        <p className="text-black mb-4">
          The third video had an even split between positive and neutral comments, with fewer
          negative sentiments.
        </p>
        <div className="w-48 h-48 mx-auto">
          <Pie data={videoSentimentData3} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>
    </div>
  );
};

export default SentimentAnalysisDashboard;
