import NewsApi from "./APIs/NewsApi";
import CroPrices from "./Components/CroPrices";

// TODO: price apisinden aldiklarini yukarda kayan bir bolum olustur akis yap
// TODO:  Ana ekran 2 grid olacak solda haberler sagda fiyatlar
// TODO: Fiyata tiklayinca chartina gidecek 
function App() {
  return (
    <div className="App">
        <CroPrices/>
        <NewsApi />
    </div>
  );
}

export default App;
