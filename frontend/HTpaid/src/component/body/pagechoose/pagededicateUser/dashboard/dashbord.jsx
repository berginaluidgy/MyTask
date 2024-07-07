// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './db.css'
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const response = await axios.get('http://localhost:8000/api/dashboard-stats/');
      setStats(response.data);
    };
    fetchStats();
  }, []);

  if (!stats) return <div>Loading...</div>;

  const usersPerDayData = {
    labels: stats.users_per_day.map(item => item.date),
    datasets: [
      {
        label: 'New Users',
        data: stats.users_per_day.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const userTypesData = {
    labels: ['Users with Career', 'Users with Missions', 'Users with Social Accounts'],
    datasets: [
      {
        data: [stats.users_with_career, stats.users_with_missions, stats.users_with_social],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      <div className="stats-overview">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{stats.total_users}</p>
        </div>
        <div className="stat-card">
          <h3>Total Videos</h3>
          <p>{stats.total_videos}</p>
        </div>
        <div className="stat-card">
          <h3>Total Social Accounts</h3>
          <p>{stats.total_social_accounts}</p>
        </div>
      </div>

      <div className="chart-container">
        <h2>New Users per Day</h2>
        <Bar data={usersPerDayData} />
      </div>

      <div className="chart-container">
        <h2>User Types</h2>
        <Pie data={userTypesData} />
      </div>
    </div>
  );
};

export default Dashboard;