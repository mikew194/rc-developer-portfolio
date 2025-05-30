import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';
import { Suspense } from 'react';
import Spinner from '../ui/Spinner';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;