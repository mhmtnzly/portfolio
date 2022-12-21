import './chart.css'
import React, { useEffect, useState } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Chart() {
  const [percentage, setPercentage] = useState(0);
 
  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 40);
  }, [percentage]);
  
  return (
    <div className= 'skill' id='skill'>
      <div className="leftSkill">
        <h2>Skills</h2>
        <div class="title-divider"></div>
        <p>I always invest in my knowledge portfolio.</p>
        
        <div className="charts1">
          <CircularProgressbar value={70} text={`${70}%`} />
          </div>
          <div className="charts2">
          <CircularProgressbar value={70} text={`${70}%`} />
          </div>
          <div className="charts3">
          <CircularProgressbar value={70} text={`${70}%`} />
          </div>
          <div className="charts4">
          <CircularProgressbar value={70} text={`${70}%`} />
          </div>
      </div>
      <div className="rightSkill">
        
      </div>
      
      
      </div>
    
  )
}

