function Card({ card, onCardClick }) {
  const { name, link, isLiked } = card;

  return (
    <div className="gallery-card">
      <button className="gallery-card__btn gallery-card__btn_trash"></button>
      <img
        className="gallery-card__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />
      <div className="gallery-card__info">
        <p className="gallery-card__title">{name}</p>
        <button className={`gallery-card__btn gallery-card__btn_like ${isLiked ? 'gallery-card__btn_like_active' : ''}`}></button>
      </div>
    </div>
  );
}

export default Card;