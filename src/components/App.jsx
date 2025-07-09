import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  //Cargar tarjetas iniciales
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardsData = await api.getInitialCards();
        setCards(cardsData);
      } catch (err) {
        console.error("Error al obtener tarjetas:", err);
      }
    };
    fetchCards();

  }, []); //vacio para solo ejecutar una vez


  //Fetch de las cards
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await api.getUserInfo();
        setCurrentUser(userData);
      } catch (err) {
        console.error("Error al cargar datos de usuario:", err);
      }
    };

    fetchUserData();
  }, []);

  //Abrir y cerrar popup
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  //Actualizacion usuario
  const handleUpdateUser = async (data) => {
    try {
      const newData = await api.updateUserInfo(data);
      setCurrentUser(newData);
      handleClosePopup();
    } catch (err) {
      console.error("Error al actualizar usuario:", err);
    }
  };

  //Actualizacion avatar
  const handleUpdateAvatar = async (data) => {
    try {
      const newData = await api.updateUserAvatar(data);
      setCurrentUser(newData);
      handleClosePopup();
    } catch (err) {
      console.error("Error al actualizar avatar:", err);
    }
  };

  //Manejar like/dislike
  async function handleCardLike(card) {
    // Verifica si el usuario actual ya dio like a esta tarjeta
    const isLiked = card.isLiked;

    try {
      // Envia la solicitud a la API
      const newCard = await api.toggleLike(card._id, !isLiked);

      // Actualiza el estado con la tarjeta modificada
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    } catch (err) {
      console.error("Error al actualizar like:", err);
    }
  }

  //Manejar eliminacion de tarjeta
  async function handleCardDelete(cardId) {
    try {
      await api.deleteCard(cardId);
      setCards((state) => state.filter((card) => card._id !== cardId));
    } catch (err) {
      console.error("Error al eliminar tarjeta", err);
    }
  }

  //Agregar nueva tarjeta
  const handleAddPlaceSubmit = async (cardData) => {
    try {
      const newCard = await api.addCard(cardData);
      setCards([newCard, ...cards]);
      handleClosePopup();
    } catch (err) {
      console.error("Error al crear tarjeta:", err);
    }
  }

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
