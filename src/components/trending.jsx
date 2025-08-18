import React from 'react';
import './trending.css'; // Ensure this CSS file is inside the src/components folder

const characters = [
  {
    name: 'Destiny',
    description: 'Man of Steel and symbol of hope.',
    image: '/images/img1.jpeg', // stored in public/images
  },
  {
    name: 'Batman',
    description: 'The Dark Knight of Gotham.',
    image: '/images/img2.jpeg', // stored in public/images
  },
  {
    name: 'Wonder Woman',
    description: 'Amazonian warrior princess.',
    image: '/images/img1.jpeg', // stored in public/images
  },
];

export default function TrendingCharacters() {
  return (
    <section
      className="trending-section"
      style={{
        backgroundImage: `url('/images/sky.jpg')`, // background in public/images
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
