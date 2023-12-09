// Modules
import { Routes, Route } from 'react-router-dom';

// Components
import LiveCode from 'Components/LiveCode';
import Main from 'Components/Main';

export function RouterWrapperView() {
  return (
    <Routes>
      <Route
        element={<Main />}
        exact
        path="/presentation/:presentationId"
      />
      <Route
        element={<Main />}
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
