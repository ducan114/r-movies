import React from 'react';
// Components
import Actor from './components/Actor';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
// Contexts
import { AuthProvider } from './contexts/AuthContext';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <AuthProvider>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:movieId' element={<Movie />} />
        <Route path='/actors/:actorId' element={<Actor />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
