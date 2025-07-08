import { useState } from "react";

function NewCard({ onAddPlaceSubmit }) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddPlaceSubmit({ title, imageUrl });
  };

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  }

  const handleImageUrlChange = (evt) => {
    setImageUrl(evt.target.value);
  }

  return (
    <form className="pop-up__form" id="new-place-form" onSubmit={handleSubmit}>
      <input
        id="popup-place-title"
        name="title"
        className="pop-up__input"
        type="text"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        required
        value={title}
        onChange={handleTitleChange}
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
        value={imageUrl}
        onChange={handleImageUrlChange}
      />
      <span className="pop-up__input-error popup-place-img-error"></span>

      <button className="pop-up__btn pop-up__btn_save">Crear</button>
    </form>
  );
}

export default NewCard;
