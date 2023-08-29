import React from 'react';

const Home = () => {
  const ranking = [
    { anime: 'Naruto', rating: 9.5 },
    { anime: 'One Piece', rating: 9.3 },
    { anime: 'Attack on Titan', rating: 9.2 },
    { anime: 'Death Note', rating: 9.0 },
    { anime: 'Fullmetal Alchemist: Brotherhood', rating: 9.0 }
  ];

  return (
    <div>
      <h1>Ranking de Reseñas de Anime</h1>
      <ul>
        {ranking.map((item, index) => (
          <li key={index}>
            <strong>{item.anime}</strong> - {item.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;