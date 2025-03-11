import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (for example, when fetching data)
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
        <>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </>
      )
    </div>
  );
}

export default Layout;
