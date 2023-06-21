import './App.css';
import CategorySection from './components/CategorySection';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { ProductContext } from './contexts/ProductContext';
// import MainCarousel from './components/MainCarousel';
// import Products from './components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Cart from './components/Cart';
import SideMenu from './components/SideMenu';

function App() {
  const { fashionProducts, accessoryProducts, digitalProducts } =
    useContext(ProductContext);
  return (
    <BrowserRouter>
      <input type='checkbox' id='side-menu' className='drawer-toggle' />
      <section className='drawer-content'>
        <Header />
        <section className='main pt-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Detail />} />
            <Route
              path='/fashion'
              element={
                <CategorySection
                  category={'패션'}
                  productsInfo={fashionProducts}
                />
              }
            />
            <Route
              path='/accessory'
              element={
                <CategorySection
                  category={'액세서리'}
                  productsInfo={accessoryProducts}
                />
              }
            />
            <Route
              path='/digital'
              element={
                <CategorySection
                  category={'디지털'}
                  productsInfo={digitalProducts}
                />
              }
            />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </section>
        <Footer />
      </section>
      <SideMenu />
    </BrowserRouter>
  );
}

export default App;
