import React from "react";
import s from "./StyleComponents/Photo.module.css";

export function Photo() {
  // Функции обработки нажатия на кнопки
  const handleEmojiClick = (emoji) => {
    console.log(`Emoji clicked: ${emoji}`);
  };

  return (
    <div className={s.mainWrapper}>
      <div className={s.photo}>
        <img
          src="https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B3%D0%BE-%D0%B2%D0%B7%D1%80%D0%BE%D1%81%D0%BB%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D0%BD%D0%B0-%D1%84%D0%BE%D0%BD%D0%B5-%D0%BE%D0%B1%D1%8B%D1%87%D0%BD%D0%BE%D0%B3%D0%BE-%D1%84%D0%BE%D0%BD%D0%B0-%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%B9%D0%BD%D1%8B%D0%B9-160029790.jpg"
          alt="Man on photo"
        />
      </div>
      <div className={s.buttonContainer}>
        <button
          className={s.buttons}
          onClick={() => handleEmojiClick("🥶")}
          tabIndex="0"
          role="button"
          aria-label="Cold face emoji button"
        >
          🥶
        </button>
        <button
          className={s.buttons}
          onClick={() => handleEmojiClick("😍")}
          tabIndex="0"
          role="button"
          aria-label="Heart eyes emoji button"
        >
          😍
        </button>
      </div>
    </div>
  );
}
