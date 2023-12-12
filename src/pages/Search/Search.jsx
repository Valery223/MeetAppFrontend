import s from "./Search.module.css";

export function Search() {
  return (
    <div className={s.mainWrapper}>
      <div className={s.photoWrapper}>
        <h1>Photo</h1>
      </div>
      <div className={s.textWrapper}>
        <h1>Text</h1>
      </div>
    </div>
  );
}
