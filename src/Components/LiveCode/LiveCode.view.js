// Components
import Main from './Components/Main';

// Styles
import s from './LiveCode.module.scss';

export function LiveCodeView() {
  return (
    <div className={s['container']}>
      <Main />
    </div>
  );
}

export default LiveCodeView;
