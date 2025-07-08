import { useContext, useRef } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditAvatar() {
  const avatarUrlRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateAvatar({
      avatar: avatarUrlRef.current.value
    });
  };

  return (
    <form className="pop-up__form" id="edit-avatar-form" onSubmit={handleSubmit}>
      <input
        ref={avatarUrlRef}
        name="avatarUrl"
        className="pop-up__input"
        type="url"
        pattern="https?://.+\..+"
        title="Debe ser una URL comenzando con http:// o https://"
        id="popup-avatar-url"
        placeholder="Enlace a la imagen"
        required
      />
      <span className="pop-up__input-error popup-avatar-url-error"></span>

      <button className="pop-up__btn pop-up__btn_save">Guardar</button>
    </form>
  );
}

export default EditAvatar;
