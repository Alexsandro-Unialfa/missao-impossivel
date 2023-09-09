import React, { useState } from 'react';

export const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    backgroundColor: '#303030',
    padding: 20,
    margin: 20,
    borderRadius: 8,
    width: 200,
    cursor: 'pointer',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.2s ease',
  };

  const imageStyle = {
    width: isHovered ? '110%' : '100%', // Aumenta a largura da imagem ao passar o mouse
    transition: 'width 0.2s ease', // Adiciona uma transição suave para a largura da imagem
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={props.imagem} style={imageStyle} />
      <h2
        style={{
          marginTop: 10,
          textAlign: 'center'
        }}
      >
        {props.titulo}
      </h2>
    </div>
  );
};
