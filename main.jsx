import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import './Shop.css'
import App from './App.jsx'
import Shop from './Shop.jsx'
import ShopProcess from './ShopProcess.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* Route the welcome, catalog, and purchase screens inside one application. */}
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/Shop' element={<Shop />}></Route>
      <Route path='/process' element={<ShopProcess />}></Route>
    </Routes>
  </BrowserRouter>

)
