import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import CountryDetail from './pages/CountryDetail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/countries/detail/:countryName"
          element={<CountryDetail />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
