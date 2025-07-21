import React from 'react';
import './trending.css'; // Ensure this CSS file is inside the src/components folder

const characters = [
  {
    name: 'Superman',
    description: 'Man of Steel and symbol of hope.',
    image: '/images/superma.jpg', // stored in public/images
  },
  {
    name: 'Batman',
    description: 'The Dark Knight of Gotham.',
    image: '/images/Superman.jpg', // stored in public/images
  },
  {
    name: 'Wonder Woman',
    description: 'Amazonian warrior princess.',
    image: '/images/superman2.jpg', // stored in public/images
  },
];

export default function TrendingCharacters() {
  return (
    <section
      className="trending-section"
      style={{
        backgroundImage: `url('/images/dc.jpg')`, // background in public/images
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '60px 0',
      }}
    >
      <div className="trending-overlay">
        <h2 className="trending-title">Trending Characters</h2>
        <div className="character-grid">
          {characters.map((char, index) => (
            <div key={index} className="character-card">
              <img src={char.image} alt={char.name} className="character-img" />
              <h3>{char.name}</h3>
              <p>{char.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
