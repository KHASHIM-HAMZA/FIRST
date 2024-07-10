import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const DashBoard = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HomePage</title>
      </head>
      <body>
        <nav>
          <ul className="sidebar" style={{ display: isSidebarVisible ? 'flex' : 'none' }}>
            <li>
              <a href="#" onClick={closeSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </a>
            </li>
            <li><Link to="dashboard.html">DASHBOARD</Link></li>
            <li><Link to="./records">RECORDS & WORKOUTS</Link></li>
            <li><Link to="./progress">PROGRESS & TUTORIALS</Link></li>
            <li><Link to="./history">HISTORY</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
          </ul>
          <ul>
            <li><a style={{ color: 'darkblue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>FITVERSE</a></li>
            <li className="hideOnMobile"><Link to="/dashboard">DASHBOARD</Link></li>
            <li className="hideOnMobile"><Link to="./records">RECORDS & WORKOUTS</Link></li>
            <li className="hideOnMobile"><Link to="./progress">PROGRESS & TUTORIALS</Link></li>
            <li className="hideOnMobile"><Link to="./history">HISTORY</Link></li>
            <li className="hideOnMobile"><Link to="/about">ABOUT US</Link></li>
            <li className="menu-button" onClick={showSidebar}>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </body>
    </div>
  );
};

export default DashBoard;
