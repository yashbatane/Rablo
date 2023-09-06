import React, { useEffect, useState } from 'react';
import './tutDashboardNavbar.css';

import pointsIcon from './images/points.svg';
import notifIcon from './images/notifications.svg';
import profilePic from './images/profile.jpg';
import menuIcon from './images/menuIcon.svg';
import rewards from "./images/rewards.png";

// Function that returns the current date (dd/mm/yyyy)
const getDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
// const [rewardpoints,setRewardpoints]=useState("0");
// Function that returns the current time
const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();

  return `${hours}:${mins}`;
};

const TutDashboardNavbar = ({ handleSidebarOpenClick }) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(getDate());
      setTime(getTime());
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
      setDate(null);
      setTime(null);
    };
  }, []);

  return (
    <div className='NavbarContainer'>
      <div className='time'>
        <p>
          Today ,
        </p>
        {date},
        <p>
          {time}
        </p>
      </div>

      <div className='info'>
        <div className='rewardPointContainer'><img src={rewards} /><span>99</span></div>
        {/* <img src={pointsIcon} className='rewardPoints' alt='reward points' />
        <img src={notifIcon} className='notifications' alt='notifications' /> */}
        <button className='openSidebar' onClick={handleSidebarOpenClick}>
          <img src={menuIcon} alt='menu icon' />
        </button>
        <div className='profile'>
          <img src={profilePic} className='profileImg' alt='' />
          <p className='name'>Sherlock Holmes</p>
          {/* <p className='points'>99 Points</p> */}
        </div>
      </div>
    </div>
  );
};

export default TutDashboardNavbar;
