function NewCard() {
  return (
    <form className="pop-up__form" id="new-place-form">
      <input
        id="popup-place-title"
        name="title"
        className="pop-up__input"
        type="text"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="pop-up__input-error popup-place-title-error"></span>

      <input
        name="imageUrl"
        className="pop-up__input"
        type="url"
        pattern="https?://.+\..+"
        title="Debe ser una URL comenzando con http:// o https://"
        id="popup-place-img"
        placeholder="Enlace a la imagen"
        required
      />
      <span className="pop-up__input-error popup-place-img-error"></span>

      <button className="pop-up__btn pop-up__btn_save">Crear</button>
    </form>
  );
}

export default NewCard;
