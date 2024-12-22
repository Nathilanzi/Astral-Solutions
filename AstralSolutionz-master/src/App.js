import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/Layout';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
