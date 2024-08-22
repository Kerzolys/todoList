export const popupHandlers = {
  openPopup: (popup) => {
    popup.classList.remove("popup_is-closing");
    popup.classList.add("popup_is-opening");

    document.addEventListener("keydown", popupHandlers.closePopupByEsc);
  },
  closePopup: (popup) => {
    popup.classList.remove("popup_is-opening");
    popup.classList.add("popup_is-closing");

    document.removeEventListener("keydown", popupHandlers.closePopupByEsc);
  },

  closePopupByEsc: (evt) => {
    if (evt.key === "Escape" && document.querySelector(".popup_is-opening")) {
      popupHandlers.closePopup(document.querySelector(".popup_is-opening"));
    }
  },

  closePopupByOverlay: (evt) => {
    if (evt.target.classList.contains("popup")) {
      popupHandlers.closePopup(evt.currentTarget);
    }
  },
};
