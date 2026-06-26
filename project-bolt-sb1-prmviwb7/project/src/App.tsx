import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Factory from './pages/Factory';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <WhatsAppButton />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/factory" element={<Factory />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
