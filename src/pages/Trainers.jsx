import React, { useState } from 'react';
import "../styles/Trainers.css";

const trainersData = [
  { name: 'Jason Jay M. Recto', email: 'recanjc@gmail.com', img: 'https://via.placeholder.com/40' },
  { name: 'Ron Alexander Inocencio', email: 'recanjc@gmail.com', img: 'https://via.placeholder.com/40' },
  { name: 'John Aim Cabug', email: 'recanjc@gmail.com', img: 'https://via.placeholder.com/40' },
  { name: 'Xerxes Jan Torralba', email: 'recanjc@gmail.com', img: 'https://via.placeholder.com/40' },
  { name: 'Warren Pagsuyuin', email: 'recanjc@gmail.com', img: 'https://via.placeholder.com/40' },
  { name: 'Example Name', email: 'recanjc@gmail.com', img: 'https://via.placeholder.com/40' },
];

const TrainerPage = () => {
  const [selectedTrainerIndex, setSelectedTrainerIndex] = useState(1); // Default selected trainer

  return (
    <div className="trainer-page">
      <div className="trainer-list">
        <h2>List of Trainers</h2>
        <input type="text" placeholder="Search name of trainer" />

        {trainersData.map((trainer, index) => (
          <div
            key={index}
            className={`trainer ${selectedTrainerIndex === index ? 'selected' : ''}`}
            onClick={() => setSelectedTrainerIndex(index)}
          >
            <img src={trainer.img} alt="Trainer" />
            <div>
              <div>{trainer.name}</div>
              <div>{trainer.email}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="current-video">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrainerPage;
