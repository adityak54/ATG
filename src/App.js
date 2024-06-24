import './App.css';
import Banner from './components/Banner/Banner';
import MainPostSection from './components/MainPostSection/MainPostSection';
import Navebar from './components/Navebar/Navebar';

function App() {

  return (
    <div className="max-width mx-auto main-font position-relative">
      <Navebar ></Navebar>
      <Banner></Banner>
      <MainPostSection></MainPostSection>
    </div>
  );
}

export default App;
