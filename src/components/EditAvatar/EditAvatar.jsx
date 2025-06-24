function EditAvatar() {
  return (
    <form className="pop-up__form" id="edit-avatar-form">
      <input
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
