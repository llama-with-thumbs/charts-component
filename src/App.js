import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

import './App.css';

function App() {
  return (
    <div>
      {/* <Routes>
        <Route exact path="/" component={HomePage} />
      </Routes> */}
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
