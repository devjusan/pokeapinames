import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Feed from './Components/Pokemon/Feed';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Feed />
      </main>
      <Footer />
    </div>
  );
}

export default App;
