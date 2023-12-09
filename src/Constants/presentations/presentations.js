// Constants
import JAVA_SLIDERS from 'Constants/javaSliders';
import PRACTICE_SLIDERS1 from 'Constants/practiceSliders1';
import PRACTICE_SLIDERS2 from 'Constants/practiceSliders2';
import PRESENTATION_SLIDERS1 from 'Constants/presentationSliders1';
import PRESENTATION_SLIDERS2 from 'Constants/presentationSliders2';
import PRESENTATION_SLIDERS3 from 'Constants/presentationSliders3';
import PYTHON_SLIDERS from 'Constants/pythonSliders';

export const PRESENTATIONS = Object.freeze([
  {
    slides: PRESENTATION_SLIDERS1,
    title: 'Контрактне програмування',
    type: 'Лабораторна робота 1',
  },
  {
    slides: PRESENTATION_SLIDERS2,
    title: 'Дедуктивна верифікація програм',
    type: 'Лабораторна робота 2',
  },
  {
    slides: PRESENTATION_SLIDERS3,
    title: 'Верифікація програм на основі темпоральної логіки',
    type: 'Лабораторна робота 3',
  },
  {
    slides: PRACTICE_SLIDERS1,
    title: 'Дедуктивна верифікація програм',
    type: 'Практичне заняття 1',
  },
  {
    slides: PRACTICE_SLIDERS2,
    title: 'Верифікація програм на основі темпоральної логіки',
    type: 'Практичне заняття 2',
  },
  {
    slides: PYTHON_SLIDERS,
    title: 'Контрактне програмування в Python',
    type: 'Презентація 1',
  },
  {
    slides: JAVA_SLIDERS,
    title: 'Контрактне програмування в Java',
    type: 'Презентація 2',
  },
]);

export default PRESENTATIONS;
