import './App.scss';
import Account from './views/Account/Account';
import Astra from './views/Astra/Astra';
import Home from './views/Home/Home';
import Todolist from './views/Todolist/Todolist';
import Header from './views/header/header';
import Footer from './views/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shirt from './views/Products/Shirt';
import Trousers from './views/Products/Trousers';
import Shoe from './views/Products/Shoe';
import Socks from './views/Products/Socks';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-18-image-lightbox/style.css"
import Notfound from './views/Products/404';
import Product from './views/Products/Product';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='main-content row'>
          <div className='col-3'>
            <Todolist />
          </div>
          <div className='col-9'>
            <div className="tab-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/astra" element={<Astra />} />
                <Route path="/:name" element={<Product />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
              {/* <div id="home" className="container tab-pane active">
                <Home />
              </div>
              <div id="menu1" className="container tab-pane fade">
                <Astra />
              </div> */}
              {/* <div id="menu2" className="container tab-pane fade">
                <Account />
              </div> */}
            </div>
            {/* <Routes>
              <Route path="/Shirt" element={<Shirt />} />
              <Route path="/Trousers" element={<Trousers />} />
              <Route path="/Shoe" element={<Shoe />} />
              <Route path="/Socks" element={<Socks />} />
              <Route path="*" element={<Notfound />} />
            </Routes> */}
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
