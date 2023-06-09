import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import './reset.css'
import './app.css'
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={'/homepage'} element={<HomePage />}></Route>
          <Route path={'/productdetailpage'} element={<ProductDetailPage />}></Route>
          <Route path={'/loginpage'} element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;