import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './CSS/LookCard.module.css'
import { projectImages } from '../images';

const LookCard = ({ look: { Name, Description, Images, Status, HLink, Languages} }) => {
  //const LookCard = ({ look: { ID, Image, Name } }) => {
  const info = {
    Name,
    Description,
    Images,
    Status,
    HLink,
    Languages
  };
  
  // Get the first image from the Images array
  const imageKey = Images[0];
  
  // Debug logs
  console.log('Image key:', imageKey);
  console.log('Image source:', projectImages[imageKey]);
  
  return (
    <div className={styles.look}>
      <div>
        <p>{Name}</p>
      </div>

      <div>
        <Link to="/looksbook" state={{ info: info }}>
          <img 
            src={projectImages[imageKey] || projectImages['placeholder']} 
            alt={Name} 
          />
        </Link>
      </div>

      <div>
        <span>{Status}</span>
        <h3>{Name}</h3>
      </div>
      <Outlet/>
    </div>
  );
}

export default LookCard;