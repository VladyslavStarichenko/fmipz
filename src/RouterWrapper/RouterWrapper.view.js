// Modules
import { Routes, Route } from 'react-router-dom';

// Components
import LiveCode from 'Screens/LiveCode';
import Main from 'Screens/Main';
import Presentations from 'Screens/Presentations';

export function RouterWrapperView() {
  return (
    <Routes>
      <Route
        element={<Main />}
        path="/"
      />
      <Route
        element={<Presentations />}
        exact
        path="/presentation/:presentationId"
      />
      <Route
        element={<Presentations />}
        exact
        path="/presentation/:presentationId/code"
      />
      <Route
        element={<LiveCode />}
        exact
        path="/live-code"
      />
      <Route
        element={<Main />}
        path="*"
      />
    </Routes>
  );
}

export default RouterWrapperView;
