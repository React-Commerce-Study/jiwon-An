import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import './reset.css'
import './app.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={'/homepage'} element={<HomePage />}></Route>
          <Route path={'/productdetailpage'} element={<ProductDetailPage />}></Route>
        </Routes>
      </BrowserRouter>

      <HomePage/>

    </div>


 
  );
}

export default App;