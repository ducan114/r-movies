import React from 'react';
// Components
import Actor from './components/Actor';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import PageNotFound from './components/PageNotFound';
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
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  </AuthProvider>
);

export default App;
