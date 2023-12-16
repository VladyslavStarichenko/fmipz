// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Components
import Button from 'Components/Button';

// Styles
import s from './Main.module.scss';

export function MainView(props) {
  const { onBeginLearningClick } = props;

  const orangeCircleClassName = cx(
    s['container__circle'],
    s['container__circle--orange']
  );

  const purpleCircleClassName = cx(
    s['container__circle'],
    s['container__circle--purple']
  );

  const greenCircleClassName = cx(
    s['container__circle'],
    s['container__circle--green']
  );

  return (
    <div className={s['container']}>
      <div className={s['container__main']}>
        <div className={s['container__main__description']}>
          <h1 className={s['container__main__description__title']}>
            Навчальна система
          </h1>
          <p className={s['container__main__description__text']}>
            з дисципліни “Формальні методи інженерії програмного забезпечення”
          </p>
        </div>
        <Button onClick={onBeginLearningClick}>
          Почати навчання
        </Button>
      </div>
      <div className={s['container__footer']}>
        <h4 className={s['container__footer__title']}>
          Виконали: Старіченко В. С, Черних І. А, Шубін І. Ю.
        </h4>
      </div>
      <div className={orangeCircleClassName} />
      <div className={purpleCircleClassName} />
      <div className={greenCircleClassName} />
    </div>
  );
}

MainView.propTypes = {
  onBeginLearningClick: PropTypes.func.isRequired,
};

export default memo(MainView);
