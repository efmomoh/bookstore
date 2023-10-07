import React from 'react';
import Chapter from './CurrentChapter';
import Progress from './Progress';
import './Styles/Status.css';

const Status = () => (
  <div className="status-container">
    <Progress />
    <Chapter />
  </div>
);

export default Status;
