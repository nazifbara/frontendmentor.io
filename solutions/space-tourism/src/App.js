import { Routes, Route } from 'react-router-dom';

import routes from './routes';
import { Header } from './components';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((r) => (
          <Route key={r.name} {...r.props} />
        ))}
      </Routes>
    </>
  );
};

export default App;
