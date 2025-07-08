import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (evt) => {
    setName(evt.target.value); //actualiza name cuando cambia la entrada
  };

  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateUser({ name, description });
  };

  return (
    <form
      className="pop-up__form"
      id="edit-profile-form"
      onSubmit={handleSubmit}
    >
      <input
        id="popup-name"
        name="name"
        className="pop-up__input"
        type="text"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={handleNameChange}
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
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="pop-up__input-error popup-about-me-error"></span>

      <button className="pop-up__btn pop-up__btn_save">Guardar</button>
    </form>
  );
}

export default EditProfile;
