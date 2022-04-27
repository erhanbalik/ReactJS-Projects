
import Header from "./Components/Header";
import {BrowserRouter} from 'react-router-dom';
import Pages from "./Pages/Pages";
import Footer from "./Components/Footer";
// TODO: DALGICa sor; arrayin icindeki arrayi acma
// TODO: DALGICa sor; router yaparken tiklanan coinin ismine gore bilgi getirme
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Pages/>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
