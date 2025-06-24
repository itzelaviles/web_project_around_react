function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { onClose, title, children } = props; // Desestructuración interna

  return (
    <div id="popup" className={`pop-up ${title ? 'pop-up_opened' : ''}`}>
      <div className="pop-up__card">
        <div className="pop-up__container">
          <button className="pop-up__btn pop-up__btn_close" onClick={onClose}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.5708 0.286517L16 12.8573L3.42918 0.286515L0.286486 3.42921L12.8573 16L0.286486 28.5708L3.42918 31.7135L16 19.1427L28.5708 31.7135L31.7135 28.5708L19.1427 16L31.7135 3.42921L28.5708 0.286517Z"
                fill="white"
              />
            </svg>
          </button>
          <p className="pop-up__title">{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;