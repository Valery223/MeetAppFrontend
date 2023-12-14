import s from "./StyleComponents/Photo.module.css";
export function Photo() {
  return (
    <div className={s.mainWrapper}>
      <div className={s.photo}> </div>
      <div className={s.buttonContainer}>
        <span className={s.buttons}>🥶</span>
        <span className={s.buttons}>😍</span>
      </div>
    </div>
  );
}
