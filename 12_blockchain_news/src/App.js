
import Header from "./Components/Header";
import {BrowserRouter} from 'react-router-dom';
import Pages from "./Pages/Pages";
import Footer from "./Components/Footer";
import {AnimatePresence, motion} from 'framer-motion'

// TODO: DALGICa sor; arrayin icindeki arrayi acma
// TODO: DALGICa sor; router yaparken tiklanan coinin ismine gore bilgi getirme
function App() {
  return (
    <AnimatePresence exitBeforeEnter>
    <motion.div className="App"
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{delay:1}}
    >
        <BrowserRouter>
            <Header/>
            <Pages/>
            <Footer/>
        </BrowserRouter>
    </motion.div>
    </AnimatePresence>
  );
}

export default App;
