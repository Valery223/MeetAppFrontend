import s from "./Search.module.css";

export function Search() {
  return (
    <div className={s.mainWrapper}>
      <div className={s.photoWrapper}>
        <div className={s.photo}> </div>
        <span className={s.buttons}>🥶</span>
        <span className={s.buttons}>😍</span>
      </div>
      <div className={s.textWrapper}>
        <div>Евгений 32 ГОДА ПОШЛЫЙ ХАЧЮ ЖОСКАФА SEXINGA</div>
        <div>Описание</div>
        <div>Личная информация</div>
      </div>
    </div>
  );
}
