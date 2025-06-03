import React from 'react';

const cards = [
  {
    id: 1,
    title: 'League of Legends',
    text: 'Aprender campeones.',
    imgUrl: 'https://pentagram-production.imgix.net/cc7fa9e7-bf44-4438-a132-6df2b9664660/EMO_LOL_02.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1440%2C1512&w=980&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=1029'
  },
  {
    id: 2,
    title: 'Warzone',
    text: 'Lootear y Ganar con tus amigos',
    imgUrl: 'https://windowsreport.com/wp-content/uploads/2022/06/warzone-886x590.jpg'
  },
  {
    id: 3,
    title: 'Valorant',
    text: 'Shooter de comunicacion y estrategia',
    imgUrl: 'https://cdna.artstation.com/p/assets/images/images/025/414/400/medium/suke-cb-key-art-327-final1.jpg?1585719646'
  },
  {
    id: 4,
    title: 'Otros',
    text: 'Si tienes alguna otra propuesta de juego dinosla.',
    imgUrl: 'https://i.pinimg.com/736x/19/a5/aa/19a5aae3f4b8d7f8bcb7dd16d180b15f.jpg'
  },
];

function Cards() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-center">
          {cards.map(card => (
            <div key={card.id} className="col-12 col-sm-6 col-lg-3 mb-4">
              <div className="card h-100">
                <img
                  src={card.imgUrl}
                  className="card-img-top"
                  alt={`Imagen para ${card.title}`}
                  style={{height:"200px", objectFit:"cover"}}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
