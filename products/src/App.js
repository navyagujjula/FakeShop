import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductList from "./components/ProductList";
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Routes>
          <Route exact path='/' element={<ProductList />} />
          <Route exact path='/product/:productId' element={<ProductDetail />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
