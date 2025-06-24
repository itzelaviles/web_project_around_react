import { useState } from "react";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import Popup from "./components/Popup/Popup";
import Card from "./components/Card/Card";
import ImagePopup from "./components/ImagePopup/ImagePopup";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
  {
    isLiked: true,
    _id: "5d1f064ed321eb4bdcd707df",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-container profile__btn_edit-avatar"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img className="profile__avatar" src="#" alt="Avatar" />
        </div>
        <div className="profile__info">
          <p className="profile__name">Nombre</p>
          <button
            className="profile__btn profile__btn_edit-info"
            onClick={() => handleOpenPopup(editProfilePopup)}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.32827L2.60377 8.7666L1.28302 7.41936L8.66038 0L10 1.32827ZM0 10L1.96226 9.41177L0.584906 8.08349L0 10Z"
                fill="white"
              />
            </svg>
          </button>
          <p className="profile__description">Descripcion</p>
        </div>
        <button
          className="profile__btn profile__btn_add-post"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 9.77778H12.2222V0H9.77778V9.77778H0V12.2222H9.77778V22H12.2222V12.2222H22V9.77778Z"
              fill="white"
            />
          </svg>
        </button>
      </section>
      <section className="gallery">
        {cards.map((card) => (
          <Card
          key={card._id}
          card={card}
          onCardClick={handleCardClick}/>
        ))}
      </section>
      {/*La condición es que, si popup no es null, se renderiza el componente Popup y
        se pasan popup.title como title y popup.children como children*/}
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
      <ImagePopup
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </main>
  );
}

export default Main;
