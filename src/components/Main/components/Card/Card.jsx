function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const { name, link, isLiked } = card;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card._id);
  }

  return (
    <div className="gallery-card">
      <button
        className="gallery-card__btn gallery-card__btn_trash"
        onClick={handleDeleteClick}
      ></button>
      <img
        className="gallery-card__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />
      <div className="gallery-card__info">
        <p className="gallery-card__title">{name}</p>
        <button
          className={`gallery-card__btn gallery-card__btn_like ${
            isLiked ? "gallery-card__btn_like_active" : ""
          }`}
          onClick={handleLikeClick}
        ></button>
      </div>
    </div>
  );
}

export default Card;
