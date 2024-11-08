import React from 'react';
import "./Card.css";


const Card = ({ title, content, imageUrl }) => {
  return (
    <div style={styles.card}>
      {imageUrl && <img src={imageUrl} alt={title} style={styles.image} />}
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.content}>{content}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    maxWidth: '300px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    borderRadius: '8px 8px 0 0',
  },
  title: {
    fontSize: '1.5em',
    margin: '8px 0',
  },
  content: {
    fontSize: '1em',
    color: '#555',
  },
};

export default Card;
