import './App.css';
import AnalyticsComp from './components/analyticsComp';
import CardsComp from './components/cardsComp';
import HeroComp from './components/heroComp';
import NavbarComp from './components/navbarComp';
import NewsLetterComp from './components/newsLetterComp';

function App() {
    return (
        <>
            <NavbarComp />
            <HeroComp />
            <AnalyticsComp />
            <NewsLetterComp />
            <CardsComp />
        </>
    );
}

export default App;
