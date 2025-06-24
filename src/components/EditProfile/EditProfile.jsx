function EditProfile() {
  return (
    <form className="pop-up__form" id="edit-profile-form">
      <input
        id="popup-name"
        name="name"
        className="pop-up__input"
        type="text"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="pop-up__input-error popup-name-error"></span>

      <input
        name="description"
        className="pop-up__input"
        type="text"
        id="popup-about-me"
        placeholder="Acerca de mi"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="pop-up__input-error popup-about-me-error"></span>

      <button className="pop-up__btn pop-up__btn_save">Guardar</button>
    </form>
  );
}

export default EditProfile;