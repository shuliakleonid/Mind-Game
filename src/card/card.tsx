import React from 'react';
import img from '../robocar.svg';
import s from './card.module.css';


const Card = () => {
  // const cards = cardsWithWord.map(card=><div>card.img,</div>)
  return (
      <div className={s.container}>
        <div>
          <img src={img} alt=""/>
          <p>Слова</p>
        </div>
        <div>
          <img src={img} alt=""/>
          <p>Слова</p>
        </div>
        <div>
        <img src={img} alt=""/>
        <p>Слова</p>
      </div>
        <div>
        <img src={img} alt=""/>
        <p>Слова</p>
      </div>
        <div>
        <img src={img} alt=""/>
        <p>Слова</p>
      </div>
        <div>
        <img src={img} alt=""/>
        <p>Слова</p>
      </div>
        <div>
        <img src={img} alt=""/>
        <p>Слова</p>
      </div>

      </div>
  );
};

export default Card;
