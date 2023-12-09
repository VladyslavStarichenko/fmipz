// Styles
import s from './OutputWindow.module.scss';

export function OutputWindowEmpty() {
  return (
    <p className={s['container__empty']}>
      Скомпілюйте код, щоб отримати результат.
    </p>
  );
}

export default OutputWindowEmpty;
