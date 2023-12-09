// Modules
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Header from './Components/Header';
import RouterWrapper from './RouterWrapper';

// Styles
import s from './App.module.scss';

export function App() {
  return (
    <Router>
      <div className={s['container']}>
        <Header />
        <RouterWrapper />
      </div>
    </Router>
  );
}

export default App;
